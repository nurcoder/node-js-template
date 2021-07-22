const express = require('express')
const PORT = process.env.PORT || 5000
 
const request = require('request');
 

express()
  .get('/', (req, resx) => {
    request.post(req.query.url, {
      headers: {
        'apikey': 'pZnOU38qeiH6xNrvJtygvzr658nFT4zO',
        'referer' : req.query.referer,
        'Content-Type': 'application/json; charset=utf-8',
        'user-agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36'
      },
      json: {
        "password": "!QAZzaq1",
        "phone": "8-708-310-16-03",
        "messageId": "20210722174ea3af25201b496c94a8a3c18cb27223",
        "smsCode": req.query.smsCode
    },
    }, function (error, res, body) {
      resx.send({error, res, body})
    }); 
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
