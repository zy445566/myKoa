/*
*@author ZhangYuan https://github.com/zy445566
*/
const ServerClasses={
    user:require("./UserServer"),
};
const ServerInstances={};
class ServerFactory
{
    getServer(serverName,param=[])
    {
        if (!ServerInstances.hasOwnProperty(serverName))
        {
            ServerInstances[serverName] = new ServerClasses[serverName](...param);
        }
        return ServerInstances[serverName];
    }
}
module.exports = ServerFactory;
