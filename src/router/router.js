export default[{
    path: '/',
    component :() => import('@/view/Main'),
    children:[{
        name: 'home',
        path: '',
        component: () => import('@/components/main/middle')
    },{
        name: "u",
        path: 'u',
        component: () => import('@/components/u/book-mark-list'),
        meta:{
            auth: true   //需要登录才能访问
        }
    }]
}]