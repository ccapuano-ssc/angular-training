import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { VehicleFormReactiveComponent } from './vehicle-form-reactive/vehicle-form-reactive.component';
import { HttpClientModule }    from '@angular/common/http';
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/fr-CA';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TapCounterComponent,
    DealerInventoryComponent,
    PhotoGalleryComponent,
    VehicleFormComponent,
    VehicleFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
