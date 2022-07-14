import router from "./router";
import store from "./store";

const whiteRouter = ["/login", "/404"];
/**
 * 路由前置守卫
 * @param {*} to 要到哪里去
 * @param {*} from 从哪里来
 *@param {*} next 是否要去
 */
router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    //用户已登陆，就不能进入登录页
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    next();
    //   用户未登录
    // if (whiteRouter.indexOf(to.path) > -1) {
    //   next();
    // } else {
    //   next("/login");
    // }
  }
});
