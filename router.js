const joiRouter = require('koa-joi-router');
const AbstractFactory = require('./AbstractFactory');
var homeController = AbstractFactory.getFactory('controller').getController('home');
var userController = AbstractFactory.getFactory('controller').getController('user');
//-------------homeController--------------
const home = joiRouter();
home.get('/', homeController.index);


//--------------userController---------------
const user = joiRouter();
user.get('/user', userController.index);
user.get('/user/get-user', userController.getUser);



//exports middleware
const routerList = [
home.middleware(),
user.middleware()
];
module.exports = routerList;