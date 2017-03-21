const Module = require('../Module');
class UserAuthModule extends Module
{
	getAccount()
	{
		return {id:1,account:"root",password:"123456"};
	}
}
module.exports = UserAuthModule;