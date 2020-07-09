import { Invoice } from './../models/invoice';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../services/invoice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit {
  private invoice: Invoice;
  invoiceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setInvoiceToForm();
  }
  onSubmit() {
    this.invoiceService.createInvoice(this.invoiceForm.value).subscribe(
      (data) => {
        this.snackBar.open('Invoice created !', 'Success', {
          duration: 2000,
        });
        this.invoiceForm.reset();
        this.router.navigate(['dashboard/invoices']);
      },
      (err) => {
        this.snackBar.open('fail to create invoice', 'Error', {
          duration: 2000,
        });
      }
    );
  }
  createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      rate: [''],
      tax: [''],
    });
  }
  private setInvoiceToForm() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (!id) {
        return;
      }
      this.invoiceService.getInvoice(id).subscribe((invoice) => {
        this.invoice = invoice;
      });
    });
  }
}
