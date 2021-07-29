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
        "phone": "8-702-440-02-22",
        "messageId": "202107290719f97d6d98c24e05b4e12a10e03a2a2f",
        "smsCode": req.query.smsCode
    },
    }, function (error, res, body) {
      resx.status(res.statusCode);
      resx.send({error, res, body})
    }); 
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
