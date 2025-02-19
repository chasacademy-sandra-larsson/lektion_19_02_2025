import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type CurrencyConverterState = {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
    convertedAmount: string
}


const initialState: CurrencyConverterState = {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    amount: 100,
    convertedAmount: '0.00'
}


const currencyConverterSlice = createSlice({
    name: 'currencyConverter',
    initialState,
    reducers: {
      setFromCurrency: (state, action: PayloadAction<string>) => { state.fromCurrency = action.payload},
      setToCurrency: (state, action: PayloadAction<string>) => { state.toCurrency = action.payload},
      setAmount: (state, action: PayloadAction<number>) => { state.amount = action.payload },
      calculateConvertedAmount: (state, action: PayloadAction<number>) => { 
            const exchangeRate = action.payload;
            state.convertedAmount = (state.amount * (exchangeRate ? exchangeRate : 0)).toFixed(2);
      } 
 
    }
})

export const { setFromCurrency, setToCurrency, setAmount, calculateConvertedAmount } = currencyConverterSlice.actions;
export default currencyConverterSlice.reducer;
