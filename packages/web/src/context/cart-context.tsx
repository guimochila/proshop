import * as React from 'react';
import { ProductItem } from '../components/Product';

/* Types */
type Action = {
  type: 'addItemToCart';
  payload: {
    productId: string;
    quantity: number;
  };
};
type Dispatch = (action: Action) => void;
type State = {
  items: { [key: string]: ProductItem };
  totalPrice: number;
};
type CartProviderProps = { children: React.ReactNode };
type Actions = {
  addItemToCart: (id: string, quantity: number) => void;
};
type CartContextState =
  | { state: State; dispatch: Dispatch; actions: Actions }
  | undefined;

/* Initial State */
const initialState: State = {
  items: {},
  totalPrice: 0,
};

/* Context */
const CartContext = React.createContext<CartContextState>(undefined);

/* Cart reducer */
function cartReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case 'addItemToCart': {
      if (!state.items[action.payload.productId]) {
        return {
          ...state,
        };
      }
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

/* Cart Provider */
function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  const addItemToCart = React.useCallback(
    (id: string, quantity: number) =>
      dispatch({ type: 'addItemToCart', payload: { productId: id, quantity } }),
    [],
  );

  const actions = React.useMemo(
    () => ({
      addItemToCart,
    }),
    [addItemToCart],
  );

  const value = React.useMemo(
    () => ({ state, dispatch, actions }),
    [state, actions],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* Cart hook */
function useCart() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
