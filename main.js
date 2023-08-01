var request = require("request");
          
var options = { method: 'POST',
  url: 'https://api.uptimerobot.com/v2/getMonitors',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { api_key: 'ur1328404-7d0a8b35fedac49b225dfbfc', format: 'json', logs: '1' } };
          
request(options, function (error, response, body) {
  if (error) throw new Error(error);
          
  console.log(body);
});