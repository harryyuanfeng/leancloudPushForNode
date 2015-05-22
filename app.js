
var AV = require('avoscloud-sdk');
var push = require('./index.js');

var appId = '4kjjc24stkt8sqkct758vc7jvv16n41m95x7n3pqcb35qtey';
var appKey = 'vxc8wtjtyfs0a9gvhwot1d9g96s9q2y5dxrebqov1n23g0bf';
var push = AV.push({
    appId: appId,
    appKey: appKey
});


// 发送一条推送，如果不传 channels 则是给所有 channel 发送消息
push.send({
    // channels: ['aaa'],
    data: {LeanCloud: 123}
}, function(result) {
    if (result) {
        console.log('推送成功发送');
    } else {
        console.log('error');
    }
});