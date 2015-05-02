/**
 * 首页REST数据 controller
 * @author Manson <zhouzw@ucweb.com>
 * @date  2015.1.28
 */
var Q = require('q')

var controller = {
    indexAction:function(){
        var that = this;
        var tab = "index";
        that.renderView({
            tab : tab,
            title:'魅族官网'
        });
    }
    }

module.exports = controller