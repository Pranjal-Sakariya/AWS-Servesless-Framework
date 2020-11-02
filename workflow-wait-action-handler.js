'use strict';

module.exports.waitForUserAction = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    //send email to User 

    const taskToken = event['taskToken'];

    // persist task token so that it can used later to resume workflow
    console.log(`Task Token: ${taskToken}`);
    const response = {
        taskToken,
        event
    }
    callback(null, response);
};