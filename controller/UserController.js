const Controller = require('./Controller');
const UserServer = require('../server/UserServer');
var userController = null;
class UserController extends Controller
{
	constructor()
	{
		super(new UserServer());
		userController = this;
	}

	async index(ctx)
	{
		await ctx.render('user/index');
	}

	async getUser(ctx)
	{
		let userRes = userController.server.getAccount();
		ctx.body = JSON.stringify(userRes);
	}
}

module.exports = UserController;