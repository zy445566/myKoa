/*
*@author ZhangYuan https://github.com/zy445566
*/
const ControllerClasses={
    home:require("./HomeController"),
    user:require("./UserController")
};
const ControllerInstances={};
class ControllerFactory
{
    getController(controllerName)
    {
        if (!ControllerInstances.hasOwnProperty(controllerName))
        {
            ControllerInstances[controllerName] = new ControllerClasses[controllerName]();
        }
        return ControllerInstances[controllerName];
    }
}
module.exports = ControllerFactory;