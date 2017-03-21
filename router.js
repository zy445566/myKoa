const joiRouter = require('koa-joi-router');
var HomeController = new (require('./controller/HomeController'))();
var UserController = new (require('./controller/UserController'))();
//-------------HomeController--------------
const home = joiRouter();
home.get('/', HomeController.index);


//--------------UserController---------------
const user = joiRouter();
user.get('/user', UserController.index);
user.get('/user/get-user', UserController.getUser);



//exports middleware
const routerList = [
home.middleware(),
user.middleware()
];
module.exports = routerList;