import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gequ from '@/views/modules/gequ/list'
    import gequCollection from '@/views/modules/gequCollection/list'
    import gequLiuyan from '@/views/modules/gequLiuyan/list'
    import liuyan from '@/views/modules/liuyan/list'
    import tongzhi from '@/views/modules/tongzhi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryGequ from '@/views/modules/dictionaryGequ/list'
    import dictionaryGequCollection from '@/views/modules/dictionaryGequCollection/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShiyong from '@/views/modules/dictionaryShiyong/list'
    import dictionaryTongzhi from '@/views/modules/dictionaryTongzhi/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGequ',
        name: '歌曲类型',
        component: dictionaryGequ
    }
    ,{
        path: '/dictionaryGequCollection',
        name: '收藏表类型',
        component: dictionaryGequCollection
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShiyong',
        name: '是否使用',
        component: dictionaryShiyong
    }
    ,{
        path: '/dictionaryTongzhi',
        name: '通知类型',
        component: dictionaryTongzhi
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gequ',
        name: '歌曲',
        component: gequ
      }
    ,{
        path: '/gequCollection',
        name: '歌曲收藏',
        component: gequCollection
      }
    ,{
        path: '/gequLiuyan',
        name: '歌曲留言',
        component: gequLiuyan
      }
    ,{
        path: '/liuyan',
        name: '留言版',
        component: liuyan
      }
    ,{
        path: '/tongzhi',
        name: '消息通知',
        component: tongzhi
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
