const AbstractFactory = require("../AbstractFactory");
class Server
{
    constructor()
    {
		
    }

    getModule(ModuleType,ModuleName)
    {
        /*
		*@var ../module/ModuleFactory
		*/
        return AbstractFactory.getFactory("module").getModule(ModuleType,ModuleName);
    }
}
module.exports = Server;