'use strict';
const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();

module.exports.initateApproval =  async (event, context, callback) => {
  const stateMachineArn = process.env.statemachine_arn;

  const body = JSON.parse(event.body);

  const input = {
    application: 'SERVICE',
    data: {
            id: body.id
          }
  }
  
  const params = {
    stateMachineArn,
    input: JSON.stringify(input)
  }

  try{
    const responseObj = await stepfunctions.startExecution(params).promise();
    console.log("Response: ",responseObj);
    const response = {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(responseObj)
    };
    return response;
  }catch(err){
    const response = {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' },
        body: error.message || 'Error occurred while initiating workflow'
    };

    return response;
  }
};
