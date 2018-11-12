'use strict';

const zaprosSlovar = require('osmosis');

var urlSumInUA  = 'http://sum.in.ua/?swrd='
// var urlSumInUA  = 'http://sum.in.ua/s/parta'

var zaprosSlovo = "parta"
let otvetSlovar = [''];


zaprosSlovar
.get(urlSumInUA+zaprosSlovo)
.set({'Title': 'div#article'})
.data(function (dataOtvetSlovar) {
  otvetSlovar.push(dataOtvetSlovar);
  })
.done(function (){
//  otvetSlovar;
  })
