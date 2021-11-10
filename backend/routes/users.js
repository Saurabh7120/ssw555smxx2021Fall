const express = require('express');
const router = express.Router();
const data = require('../data');
const users = data.users;

router.post('/', async(req,res) => {
    try {
        let request = req.body;
        if(!request.id || !request.name || !request.email || (!request.score && (request.score === null || request.score === undefined)) ) {
            res.status(400).json({error: "Please pass all the fields"});
            return;
        }
        if(typeof request.id !== "string" || typeof request.name !== "string" || typeof request.score !== 'number' ){
            res.status(400).json({error: "Invalid type of data"});
            return;
        } 
        let created = await users.createUser(request);
        if(created) {
            res.status(200).json(created);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
});

router.get('/:id', async (req,res) => {
    try {
        let id = req.params.id;
        if(!id) {
            res.status(400).json({error: "Please pass an ID"});
            return;
        }
        if(typeof id !== "string"){
            res.status(400).json({error: "Invalid type of ID"});
            return;
        } 
        let found = await users.getUser(id);
        res.json(found);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
})

module.exports = router;