import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { appRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProfileComponent } from './profile/profile.component';
import { PicLogoComponent } from './pic-logo/pic-logo.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BackIconComponent } from './ui-controls/back-icon/back-icon.component';
import { CloseIconComponent } from './ui-controls/close-icon/close-icon.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { TypingComponent } from './typing/typing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { EscCancelationDirective } from './directives/esc-cancelation.directive';
import { ProjectDataService } from './services/project-data.service';
import { SkillsService } from './services/skills.service';
import { TagsService } from './services/tags.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigatorComponent,
    ProfileComponent,
    PicLogoComponent,
    ProfileCardComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BackIconComponent,
    CloseIconComponent,
    FilterButtonComponent,
    TypingComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectCardComponent,
    MaxLengthPipe,
    NoEmojiPipe,
    EscCancelationDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouting
  ],
  providers: [
    ProjectDataService,
    TagsService,
    SkillsService,
    { provide: APP_BASE_HREF, useValue: '!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
