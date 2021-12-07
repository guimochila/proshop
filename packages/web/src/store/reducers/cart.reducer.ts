import { createSlice } from '@reduxjs/toolkit';
import { ProductItem } from '../../components/Product';

interface InitState {
  [key: string]: ProductItem;
}

const initialState: InitState = {};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
