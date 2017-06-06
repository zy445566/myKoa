/*
*@author ZhangYuan https://github.com/zy445566
*/
const ControllerClasses={};
const ControllerInstances={};
class ControllerFactory
{
    getController(controllerName,param=[])
    {
        if (!ControllerClasses.hasOwnProperty(controllerName))
        {
            ControllerClasses[controllerName] = require("./"+controllerName[0].toUpperCase()+controllerName.substr(1)+"Controller");
        }
        if (!ControllerInstances.hasOwnProperty(controllerName))
        {
            ControllerInstances[controllerName] = new ControllerClasses[controllerName](...param);
        }
        return ControllerInstances[controllerName];
    }
}
module.exports = ControllerFactory;