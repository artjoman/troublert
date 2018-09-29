import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SchemaComponent } from './pages/schema/schema.component';
import { TeamComponent } from './pages/team/team.component';
import { InfoComponent } from './pages/info/info.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapComponent } from './pages/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    TeamComponent,
    InfoComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
