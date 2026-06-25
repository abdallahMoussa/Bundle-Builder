import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BundleState, Selections } from '../../types';

const getDefaultSelections = (): Selections => ({
  'indoor-cam': { white: 0, black: 0 },
  'door-sensor': { white: 1, brown: 0 },
  'floodlight': { default: 1 },
  'premium-plan': { default: 1 }
});

const initialState: BundleState = {
  selections: getDefaultSelections(),
  selectedVariants: {
    'indoor-cam': 'white',
    'door-sensor': 'white'
  }
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
      state.selectedVariants = {
        'indoor-cam': 'white',
        'door-sensor': 'white'
      };
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