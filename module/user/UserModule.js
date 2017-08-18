const Module = require("../Module");
class UserModule extends Module
{
    getUserInfo(id)
    {	
        if (id==1)
        {
            return {id:1,age:25,sex:"man"};
        } else {
            return false;
        }
		
    }
}
module.exports = UserModule;