import Vue from 'vue'
import App from './App.vue'
import {createStore} from './store'
import { sync } from 'vuex-router-sync'
import { createRouter } from '../build/router'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例

export function createApp () {
    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        // 根实例简单的渲染应用程序组件。
        router,
        store, 
        render: h => h(App),
    })
    return {app, store, router}
}


