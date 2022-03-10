import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleItemComponent } from './toggle-item/toggle-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ToggleItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
