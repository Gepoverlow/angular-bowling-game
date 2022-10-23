import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CalculatorContainerComponent } from './container/calculator-container.component';
import { CalculatorItemComponent } from './calculator/calculator-item.component';
import { CreateDialogComponent } from './container/create-dialog/create-dialog.component';
import { RollDialogComponent } from './calculator/roll-dialog/roll-dialog.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CalculatorContainerComponent, CalculatorItemComponent, CreateDialogComponent, RollDialogComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule, MatIconModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
