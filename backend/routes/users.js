const express = require('express');
const router = express.Router();
const data = require('../data');
const users = data.users;

router.post('/', async(req,res) => {
    try {
        let request = req.body;
        if(!request.id || !request.name || !request.email ) {
            res.status(400).json({error: "Please pass all the fields"});
            return;
        }
        if(typeof request.id !== "string" || typeof request.name !== "string" ){
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
});

router.patch('/', async (req,res) => {
    try {
        const data = req.body;
        if(!data.id || (!data.score && (data.score === null || data.score === undefined)) || (!data.solution && (data.solution === null || data.solution === undefined)) || !data.category || !data.primary) {
            res.status(400).json({error: "Please pass all the fields"});
            return;
        }
        if(typeof data.id !== "string" || typeof data.score !== 'number' || typeof data.solution !== "number" ||typeof data.category !== "string" || typeof data.primary !== "string") {
            res.status(400).json({error: "Invalid type of data"});
            return;
        }
        let updated = await users.updateScore(data.id, data.score, data.solution,  data.category, data.primary);
        res.json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
})

router.patch('/feedback/:userId', async (req,res) => {
    try {
        const id = req.params.userId;
        const {scoreId, answer1, answer2} = req.body;

        if(!id || !scoreId || !answer1 || !answer2) {
            res.status(400).json({error: "Insufficent input"});
            return;
        }

        if(typeof id !== "string" || typeof scoreId !== "string" || !Boolean(answer1) || !Boolean(answer2)) {
            res.status(400).json({error: "Invalid inputs"});
            return;
        }

        const result = await users.updateFeedback(id, scoreId, answer1, answer2);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:error});
    }
} )

module.exports = router;