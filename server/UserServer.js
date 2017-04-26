const Server = require('./Server');


class UserServer extends Server
{
	constructor()
	{
		super();
	}

	getAccount()
	{
		let userAuth = UserServer.getModule('user','userAuth').getAccount(1);
		return UserServer.getModule('user','user').getUserInfo(userAuth.id);
	}
}
module.exports = UserServer;