'use strict';

var express = require('express'),
    router = express.Router();

var ApplicationManager = require("../libs/ApplicationManager.js")

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res, next) {
    req.url = "/page/index/index/index"
    next();
});

router.get('/nonveg', function (req, res, next) {
    req.url = "/page/index/index/nonveg"
    next();
});

router.get('/veg', function (req, res, next) {
    req.url = "/page/index/index/veg"
    next();
});

router.get('/pics', function (req, res, next) {
    req.url = "/page/index/index/pics"
    next();
});

router.get('/facts', function (req, res, next) {
    req.url = "/page/index/index/facts"
    next();
});

router.get('/detail', function (req, res, next) {
    req.url = "/page/detail/detail"
    next();
});

//router.get('/:page', function(req, res, next){
//    req.url = '/index';
//    var page = req.params.page;
//    var navService = require('../service/nav');
//    res.locals.title = '首页';
//    navService(page, function(is404, nav){
//        res.locals.page404 = is404;
//        res.locals.nav = nav;
//        if(is404){
//            next();
//        } else {
//            res.locals.title = page;
//            var listService = require('../service/list');
//            var detail = req.query.detail;
//            listService(page, detail, function(is404, list) {
//                res.locals.list = list;
//                res.locals.list404 = is404;
//                if (!is404 && detail) {
//                    var detailService = require('../service/detail');
//                    detailService(detail, function (is404, detail) {
//                        res.locals.detail404 = is404;
//                        if(!is404){
//                            res.locals.title = detail.subject + ' - ' + page;
//                        }
//                        res.locals.detail = detail;
//                        next();
//                    });
//                } else {
//                    next();
//                }
//            });
//        }
//    });
//});

//通用route,对应到controller
router.get(/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+)\/([a-zA-Z0-9-_]+)$/,function(req, res, next){
    var moduleName = req.params[0]
    var controllerName = req.params[1]
    var viewName = req.params[2]
    var actionName = req.params[3]
    ApplicationManager.autoload(moduleName,controllerName,actionName,viewName,req,res)
})

module.exports = function (options) {
    router.options = options || {};
    return router;
};