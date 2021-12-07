import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ProductItem } from '../../components/Product';
import { getProductById, getProducts } from '../../utils/products';

type ProductResponse = { [key: string]: ProductItem };

interface initState {
  products: ProductResponse;
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
}

const initialState: initState = {
  products: {},
  status: 'idle',
};

/* Selectors */
const selectProducts = (state: RootState) => state.products.products;
const selectProductById = (id: string) => (state: RootState) =>
  state.products.products[id];
const selectReqStatus = (state: RootState) => state.products.status;

/* Actions */
const fetchProducts = createAsyncThunk<ProductResponse>(
  'products/getProducts',
  async () => {
    const products = await getProducts();
    return products;
  },
);

const fetchProductById = createAsyncThunk<ProductResponse, string>(
  'product/getProductById',
  async (id: string) => {
    const product = await getProductById(id);
    return product;
  },
);

/* Slice & Reducers */
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = 'rejected';
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      });
  },
});

export {
  selectProducts,
  fetchProducts,
  fetchProductById,
  selectProductById,
  selectReqStatus,
};

export default productSlice.reducer;
