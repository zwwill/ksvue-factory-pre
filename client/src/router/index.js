module.exports = {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: '../pages/index.vue'
        },
        {
            path: '/test1',
            name: 'Test1',
            component: '../pages/test1'
        },
        {
            path: '/test2',
            name: 'Test2',
            component: '@/pages/test2'
        }

    ]
}
