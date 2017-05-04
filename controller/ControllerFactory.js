/*
*@author ZhangYuan https://github.com/zy445566
*/
const ControllerClasses={
    home:require("./HomeController"),
    user:require("./UserController"),
    chat:require("./chatController")
};
const ControllerInstances={};
class ControllerFactory
{
    getController(controllerName,param=[])
    {
        if (!ControllerInstances.hasOwnProperty(controllerName))
        {
            ControllerInstances[controllerName] = new ControllerClasses[controllerName](...param);
        }
        return ControllerInstances[controllerName];
    }
}
module.exports = ControllerFactory;