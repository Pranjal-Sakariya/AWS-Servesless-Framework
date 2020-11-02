'use strict';

module.exports.level1Approve = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    //send email to User 
    //Update Db to say its pending with level 1 approver

    let state = event.state;
   
    const response = {
        state
    };

    callback(null, response);
};