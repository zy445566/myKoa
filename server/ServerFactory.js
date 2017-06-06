/*
*@author ZhangYuan https://github.com/zy445566
*/
const ServerClasses={};
const ServerInstances={};
class ServerFactory
{
    getServer(serverName,param=[])
    {
        if (!ServerClasses.hasOwnProperty(serverName))
        {
            ServerClasses[serverName] = require("./"+serverName[0].toUpperCase()+serverName.substr(1)+"Server");
        }
        if (!ServerInstances.hasOwnProperty(serverName))
        {
            ServerInstances[serverName] = new ServerClasses[serverName](...param);
        }
        return ServerInstances[serverName];
    }
}
module.exports = ServerFactory;
