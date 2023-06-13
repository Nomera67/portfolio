import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HeroeComponent } from './features/homepage/heroe/heroe.component';
import { ProjectsComponent } from './features/homepage/projects/projects.component';
import { IntroductionComponent } from './features/about/introduction/introduction.component';
import { ResumeComponent } from './features/about/resume/resume.component';
import { SkillsComponent } from './features/about/skills/skills.component';
import { FormComponent } from './features/contact/form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToggleModeComponent } from './shared/components/navbar/toggle-mode/toggle-mode.component';
import { ThemeServiceService } from './services/switch-mode/theme-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    HeroeComponent,
    ProjectsComponent,
    IntroductionComponent,
    ResumeComponent,
    SkillsComponent,
    FormComponent,
    ToggleModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    ClipboardModule
  ],
  providers: [
    ThemeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
