import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//material ui
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlateAddComponent } from './plate/plate-add/plate-add.component';
import { PlateShowComponent } from './plate/plate-show/plate-show.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlateAddComponent,
    PlateShowComponent,
    ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
