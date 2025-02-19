  // @ts-nocheck
/* eslint-disable */

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


  return (

    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Currency Converter</h1>
      <div>
        {/* Amount */}
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="number"
          value={}
          onChange={}
          min="1"
        />
        {/* From Currency */}
        <select
          className="border-2 border-gray-300 rounded-md p-2"
          value={}
          onChange={}
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
          {}
        </p>
        {/* To Currency */}
        <select
          className="border-2 border-gray-300 rounded-md p-2"
          value={}
          onChange={}
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
