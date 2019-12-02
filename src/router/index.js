import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyTask from '@/pages/my-task'
import TeamTask from '@/pages/team-task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my-task',
      name: 'MyTask',
      component: MyTask
    },
    {
      path: '/team-task',
      name: 'TeamTask',
      component: TeamTask
    }
  ]
})
