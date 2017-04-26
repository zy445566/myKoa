const Controller = require('./Controller');
class HomeController extends Controller
{
	constructor()
	{
		super();
	}

	async index(ctx)
	{
		await ctx.render('home/index');
	}
}

module.exports = HomeController;