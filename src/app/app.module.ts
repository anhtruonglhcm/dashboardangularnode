import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material/material.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InvoicesModule } from './dashboard/invoices/invoices.module';
import { ClientsModule } from './dashboard/clients/clients.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DashboardModule,
    InvoicesModule,
    ClientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
