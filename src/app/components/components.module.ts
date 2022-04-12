import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { ProjectComponent } from './project/project.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OpenWeatherApiComponent } from './open-weather-api/open-weather-api.component';
// import { WeatherComponent } from './weather/weather.component';
// import { TimeComponent } from './time/time.component';
// import { MainComponent } from './main/main.component';
// import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        ProjectComponent,
        AboutUsComponent,
        OpenWeatherApiComponent,
        // WeatherComponent,
        // TimeComponent,
        // MainComponent,
        // MenuComponent
    ],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }