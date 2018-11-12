'use strict';

const http = require('http');

const osmosis = require('osmosis');

osmosis
  .get('http://sum.in.ua/s/parta')
//  .set({'':'div#article'})
//  .set({'Title': 'div#article'})
  .data(console.log)


const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${text}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('error', err => {
  if (err.code === 'EACCES') {
    console.log(`No access to port: ${port}`);
  }
});

// var request = require('request');
//    d3 = require("d3"),
//    jsdom = require("jsdom");
//    schemaSumInUA = require("semantic-schema-parser");

// var urlSumInUA  = [ 'http://sum.in.ua/s/parta' ];

/*
schemaSumInUA.parseURLs(urlSumInUA,
      // set a callback
      function(msgSUM){
       // returns a JSON;
       console.log('body1:',msgSUM);
       msgSUM = JSON.stringify(msgSUM);
       // do something
       //const dataSumInUA = JSON.parse(msgSUM);
       console.log('body2:',msgSUM);
       // const result = msgSUM.filter(item => item.ScholarlyArticle === 'ScholarlyArticle')[0];

       // console.log('body:', result); // печатаем ответ от сервера.
    });
*/

/* -----
request('http://sum.in.ua/s/parta', function (error, response, bodySumInUA) {
  console.log('error:', error); // Печатаем ошибки
  console.log('statusCode:', response && response.statusCode); // печатем код ответа

//  const dataSumInUA = JSON.parse(bodySumInUA);
//  const result = data.filter(item => item.ScholarlyArticle === 'ScholarlyArticle')[0];

  console.log('body:', JSON.stringify(bodySumInUA,'   ')); // печатаем полный ответ от сервера
});
/*

d3.parseContent(bodySumInUA,
          // set a callback
          function(msgSUM){
           // returns a JSON;
           console.log('body3:',msgSUM);
           msgSUM = JSON.stringify(msgSUM);
           // do something
           //const dataSumInUA = JSON.parse(msgSUM);
           console.log('body4:',msgSUM);
           // const result = msgSUM.filter(item => item.ScholarlyArticle === 'ScholarlyArticle')[0];

           // console.log('body:', result); // печатаем ответ от сервера.
        });
});
*/

// const dataSumInUA = JSON.parse(msgSUM);
// const result = data.filter(item => item.ScholarlyArticle === 'ScholarlyArticle')[0];

// console.log('body:', result); // печатаем ответ от сервера.

/*
request('http://sum.in.ua/?swrd=slovo', function (error, response, bodySumInUA) {
  console.log('error:', error); // Печатаем ошибки
  console.log('statusCode:', response && response.statusCode); // печатем код ответа

  const dataSumInUA = JSON.parse(bodySumInUA);
  const result = data.filter(item => item.ScholarlyArticle === 'ScholarlyArticle')[0];

  console.log('body:', bodySumInUA); // печатаем ответ от сервера.
});
*/
/*
request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function (error, response, body) {
    const data = JSON.parse(body);
    const result = data.filter(item => item.ccy === query.data)[0];
    const flag = {
      'EUR': '🇪🇺',
      'USD': '🇺🇸',
      'RUR': '🇷🇺',
      'UAH': '🇺🇦',
      'BTC': '₿'
    }
*/
