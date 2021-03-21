import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AboutribalComponent } from './sections/pages/aboutribal/aboutribal.component'
import { CoursesComponent } from './sections/pages/courses/courses.component'
import { CourseComponent } from './sections/pages/courses/course/course.component'
import { HomeComponent } from './sections/pages/home/home.component'
import { ShowsComponent } from './sections/pages/shows/shows.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { LayoutComponent } from './layout/layout.component'
import { AboutannaComponent } from './sections/pages/aboutanna/aboutanna.component'
import { CrewComponent } from './sections/pages/crew/crew.component'
import { DiscountsComponent } from './sections/pages/discounts/discounts.component'
import { FaqComponent } from './sections/pages/faq/faq.component'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule)
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutribalComponent
      },
      {
        path: 'cursos',
        component: CoursesComponent
      },
      {
        path: 'cursos/:id',
        component: CourseComponent
      },
      {
        path: 'annademas',
        component: AboutannaComponent
      },
      {
        path: 'crew',
        component: CrewComponent
      },
      {
        path: 'shows',
        component: ShowsComponent
      },
      {
        path: 'descuentos',
        component: DiscountsComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: '404 Page not found' }
  },

  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
