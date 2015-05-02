var ApplicationConfig = require('../conf/ApplicationConfig.js')
var appConfig = require('../conf/appConfig.js')
var _ = require('underscore')
var baseControllerNew = require("../app/Controller/baseController.js")


var ApplicationManager = {
	autoload : function(moduleName, controllerName, actionName, viewName, req, res)
	{
		try
		{
            //console.log(ApplicationConfig.APP_DIR + "/Controller/" + moduleName + "/" + controllerName + "Controller.js");
			var controller = require(ApplicationConfig.APP_DIR + "/Controller/" + moduleName + "/" + controllerName + "Controller.js");
			if(!controller[actionName + "Action"])
			{
				throw "not this action!"
			}
		}
		catch(e)
		{
            console.log(e);
			//输出404
			res.status(404).send('Not found');
			return
		}


		//继承基类
		var baseController = baseControllerNew()
		var newController = _.extend(baseController,controller)

		newController.SetMvc(moduleName, controllerName, viewName)
		newController.SetReq(req)
		newController.SetRes(res)

		//handle before
		newController.HandleBefore.call(newController)

		//执行controller的action
		newController[actionName + "Action"].call(newController)
		return newController
	},
	getServices : function(servicesPath)
	{
		try
		{
			var services = require(ApplicationConfig.SERVICES_DIR + "/" + servicesPath)

			//依赖注入
			services.getConfig = function(){ return appConfig }
			services.getServices = this.getServices
			services.getModel = this.getModel

			return services
		}
		catch(e)
		{
			throw e
		}
	},
	getModel : function(modelPath)
	{
		try
		{
			//依赖注入
			var model = require(ApplicationConfig.MODEL_DIR + "/" + modelPath)
			model.getConfig = function(){ return appConfig }
			return model
		}
		catch(e)
		{
			throw e
		}
	},
	getViewPath : function(viewPath)
	{
		return ApplicationConfig.VIEW_DIR + "/" + viewPath + ".tpl"
	}
}
module.exports = ApplicationManager