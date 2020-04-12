import Vue from "vue";
import Router from "vue-router";
import Calculate1 from "./components/Calculate_1.vue"
import HelloWorld from "./components/HelloWorld.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "index",
            component: HelloWorld
        },
        {
            path: "/cal1",
            name: "cal1",
            component: Calculate1
        },
    ]
});
