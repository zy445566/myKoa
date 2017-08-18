const AbstractFactory = require("../AbstractFactory");
class Controller
{
    constructor()
    {

    }

    getServer(serverName)
    {
        /*
		*@var ../server/ServerFactory
		*/
        return AbstractFactory.getFactory("server").getServer(serverName);
    }
}
module.exports = Controller;