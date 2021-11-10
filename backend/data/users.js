const {users} = require('../config/mongoCollections');
const {ObjectId} = require("mongodb");

const getCurrentTime = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}

const createUser = async data => {
    if(!data.id || !data.name || !data.email || (!data.score && (data.score === null || data.score === undefined)) ) throw "Please pass all the fields";
    if(typeof data.id !== "string" || typeof data.name !== "string" || typeof data.score !== 'number' ) throw "Invalid type of data";

    const collection = await users();

    let currentTime = getCurrentTime();
    let newEntry = {
        ...data,
        createdAt: currentTime,
        lastChecked: null
    }

    const newEntryInfo = await collection.insertOne(newEntry);

    if(newEntryInfo.insertedCount === 0) throw "Could not add the restaurant";

    const newEntryId = newEntryInfo.insertedId;

    let addedEntry = await collection.findOne({_id: newEntryId});
    if(addedEntry === null) throw "Could not find user for the given ID";
    let result = {
        ...addedEntry
    }

    delete result._id;
    return result;
}

const getUser = async id => {
    if(!id) throw "Please pass an ID";
    if(typeof id !== "string") throw "Invalid ID";

    const collection = await users();
    let found = await collection.findOne({id: id});
    return found;
}

const updateScore = async (id,score) => {
    if(!id || (!score && (score === null || score === undefined))) throw "Please pass all fields";
    if(typeof id !== "string" || typeof score !== 'number') throw "Invalid param types";

    let collection = await users();
    let found = await collection.findOne({id: id});
    if(!found) throw "could not find any user with that ID";

    let newUpdate = {
        score: score,
        lastChecked: getCurrentTime()
    }

    const updatedInfo = await collection.updateOne({id: id},{$set: newUpdate});
    if(updatedInfo.modifiedCount === 0) throw `${found.name} could not be modified`;
    let updatedRecord = await collection.findOne({id: id});
    if(!updatedRecord) throw "could not find any updated record with that ID";

    return updatedRecord;
}

module.exports = {
    createUser,
    getUser,
    updateScore
}