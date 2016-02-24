var koa =  require('koa');
var koaRouter = require('koa-router');
var koaStatic = require('koa-static');
var render = require('koa-swig');
var path = require('path');
var app = koa();
var router = koaRouter();

app.context.render = render({
	root: path.join(__dirname,'app/views'),
	autoescape: true,
	cache: false,
	ext: 'html'
})

router.get('/',function*(){
	yield this.render('index');
})

app
	.use(koaStatic('lib'))
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000);
