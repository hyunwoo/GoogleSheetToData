/**
 * Created by hyunwoo on 2017-01-16.
 */

var lib = require('../GoogleSheetToData');

var sheet = lib('1rN_WrsmnvGckpuQqgY-X6OOYuU9C2Hfy8iWT-acChIE');

sheet.matrix(2, function (err, rep) {
    console.log(err, rep);
})