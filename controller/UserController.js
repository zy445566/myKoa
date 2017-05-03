const Controller = require('./Controller');
class UserController extends Controller
{
	constructor()
	{
		super();
	}

	async index(ctx)
	{
		await ctx.render('user/index');
	}

	async getUser(ctx)
	{
		let userRes = UserController.getServer('user').getAccount();
		ctx.body = JSON.stringify(userRes);
	}
}

module.exports = UserController;
