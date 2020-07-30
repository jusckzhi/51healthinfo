(function(){
	seajs.config({
		  //配置路径
		  base: "/resources/javascripts/",
		  //别名配置
		  alias: {
		    "jquery"     : "lib/jquery/jquery.min.js",
		    "laytpl"     : "lib/layer/laytpl/laytpl.js",
		    "layer"      : "lib/layer/layer/layer.js",
		    "layer-css"  : "lib/layer/layer/skin/layer.css",
		    "base64"          : "lib/jquery/jquery.base64.js",
		    "login_request"          : "manager/base/mljia_login_request.js",
		    "zh_cn"          : "lib/check/local/zh-CN.js",
		    "fullPage"       : "lib/jquery/fullPage.min.js",
		    "rsaBig"       : "lib/safe/rsa-big.js",
		    "mljia_app_index_effect"  : "manager/app/mljia_app_index_effect.js",
		    "mljia_app_index"  : "manager/app/mljia_app_index.js",
		    "cookie":"lib/jquery/jquery.cookie.js"
		  }
		});
	
	/**
	 * 加载入口文件 
	 * 
	 */
	seajs.use(['fullPage','mljia_app_index_effect','mljia_app_index','cookie']);	
	
	
}(window));
 