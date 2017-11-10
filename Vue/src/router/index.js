import Vue from 'vue'
import Router from 'vue-router'
import Index1 from '@/page/index.vue'

import IntroIndex from '@/components/IntroIndex.vue'
import Intro from '@/page/intro/intro.vue'
import Enviro from '@/page/intro/enviro.vue'
import Leaders from '@/page/intro/leaders.vue'

import labsIndex from '@/components/labsIndex'
import Gongfang from '@/page/labs/gongfang.vue'
import Xuni from '@/page/labs/Xuni.vue'
import Yuming from '@/page/labs/Yuming.vue'
import Yun from '@/page/labs/Yun.vue'

import Teachers from '@/page/teachers/teachers.vue'
import TeaDetails from '@/page/teachers/teachers.vue'

import ProIndex from '@/components/ProIndex.vue'
import Copor from '@/page/projects/corpora.vue'
import Insearch from '@/page/projects/insearch.vue'
import Projects from '@/page/projects/projects.vue'

import ActIndex from '@/components/ActIndex.vue'
import Compete from '@/page/activity/Compete.vue'
import Daily from '@/page/activity/daily.vue'
import Happy from '@/page/activity/Happy.vue'

import NewsIndex from '@/components/NewsIndex.vue'
import News from '@/page/News/news.vue'
import Notice from '@/page/News/notice.vue'
import NoticeDetails from '@/page/News/NoticeDetails.vue'
import NewsDetails from '@/page/News/newsdetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index1
    },
    {
      path: '/intro',
      component:IntroIndex,
      children:[{ path: '/', component: Intro },
                { path: '/leaders', component:Leaders },
                { path: '/enviro', component: Enviro}
              ]
    },
    {
      path: '/intro',
      component:IntroIndex,
      children:[{ path: '/', component: Intro },
                { path: '/leaders', component:Leaders },
                { path: '/enviro', component: Enviro}
              ]
    },
    {
      path: '/labs',
      component:labsIndex,
      children:[{ path: '/', component: labsIndex },
                { path: '/yun', component:Yun },
                { path: '/domains', component:Yuming},
                { path: '/virtual', component:Xuni},
                { path: '/attack', component:Gongfang}
              ]
    },
    {
      path: '/teachers',
      children:[{ path: '/', component: Teachers },
                { path: '/details', component:TeaDetails },
              ]
    },
    {
      path: '/projects',
      component:ProIndex,
      children:[{ path: '/', component: Projects },
                { path: '/insearch', component:Insearch },
                {path:'/cooperate',component:Copor}
              ]
    },
    {
      path:'/activities',
      component:ActIndex,
      children:[{path:'/',component:Happy},
                {path:'/daily',component:Daily},
                {path:'/competition',Compete}

      ]
    },
    {
      path:'/news',
      component:NewsIndex,
      children:[{path:'/',component:News},
                {path:'/notice',component:Notice},
                {path:'/details',component:NewsDetails},
                {path:'/noticedetails',component:NoticeDetails}
               ]
    }
  ]
})
