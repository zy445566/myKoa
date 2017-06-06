/*
*@author ZhangYuan https://github.com/zy445566
*/
const ModuleClasses={};
const ModuleInstances = {};
class ModuleFactory
{
    getModule(ModuleType,ModuleName,param=[])
    {
        let mapKey = ModuleType+"/"+ModuleName;
        if (!ModuleClasses.hasOwnProperty(mapKey))
        {
            ModuleClasses[mapKey] = require("./"+ModuleType+"/"+ModuleName[0].toUpperCase()+ModuleName.substr(1)+"Module");
        }
        if (!ModuleInstances.hasOwnProperty(mapKey))
        {
            ModuleInstances[mapKey] = new ModuleClasses[mapKey](...param);
        }
        return ModuleInstances[mapKey];
    }
}
module.exports = ModuleFactory;