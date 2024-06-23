const routes = [
    {
      path: '/',
      component: () => import('pages/IndexPage.vue')
    },
    {
      path: '/day1',
      component: () => import('pages/Day1Page.vue')
    },
    {
      path: '/day2',
      component: () => import('pages/Day2Page.vue')
    },
    {
      path: '/day3',
      component: () => import('pages/Day3Page.vue')
    },
    {
      path: '/day4',
      component: () => import('pages/Day4Page.vue')
    },
    {
      path: '/day5',
      component: () => import('pages/Day5Page.vue')
    },
    {
      path: '/day6',
      component: () => import('pages/Day6Page.vue')
    },
    {
      path: '/day7',
      component: () => import('pages/Day7Page.vue')
    }
  ]
  
  export default routes
  