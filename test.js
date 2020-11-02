var AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions({region: 'us-east-1'});

// var params = {
//     executionArn: 'arn:aws:states:us-east-1:375283443325:execution:WorkflowStateMachine:117bad1c-1065-4871-b3be-597e2444f252' /* required */
//   };
//   stepfunctions.getExecutionHistory(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
//   });


var params = {
    error: null,
    cause: 'User recalled the request',
    executionArn: 'arn:aws:states:us-east-1:375283443325:execution:WorkflowStateMachine:dcb98a14-771f-4465-9050-ecb68c307e0f' /* required */
  };

  stepfunctions.stopExecution(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });