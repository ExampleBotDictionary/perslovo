'use strict';

const zaprosSlovar = require('osmosis');

// var urlSumInUA  = 'https://sum.in.ua/?swrd='
var urlSumInUA  = 'https://sum.in.ua/s/'
var urlSumInUAEx= 'https://sum.in.ua/s/parta'
var zaprosSlovo = "parta"
let otvetSlovar = [''];

var zaprosSUMINUA = urlSumInUA+zaprosSlovo
console.log(zaprosSUMINUA)

zaprosSlovar
.get(zaprosSUMINUA)
.set({'Title': 'div#article'})
.data(function (dataOtvetSlovar) {
  otvetSlovar.push(dataOtvetSlovar);
  })
.done(function (){
  console.log(otvetSlovar)
//  otvetSlovar;
  })
