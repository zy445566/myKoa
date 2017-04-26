const AbstractFactory = require('../AbstractFactory');
class Controller
{
	constructor()
	{

	}

	static getServer(serverName)
	{
		/*
		*@var ../server/ServerFactory
		*/
		return AbstractFactory.getFactory('server').getServer(serverName);
	}
}
module.exports = Controller;