import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'
import Stats from 'src/components/Dashboard/Views/Dashboard/Stats.vue'

// Pages
import User from 'src/components/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/Dashboard/Views/Pages/Lock.vue'

// Components pages
import Buttons from 'src/components/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/Dashboard/Views/Components/Typography.vue'

// Forms pages
import RegularForms from 'src/components/Dashboard/Views/Forms/RegularForms.vue'
import ExtendedForms from 'src/components/Dashboard/Views/Forms/ExtendedForms.vue'
import ValidationForms from 'src/components/Dashboard/Views/Forms/ValidationForms.vue'
// import Wizard from 'src/components/Dashboard/Views/Forms/Wizard.vue'

// TableList pages
import RegularTables from 'src/components/Dashboard/Views/Tables/RegularTables.vue'
import ExtendedTables from 'src/components/Dashboard/Views/Tables/ExtendedTables.vue'
import PaginatedTables from 'src/components/Dashboard/Views/Tables/PaginatedTables.vue'
// Maps pages
import GoogleMaps from 'src/components/Dashboard/Views/Maps/GoogleMaps.vue'
import FullScreenMap from 'src/components/Dashboard/Views/Maps/FullScreenMap.vue'
import VectorMaps from 'src/components/Dashboard/Views/Maps/VectorMapsPage.vue'

// Calendar
import Calendar from 'src/components/Dashboard/Views/Calendar/CalendarRoute.vue'
// Charts
import Charts from 'src/components/Dashboard/Views/Charts.vue'

// Domimath
import Topic from 'src/components/Dashboard/Views/Topics/Topic.vue'
import Wizard from 'src/components/Dashboard/Views/Exercise/Wizard.vue'
import Ex1 from 'src/components/Dashboard/Views/Exercise/Ex1.vue'
import Ex2 from 'src/components/Dashboard/Views/Exercise/Ex2.vue'
import Ex3 from 'src/components/Dashboard/Views/Exercise/Ex3.vue'

let topicsMenu = {
  path: '/topics',
  component: DashboardLayout,
  redirect: '/topics/topic1',
  children: [
    {
      path: 'topic',
      name: 'חדו״א',
      component: Topic
    }
  ]
}

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}

let exercise =
{
    path: '/exercise',
    component: DashboardLayout,
    redirect: '/exercise/wizard',
    children: [
      {
        path: 'wizard',
        name: 'Wizard',
        component: Wizard
      },
      {
        path: 'ex1',
        name: 'ex1',
        component: Ex1
      },
      {
        path: 'ex2',
        name: 'ex2',
        component: Ex2
      },
      {
        path: 'ex3',
        name: 'ex3',
        component: Ex3
      },
    ]
}

let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'פילוח כללי',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}

const routes = [
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   redirect: '/admin/overview',
  //   children: [
  //     {
  //       path: 'calendar',
  //       name: 'Calendar',
  //       component: Calendar
  //     },
  //     {
  //       path: 'charts',
  //       name: 'Charts',
  //       component: Charts
  //     }
  //   ]
  // },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'calendar',
        name: 'מערכת שעות',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  componentsMenu,
  formsMenu,
  topicsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  exercise,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'תמונת מצב',
        component: Overview
      },
      {
        path: 'stats',
        name: 'ההודעות שלי',
        component: Stats
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
