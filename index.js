const ogs = require('open-graph-scraper');

exports.handler = async (event, context, callback) => {
  let url = event.url || null; //테스트 케이스가 존재할 경우 없으면 null
  
  if(event.queryStringParameters != null){ //url 파라메터에 url 값이 존재하면
      url = event.queryStringParameters.url;
  }

 const result = await ogs({ url }, (error, results, response) => {
    return results;
  });

  const response = {
      statusCode: 200,
      body: JSON.stringify(result),
  };

  return response;
};