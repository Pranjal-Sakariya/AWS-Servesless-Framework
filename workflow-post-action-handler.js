'use strict';

module.exports.processDecision = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    // Update DB
    //send email to User 

    // const response = `The request id ${event.id} is LEVEL 2 Approved`;

    callback(null, event);
};