import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './layout/header/header.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SlickCarouselModule } from 'ngx-slick-carousel'
import { ImageSliderComponent } from './sections/pages/home/image-slider/image-slider.component'

import { ImgBackgroundDirective } from './sections/directives/img-background.directive'

import { AppRoutingModule } from './app-routing.module'

import { HomeComponent } from './sections/pages/home/home.component'
import { AboutribalComponent } from './sections/pages/aboutribal/aboutribal.component'
import { CoursesComponent } from './sections/pages/courses/courses.component'
import { AboutannaComponent } from './sections/pages/aboutanna/aboutanna.component'
import { CrewComponent } from './sections/pages/crew/crew.component'
import { DiscountsComponent } from './sections/pages/discounts/discounts.component'
import { FaqComponent } from './sections/pages/faq/faq.component'
import { MenuComponent } from './layout/menu/menu.component'
import { ShowsComponent } from './sections/pages/shows/shows.component'
import { CourseComponent } from './sections/pages/courses/course/course.component'
import { LayoutComponent } from './layout/layout.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { VimeoComponent } from './sections/shared-components/vimeo/vimeo.component'
import { ParallaxComponent } from './sections/pages/home/parallax/parallax.component'
import { StatementsComponent } from './sections/pages/home/statements/statements.component'
import { CoursesGridComponent } from './sections/pages/home/courses-grid/courses-grid.component'
import { MosaicComponent } from './sections/pages/home/mosaic/mosaic.component'
import { IntroComponent } from './sections/pages/home/intro/intro.component'
import { ClaimComponent } from './sections/pages/home/claim/claim.component'
import { InstagramComponent } from './sections/pages/home/instagram/instagram.component'
import { ContactComponent } from './sections/pages/home/contact/contact.component'
import { FooterComponent } from './layout/footer/footer.component'
import { WhatisComponent } from './sections/pages/aboutribal/whatis/whatis.component'
import { PrinciplesComponent } from './sections/pages/aboutribal/principles/principles.component'
import { ObjetivoComponent } from './sections/pages/aboutribal/objetivo/objetivo.component'
import { InterviewComponent } from './sections/pages/aboutribal/interview/interview.component'
import { CtaComponent } from './sections/shared-components/cta/cta.component'

import { BannerComponent } from './sections/shared-components/banner/banner.component'
import { TextTitleComponent } from './sections/shared-components/text-title/text-title.component'
import { TextComponent } from './sections/shared-components/text/text.component'
import { ActionBtnComponent } from './sections/shared-components/action-btn/action-btn.component'
import { CourseCardComponent } from './sections/pages/courses/course-card/course-card.component'
import { BottomVideoComponent } from './sections/shared-components/bottom-video/bottom-video.component'
import { BottomReelComponent } from './sections/shared-components/bottom-reel/bottom-reel.component'
import { InputMailComponent } from './sections/shared-components/input-mail/input-mail.component'
import { ShowtimeComponent } from './sections/pages/shows/showtime/showtime.component'
import { ContratanosComponent } from './sections/pages/shows/contratanos/contratanos.component'
import { VideoComponent } from './sections/shared-components/video/video.component'
import { QuotesComponent } from './sections/pages/crew/quotes/quotes.component'
import { PromocionesComponent } from './sections/pages/crew/promociones/promociones.component'
import { VentajasComponent } from './sections/pages/discounts/ventajas/ventajas.component'
import { VentajaComponent } from './sections/pages/discounts/ventaja/ventaja.component'
import { HaztelosComponent } from './sections/pages/discounts/haztelos/haztelos.component'
import { ImgComponent } from './sections/shared-components/img/img.component'
import { QuestionComponent } from './sections/pages/faq/question/question.component';
import { FortestingComponent } from './fortesting/fortesting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageSliderComponent,
    HomeComponent,
    AboutribalComponent,
    CoursesComponent,
    AboutannaComponent,
    CrewComponent,
    DiscountsComponent,
    FaqComponent,
    MenuComponent,
    ShowsComponent,
    CourseComponent,
    LayoutComponent,
    ErrorPageComponent,
    VimeoComponent,
    ParallaxComponent,
    StatementsComponent,
    CoursesGridComponent,
    MosaicComponent,
    IntroComponent,
    ClaimComponent,
    InstagramComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,
    WhatisComponent,
    PrinciplesComponent,
    ObjetivoComponent,
    InterviewComponent,
    CtaComponent,
    TextTitleComponent,
    TextComponent,
    ActionBtnComponent,
    ImgBackgroundDirective,
    CourseCardComponent,
    BottomVideoComponent,
    InputMailComponent,
    BottomReelComponent,
    ShowtimeComponent,
    ContratanosComponent,
    VideoComponent,
    QuotesComponent,
    PromocionesComponent,
    VentajasComponent,
    VentajaComponent,
    HaztelosComponent,
    ImgComponent,
    QuestionComponent,
    FortestingComponent,
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
