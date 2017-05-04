const AbstractFactory = require('./AbstractFactory');
const chatController = AbstractFactory.getFactory('controller').getController('chat');
function socketer(app)
{
    const server = require('http').createServer(app.callback());
    const io = require('socket.io')(server);
    io.on('connection', async function(socket){
        socket.on('sendmsg',async function (data){
            chatController.sendmsg(socket,data);
        });
    });

    io.on('disconnect', async function(){

    });
    return server;
}

module.exports = socketer;