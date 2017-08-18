const Controller = require("./Controller");
class ChatController extends Controller
{
    constructor()
    {
        super();
    }

    async sendmsg(socket,data)
    {
        console.log(data);
        socket.emit("recmsg",{msg:"recmsg"});
    }
}

module.exports = ChatController;