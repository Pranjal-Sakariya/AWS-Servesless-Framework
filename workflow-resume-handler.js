'use strict';
const AWS = require('aws-sdk');
const stepfunctions = new AWS.StepFunctions();

module.exports.resume =  async (event, context, callback) => {
  const stateMachineArn = process.env.statemachine_arn;

  console.log("Events",event);
  console.log("Context",context);

  const body = JSON.parse(event.body);

  if (!(body && body!=null)) {
    throw new Error("Body is not found")
  }

  const {taskToken, actionPayload} = body;

  const params = {
    taskToken,
    output: JSON.stringify(actionPayload)
  }

  try{
    const responseObj = await stepfunctions.sendTaskSuccess(params).promise();
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
        body: err.message || 'Error occurred while resuming workflow'
    };

    return response;
  }
};
