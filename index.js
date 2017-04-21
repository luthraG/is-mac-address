var NODE_RATIFY = require('node-ratify');

exports = module.exports = {
    isMACAddress : function(str) {
        var macAddress =  /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
        if(!NODE_RATIFY.isString(str))
            throw new TypeError('parameter should be of string type');
        return macAddress.test(str);
    }
};