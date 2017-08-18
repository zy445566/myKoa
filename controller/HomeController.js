const Controller = require("./Controller");
class HomeController extends Controller
{
    constructor()
    {
        super();
    }

    index()
    {
        return async(ctx)=>{
            await ctx.render("home/index");
        };
    }
}

module.exports = HomeController;