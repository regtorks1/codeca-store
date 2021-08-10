import React from 'react';
import {Cart} from '../features/cart/Cart'
import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/currencyFilter.js';
// Import the Cart component here.

// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart 
      cart = {state.cart} 
      currencyFilter = {state.currencyFilter} 
      dispatch = {dispatch}     
      />

    </div>
  );
};