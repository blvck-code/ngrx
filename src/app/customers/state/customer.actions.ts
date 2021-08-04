import { Action as Act } from "@ngrx/store";


import { Customer } from "../customer.model";

export enum CustomerActionsTypes {
  LOAD_CUSTOMERS = '[Customers] Load Customers',
  LOAD_CUSTOMERS_SUCCESS = '[Customers] Load Customers Success',
  LOAD_CUSTOMERS_FAIL = '[Customers] Load Customers Fail',
}

export class LoadCustomers implements Act {
  readonly type = CustomerActionsTypes.LOAD_CUSTOMERS
}

export class LoadCustomersSuccess implements Act {
  readonly type = CustomerActionsTypes.LOAD_CUSTOMERS_SUCCESS

  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Act {
  readonly type = CustomerActionsTypes.LOAD_CUSTOMERS_FAIL

  constructor(public payload:string) {}
}

export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail

