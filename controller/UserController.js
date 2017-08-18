const Controller = require("./Controller");
class UserController extends Controller
{
    constructor()
    {
        super();
    }

    index()
    {
        return async(ctx)=>{
            await ctx.render("user/index");
        };
    }

    getUser()
    {
        return async(ctx)=>{
            let userRes = this.getServer("user").getAccount();
            ctx.body = JSON.stringify(userRes);
        };
    }
}

module.exports = UserController;
