import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { ClientListingComponent } from './client-listing/client-listing.component';

@NgModule({
  declarations: [ClientListingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ClientListingComponent],
})
export class ClientsModule {}
