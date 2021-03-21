import { NgModule } from '@angular/core'
import { EditorModule } from 'primeng/editor'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminSectionsComponent } from './admin-sections/admin-sections.component'
import { AdminComponent } from './admin.component'
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component'
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component'
import { CommonModule } from '@angular/common'
import { AdminHomeComponent } from './admin-sections/admin-home/admin-home.component'
import { AdminAboutComponent } from './admin-sections/admin-about/admin-about.component'
import { AdminCoursesComponent } from './admin-sections/admin-courses/admin-courses.component'
import { AdminAnnademasComponent } from './admin-sections/admin-annademas/admin-annademas.component'
import { AdminCrewComponent } from './admin-sections/admin-crew/admin-crew.component'
import { AdminDiscountsComponent } from './admin-sections/admin-discounts/admin-discounts.component'
import { AdminShowsComponent } from './admin-sections/admin-shows/admin-shows.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AdminCourseComponent } from './admin-sections/admin-course/admin-course.component'
import { TextEditorComponent } from './admin-shared-components/text-editor/text-editor.component'
import { ImgEditorComponent } from './admin-shared-components/images-container/img-editor/img-editor.component'
import { ImagesContainerComponent } from './admin-shared-components/images-container/images-container.component'
import { ErrorComponent } from './admin-shared-components/error/error.component'
import { ImgListComponent } from './admin-shared-components/img-list/img-list.component'
import { SingleImgComponent } from './admin-shared-components/img-list/single-img/single-img.component'
import { TextListComponent } from './admin-shared-components/text-list/text-list.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { CourseEditorComponent } from './admin-shared-components/course-editor/course-editor.component';
import { AdminFaqComponent } from './admin-sections/admin-faq/admin-faq.component';
import { LoadingComponent } from './admin-shared-components/loading/loading.component'
@NgModule({
  declarations: [
    AdminSectionsComponent,
    AdminComponent,
    AdminMenuComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminAboutComponent,
    AdminCoursesComponent,
    AdminAnnademasComponent,
    AdminCrewComponent,
    AdminDiscountsComponent,
    AdminShowsComponent,
    AdminCourseComponent,
    TextEditorComponent,
    ImgEditorComponent,
    ImagesContainerComponent,
    ErrorComponent,
    ImgListComponent,
    SingleImgComponent,
    TextListComponent,
    CourseEditorComponent,
    AdminFaqComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    FontAwesomeModule,
    
  ]
})
export class AdminModule {}
