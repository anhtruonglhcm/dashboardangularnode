import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InvoiceListingComponent } from './invoices/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainContentComponent,
      },
      {
        path: 'invoices',
        component: InvoiceListingComponent,
      },
      {
        path: 'invoices/create',
        component: InvoiceFormComponent,
      },
      {
        path: 'invoices/editor/:id',
        component: InvoiceFormComponent,
      },
      {
        path: 'clients',
        component: ClientListingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
