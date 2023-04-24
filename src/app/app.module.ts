import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Import FormsModule  to  from @angular/Forms enable  Template Driven Forms
    FormsModule,

    // Import  ReactiveFormsModule from @angular/Forms    to enable  Reactive Driven Forms
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
