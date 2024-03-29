import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import {Customer} from "../customer.model";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public 'customers': Customer[];

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({type: 'LOAD_CUSTOMER'})
    this.store.subscribe(state => (
      this.customers = state.customers.customers
    ))
  }

}
