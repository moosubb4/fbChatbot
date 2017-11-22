var fs = require('fs');
var path = require('path');

var dbDir = path.resolve(__dirname + '/..database/');

function getResponse() {

    var data = fs.readFileSync(dbDir + '/asking.json', 'utf8');
    try {
        var resMap = JSON.parse(data);
        return resMap;
    } catch (err) {
        console.log(err);
    }

}

function getQuestion() {

    var data = fs.readFileSync(dbDir + '/questions.json', 'utf8');
    try {
        var questJson = JSON.parse(data);
        return questJson;
    } catch (err) {
        console.log(err);
    }

}

module.exports.getResponse = getResponse;
module.exports.getQuestion = getQuestion;