import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RegistroComponent } from './registro/registro.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RESTServiceService } from './restservice.service';
import { TimelineComponent } from './timeline/timeline.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { MatToolbarModule} from '@angular/material/toolbar';
import { StorageServiceModule} from 'angular-webstorage-service';


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent,
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    TimelineComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [
    MatDatepickerModule,
    RESTServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
