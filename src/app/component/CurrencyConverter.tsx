"use client"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../redux/store"
import { setFromCurrency, setToCurrency, setAmount, calculateConvertedAmount } from "../redux/slices/currencyConverterSlice"
import { useGetExchangeRatesQuery } from "../redux/services/currencyAPI"

type Country = {
  name: string;
  code: string;
};

const countries: Country[] = [
  { name: "United States", code: "USD" },
  { name: "Eurozon", code: "EUR" },
  { name: "Japan", code: "JPY" },
  { name: "United Kingdom", code: "GBP" },
  { name: "Canada", code: "CAD" },
  { name: "Australia", code: "AUD" },
  { name: "India", code: "INR" },
  // Add more countries here
];

function CurrencyConverter() {

  const dispatch = useDispatch();

  const fromCurrency = useSelector((state: RootState) => state.currencyConverter.fromCurrency);
  const toCurrency = useSelector((state: RootState) => state.currencyConverter.toCurrency);
  const amount = useSelector((state: RootState) => state.currencyConverter.amount);
  const convertedAmount = useSelector((state: RootState) => state.currencyConverter.convertedAmount);

  const { data, error, isLoading } = useGetExchangeRatesQuery(fromCurrency)

  // if(isLoading) return <p>Loading...</p>

  console.log(data);


// Använd antingen en useEffect om beror på om det är refetch eller man ändrar toCurrency
// En anna lösning är att ni skulle ha en knapp för eventet och dispatch
  useEffect(() => {
    // caluculateConvertedAmount(exchange-rate)
    if(data) {
      dispatch(calculateConvertedAmount(data.rates[toCurrency]))
    }
      
  }, [data, toCurrency])


  return (

    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Currency Converter</h1>
      <div>
        {/* Amount */}
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="number"
          value={amount}
          onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
          min="1"
        />
        {/* From Currency */}
        <select
          className="border-2 border-gray-300 rounded-md p-2"
          value={fromCurrency}
          onChange={(e) => dispatch(setFromCurrency(e.target.value))}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <span className="m-2">to</span>
        {/* Converted Amount */}
        <p
          className="border-2 border-gray-300 rounded-md p-2 inline-block"
        >
          {convertedAmount}
        </p>
        {/* To Currency */}
        <select
          className="border-2 border-gray-300 rounded-md p-2"
          value={toCurrency}
          onChange={(e) => dispatch(setToCurrency(e.target.value))}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-2xl font-bold">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      </div>
    </div>
  );
}
export default CurrencyConverter;
