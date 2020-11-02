'use strict';

module.exports.getApprovalFlowConditions = async (event, context, callback) => {
    
    console.log("Event: ",event);
    console.log("Context: ",context);

    const conditions = [
        {
          minMargin: 0,
          maxMargin: 10,
          level: 'AUTO_APPROVE'
        },
        {
          minMargin: 10,
          maxMargin: 20,
          level: 'LEVEL_1'
        },
        {
          minMargin: 20,
          maxMargin: 30,
          level: 'LEVEL_2'
        },
      ]

    // get details
    const id = event.data.id;

    let margin = process(id);

    let level = 'AUTO_APPROVE';

    for(let condition of conditions){
        if(margin > condition.minMargin && margin <= condition.maxMargin){
            level = condition.level;
            break;
        }
    }

    const time = 3;
    const response = {
      state: {
                level,
                id: id,
                margin: margin,
              }
    }

    callback(null, response);
};

const process = (id) =>{
    // could do any process one desire
    return id * 10;
}
