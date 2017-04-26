const AbstractFactory = require('../AbstractFactory');
class Server
{
    constructor()
	{
		
	}

	static getModule(ModuleType,ModuleName)
	{
		/*
		*@var ../module/ModuleFactory
		*/
		return AbstractFactory.getFactory('module').getModule(ModuleType,ModuleName);
	}
}
module.exports = Server;