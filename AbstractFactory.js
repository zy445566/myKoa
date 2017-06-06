/*
*@author ZhangYuan https://github.com/zy445566
*/
const FactoryInstances={};
class AbstractFactory
{
    static getFactory(factoryName)
    {
        if (!FactoryInstances.hasOwnProperty(factoryName))
        {   
            //防止包互相引用导致空包现象，同时实现Lazy load
            switch(factoryName)
            {
                case 'controller':
                    var controllerFactory = require("./controller/ControllerFactory");
                    FactoryInstances[factoryName] = new controllerFactory();
                    break;
                case 'server':
                    var serverFactory = require("./server/ServerFactory");
                    FactoryInstances[factoryName] = new serverFactory();
                    break;
                case 'module':
                    var moduleFactory = require("./module/ModuleFactory");
                    FactoryInstances[factoryName] = new moduleFactory();
                    break;
                default:
                    throw new Error("not find "+factoryName+" Factory");
            }
        }
        return FactoryInstances[factoryName];
    }
}
module.exports = AbstractFactory;