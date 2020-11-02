'use strict';

module.exports.level2Approve = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    //send email to User 

    let state = event.state;
   
    const response = {
        state
    };

    callback(null, response);
};