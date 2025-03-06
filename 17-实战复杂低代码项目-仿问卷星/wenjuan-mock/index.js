const Koa = require("koa");
const Router = require("koa-router");
const mockList = require("./mock");

const app = new Koa();

const router = new Router();

async function getRes(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn());
    }, 300);
  });
}

// 注册mock路由
mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    const res = await getRes(response);
    ctx.body = res;
  });
});

app.use(router.routes());
app.listen(3000);
console.log("mock server is running at http://localhost:3000");
