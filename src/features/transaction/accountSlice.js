import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'api.frankfurter.app/latest';

export const fetchCurrency = createAsyncThunk(
  'account/fetchCurrency',
  async (code, balance) => {
    const b = balance.getState();
    const result = b.account.movements.reduce(
      (acc, amount) => acc + amount.amount,
      0
    );

    // IN CASE THE BALANCE IS 0, DO NOTHING
    if (result <= 0) return;

    const res = await fetch(
      `https://${baseURL}?amount=${result}&from=${code}&to=USD`
    );

    const data = await res.json();
    const { USD } = data.rates;

    return { USD, code };
  }
);

const initialState = {
  movements: [],
  currency: {
    type: '',
    amount: 0,
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.movements.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.currency.type = action.payload.code;
      state.currency.amount = action.payload.USD;
    });
  },
});

export const { addTransaction } = accountSlice.actions;

export const getHistory = (state) => {
  return state.account.movements;
};

export const getBalance = (state) => {
  return state.account.movements.reduce(
    (acc, amount) => acc + amount.amount,
    0
  );
};

export const getIncome = (state) => {
  return state.account.movements
    .filter((mov) => mov.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
};

export const getExpense = (state) => {
  return state.account.movements
    .filter((mov) => mov.amount < 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
};

export default accountSlice.reducer;
