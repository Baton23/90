import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface Business {
  name: string;
  price: number;
  profit: number;
  productionTime: number;
}

interface BusinessState {
  businesses: Business[];
  balance: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BusinessState = {
  businesses: [],
  balance: 10000, // начальный баланс в TON
  status: 'idle',
};

export const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    addBusiness: (state, action: PayloadAction<Business>) => {
      state.businesses.push(action.payload);
    },
    setBusinesses: (state, action: PayloadAction<Business[]>) => {
      state.businesses = action.payload;
    },
    deductBalance: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    increaseBalance: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
  },
});

export const { addBusiness, setBusinesses, deductBalance, increaseBalance } = businessSlice.actions;

export const fetchBusinesses = (): AppThunk => async (dispatch) => {
  // Implement blockchain interaction here
};

export const purchaseBusiness = (business: Business): AppThunk => async (dispatch) => {
  // Blockchain purchase logic
  dispatch(addBusiness(business));
};

export default businessSlice.reducer;
