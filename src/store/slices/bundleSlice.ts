import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productData } from '../../data/products';
import { BundleState, Selections } from '../../types';

const getDefaultSelections = (): Selections => {
  const selections: Selections = {};

  productData.forEach((step) => {
    step.products.forEach((product) => {
      const variantIds = product.variants?.map((variant) => variant.id) ?? ['default'];
      selections[product.id] = variantIds.reduce<Record<string, number>>((acc, variantId) => {
        acc[variantId] = 0;
        return acc;
      }, {});
    });
  });

  return selections;
};

const getDefaultSelectedVariants = () => {
  const selectedVariants: Record<string, string> = {};

  productData.forEach((step) => {
    step.products.forEach((product) => {
      if (product.variants?.length) {
        selectedVariants[product.id] = product.variants[0].id;
      }
    });
  });

  return selectedVariants;
};

const initialState: BundleState = {
  selections: getDefaultSelections(),
  selectedVariants: getDefaultSelectedVariants()
};

const bundleSlice = createSlice({
  name: 'bundle',
  initialState,
  reducers: {

    incrementQuantity: (
      state,
      action: PayloadAction<{ productId: string; variantId: string }>
    ) => {
      const { productId, variantId } = action.payload;

      if (!state.selections[productId]) {
        state.selections[productId] = {};
      }

      const currentQty = state.selections[productId][variantId] || 0;
      state.selections[productId][variantId] = currentQty + 1;
    },

    decrementQuantity: (
      state,
      action: PayloadAction<{ productId: string; variantId: string }>
    ) => {
      const { productId, variantId } = action.payload;

      if (!state.selections[productId]) {
        state.selections[productId] = {};
      }

      const currentQty = state.selections[productId][variantId] || 0;

      if (currentQty > 0) {
        state.selections[productId][variantId] = currentQty - 1;
      }
    },

    setSelectedVariant: (
      state,
      action: PayloadAction<{ productId: string; variantId: string }>
    ) => {
      const { productId, variantId } = action.payload;
      state.selectedVariants[productId] = variantId;
    },

    setQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        variantId: string;
        quantity: number
      }>
    ) => {
      const { productId, variantId, quantity } = action.payload;

      if (!state.selections[productId]) {
        state.selections[productId] = {};
      }

      state.selections[productId][variantId] = Math.max(0, quantity);
    },

    resetBundle: (state) => {
      state.selections = getDefaultSelections();
      state.selectedVariants = getDefaultSelectedVariants();
    },

    loadBundle: (state, action: PayloadAction<BundleState>) => {
      state.selections = action.payload.selections;
      state.selectedVariants = action.payload.selectedVariants;
    }
  }
});

export const {
  incrementQuantity,
  decrementQuantity,
  setSelectedVariant,
  setQuantity,
  resetBundle,
  loadBundle
} = bundleSlice.actions;

export default bundleSlice.reducer;