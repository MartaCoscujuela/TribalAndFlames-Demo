import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminGuard } from '../auth/admin.guard'
import { AdminComponent } from './admin.component'
import { AdminSectionsComponent } from './admin-sections/admin-sections.component'
import { AdminHomeComponent } from './admin-sections/admin-home/admin-home.component'
import { AdminAboutComponent } from './admin-sections/admin-about/admin-about.component'
import { AdminCoursesComponent } from './admin-sections/admin-courses/admin-courses.component'
import { AdminCourseComponent } from './admin-sections/admin-course/admin-course.component'
import { AdminAnnademasComponent } from './admin-sections/admin-annademas/admin-annademas.component'
import { AdminCrewComponent } from './admin-sections/admin-crew/admin-crew.component'
import { AdminDiscountsComponent } from './admin-sections/admin-discounts/admin-discounts.component'
import { AdminShowsComponent } from './admin-sections/admin-shows/admin-shows.component'
import { AdminFaqComponent } from './admin-sections/admin-faq/admin-faq.component'

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminSectionsComponent
      },
      {
        path: 'home',
        component: AdminHomeComponent
      },
      {
        path: 'about',
        component: AdminAboutComponent
      },
      {
        path: 'courses',
        component: AdminCoursesComponent
      },
      {
        path: 'courses/:id',
        component: AdminCourseComponent
      },
      {
        path: 'annademas',
        component: AdminAnnademasComponent
      },
      {
        path: 'crew',
        component: AdminCrewComponent
      },
      {
        path: 'shows',
        component: AdminShowsComponent
      },
      {
        path: 'discounts',
        component: AdminDiscountsComponent
      },
      {
        path: 'faq',
        component: AdminFaqComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
