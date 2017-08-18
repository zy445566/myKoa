const Server = require("./Server");


class UserServer extends Server
{
    constructor()
    {
        super();
    }

    getAccount()
    {
        let userAuth = this.getModule("user","userAuth").getAccount(1);
        return this.getModule("user","user").getUserInfo(userAuth.id);
    }
}
module.exports = UserServer;