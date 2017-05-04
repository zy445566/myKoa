/*
*@author ZhangYuan https://github.com/zy445566
*/
const ModuleClasses={
        "user/user":require("./user/UserModule"),
        "user/userAuth":require("./user/UserAuthModule"),
};
const ModuleInstances = {};
class ModuleFactory
{
    getModule(ModuleType,ModuleName,param=[])
    {
        let mapKey = ModuleType+"/"+ModuleName;
        if (!ModuleInstances.hasOwnProperty(mapKey))
        {
            ModuleInstances[mapKey] = new ModuleClasses[mapKey](...param);
        }
        return ModuleInstances[mapKey];
    }
}
module.exports = ModuleFactory;