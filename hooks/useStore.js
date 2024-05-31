import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useProductStore = create(persist(
  (set) => ({
    products: [],
    addProduct: (product) => set((state) => ({
      products: [...state.products, product],
    })),
    updateProduct: (index, updatedProduct) => set((state) => {
      const products = [...state.products];
      products[index] = updatedProduct;
      return { products };
    }),
    removeProduct: (index) => set((state) => {
      const products = state.products.filter((_, i) => i !== index);
      return { products };
    }),
    clearProducts: () => {
      set({ products: [] });
      localStorage.removeItem('product-storage'); // Remove the persisted data from local storage
    },
  }),
  {
    name: 'product-storage', // unique name for the storage item
    getStorage: () => localStorage, // specify local storage as the storage
  }
));


export const usePriceStore = create((set) => ({
  price:0,
  userPrice: (price) => set({price:price})
 
}))


