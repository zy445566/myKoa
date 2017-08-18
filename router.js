const joiRouter = require("koa-joi-router");
const AbstractFactory = require("./AbstractFactory");
const homeController = AbstractFactory.getFactory("controller").getController("home");
const userController = AbstractFactory.getFactory("controller").getController("user");
//-------------homeController--------------
const home = joiRouter();
home.get("/", homeController.index());


//--------------userController---------------
const user = joiRouter();
user.prefix("/user");
user.get("/", userController.index());
user.get("/get-user", userController.getUser());



//exports middleware
const routerList = [
    home.middleware(),
    user.middleware()
];
module.exports = routerList;