var db = require('./db');
var getResponse = db.getResponse();
var getQuestion = db.getQuestion();

function getQuestionlist() {
    var res = 'ไม่มีใครอยู่ มีไรคุย JARVIS ก่อน';
    getQuestion.forEach((e, i) => {
        res += '\n' + (i + 1).toString() + '.' + e;
    });
    return res;
}

function getRes(req) {
    var resKey = null;
    var keys = Object.keys(getResponse);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var regex = new RegExp(key);
        if (req.match(regex)) {
            resKey = key;
            break;
        }
    }
    if (resKey) {
        return getResponse[reskey]
    } else {
        return null;
    }
}

function handleMessage(req, id, sendMessage) {
    var response = getRes(req);
    if (!response) {
res
    }
}

