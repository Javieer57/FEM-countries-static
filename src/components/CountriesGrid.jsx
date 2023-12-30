import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard.jsx";

export const CountriesGrid = ({ countries }) => {
  const [sortedCountries, SortedCountries] = useState([]);

  useEffect(() => {
    const tempCountries = [...countries];

    tempCountries.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });

    SortedCountries(tempCountries);
  }, [countries]);

  return (
    <ul className="grid gap-[4.6875rem] justify-between justify-items-center grid-cols-[repeat(auto-fill,_minmax(12.5rem,_1fr))]">
      {sortedCountries.map((country) => (
        <li>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
};
