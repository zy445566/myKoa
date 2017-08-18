const Koa = require("koa");
const path = require("path");
const conditional = require("koa-conditional-get");
const etag = require("koa-etag");
const compose = require("koa-compose");
const routerList = require("./router");
const render = require("koa-ejs");
const serve = require("koa-static");

const app = new Koa();
let server = app;

//-----------CORS koa(open cross domain)---------------
// const cors = require('kcors');
// app.use(cors());

//-----------cache 403---------------
app.use(conditional());
app.use(etag());

//-----------router--------------------
app.use(compose(routerList));

//-----------render---------------------
render(app, {root: path.join(__dirname, "view"),layout: "layout/default",viewExt: "ejs"});

//-----------serve---------------------
app.use(serve(path.join(__dirname, "public")));

//-------------socket.io-----------------
server = require("./socketer")(app);

//-----------start server------------
let port = 3000;
server.listen(port);
console.log("listen 127.0.0.1:"+port);