import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TapCounterComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
