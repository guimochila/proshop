import useLocalStorateState from './useLocalStorageState'

function useCart() {
  const [cart, setCart] = useLocalStorateState({
    key: 'proshop:cart',
    defaultValue: {},
  })

  const addItemToCart = (product: any) => {
    if (cart[product.id]) {
      const updatedProduct = Object.assign(product, { quantity: +1 })
      setCart((prevCart: any) => ({
        ...prevCart,
        [product.id]: updatedProduct,
      }))

      return
    }

    setCart((prevCart: any) => ({
      ...prevCart,
      [product.id]: { ...product, quantity: 1 },
    }))
  }
  const removeItemFromCart = (productId: any) => {
    const newCart = cart.filter((item: any) => item.id === productId)
    setCart(newCart)
  }

  return { cart, addItemToCart, removeItemFromCart }
}

export default useCart
