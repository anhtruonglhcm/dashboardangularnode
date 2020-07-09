import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

@NgModule({
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [InvoiceListingComponent],
  providers: [InvoiceService],
})
export class InvoicesModule {}
