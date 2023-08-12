import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { StoreModule } from "@ngrx/store"
import { counterReducer } from './shared/state/counter.reducer';
import { blogReducer } from './shared/state/blog/blog.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.module';
import { CustomcounterComponent } from './components/customcounter/customcounter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { MenuheaderComponent } from './components/menuheader/menuheader.component';
import { BlogComponent } from './components/blog/blog.component'
import { AppState } from './shared/state/Global/app.state';
import { AddblogComponent } from './components/addblog/addblog.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomcounterComponent,
    HomeComponent,
    BlogComponent,
    CounterComponent,
    MenuheaderComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(AppState),
    BrowserAnimationsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
