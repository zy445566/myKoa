const Server = require('./Server');
const UserModule = require('../module/user/UserModule');
const UserAuthModule = require('../module/user/UserAuthModule');
class UserServer extends Server
{
	constructor()
	{
		super();
		this.userModule = new UserModule();
		this.userAuthModule = new UserAuthModule();
	}

	getAccount()
	{
		let userAuth = this.userAuthModule.getAccount(1);
		return this.userModule.getUserInfo(userAuth.id);
	}
}
module.exports = UserServer;