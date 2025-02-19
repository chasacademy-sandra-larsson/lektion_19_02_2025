import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useGetExchangeRatesQuery } from "../redux/services/currencyAPI";
import { useSelector, useDispatch } from "react-redux";
import {
  setFromCurrency,
  setToCurrency,
  setAmount,
  calculateConvertedAmount,
} from "./../redux/slices/currencyConverterSlice";

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
  //   const [fromCurrency, setFromCurrency] = useState<string>("USD");
  //   const [toCurrency, setToCurrency] = useState<string>("EUR");
  //   const [amount, setAmount] = useState<number>(1);

  // Redux state
  const fromCurrency = useSelector(
    (state: RootState) => state.currencyConverter.fromCurrency
  );
  const toCurrency = useSelector(
    (state: RootState) => state.currencyConverter.toCurrency
  );
  const amount = useSelector(
    (state: RootState) => state.currencyConverter.amount
  );
  const convertedAmount = useSelector(
    (state: RootState) => state.currencyConverter.convertedAmount
  );

  console.log({ fromCurrency, toCurrency, amount, convertedAmount }); // Debug the selected values


  // Redux dispatch
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetExchangeRatesQuery(fromCurrency);

  useEffect(() => {
    if (data) {
      dispatch(calculateConvertedAmount(data.rates[toCurrency]));
    }
  }, [data, toCurrency]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {}</p>;

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Currency Converter</h1>
      <div>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="number"
          value={amount}
          onChange={(e) => dispatch(setAmount(Number(e.target.value)))}
          min="1"
        />
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
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          value={convertedAmount}
          readOnly
        />
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
