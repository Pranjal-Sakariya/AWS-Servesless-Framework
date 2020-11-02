'use strict';

module.exports.expire = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    //send email to User 
    //Update Db to say its pending with level 1 approver

    const response = {
        state: event
    };

    callback(null, response);
};