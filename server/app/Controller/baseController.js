var _ = require('underscore')

module.exports = function(){
	var base = {
		moduleName : "",
		ControllerName : "",
		ActionName : "",
		Req : {},
		Res : {},
		GOLBAL : {},
		SetMvc : function(moduleName,ControllerName,ActionName)
		{
			this.moduleName = moduleName
			this.ControllerName = ControllerName
			this.ActionName = ActionName
		},
		SetReq : function(req) {
			this.Req = req
		},
		SetRes : function(res) {
			this.Res = res
		},
		//每次进入controller前处理
		HandleBefore : function(){
		},
		getServices : function(servicesPath){
			var ApplicationManager = require("../../libs/ApplicationManager.js")
			return ApplicationManager.getServices(servicesPath)
		},
		renderView : function(renderData){
			var ApplicationManager = require("../../libs/ApplicationManager.js")

			var routeView = this.moduleName + "/" + this.ControllerName + "/" + this.ActionName
			var viewPath = ApplicationManager.getViewPath(routeView)

			if(!renderData.GOLBAL){
				renderData = _.extend(renderData,{ GOLBAL : this.GOLBAL })
			}

			if(this.Req.query.pagelets)
			{
				this.Res.setHeader('Content-Type', 'application/json')
				renderData.pagelets = this.Req.query.pagelets
			}

			this.Res.render(viewPath,renderData)
		}
	}

	return base
}