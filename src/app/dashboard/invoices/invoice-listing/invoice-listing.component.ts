import { InvoiceService } from './../services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { remove } from 'lodash';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})
export class InvoiceListingComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'tax',
    'rate',
    'action',
  ];
  invoice: Invoice[] = [];
  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe(
      (data) => {
        this.invoice = data;
        this.snackBar.open('fetch data !', 'Success', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open('fetch data !', 'False', {
          duration: 2000,
        });
      }
    );
  }

  onCreate() {
    this.router.navigate(['dashboard', 'invoices', 'create']);
  }
  editBtnHandler(id: string) {
    this.router.navigate(['dashboard', 'invoices', 'editor', id]);
  }
  deleteBtnHandler(id: string) {
    this.invoiceService.deleteInvoice(id).subscribe(
      (data) => {
        const removedItem = remove(this.invoice, (item) => {
          return item._id === data._id;
        });
        console.log(this.invoice);
        console.log(removedItem);

        this.invoice = [...this.invoice];
        this.snackBar.open('Invoice delete !', 'Success', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackBar.open('Invoice delete !', 'False', {
          duration: 2000,
        });
      }
    );
  }
}
