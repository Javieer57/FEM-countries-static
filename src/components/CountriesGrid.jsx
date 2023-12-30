import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { CountryCard } from "@components/CountryCard.jsx";
import { filteredCountries, searchQuery } from "@store/countriesStore.js";

export const CountriesGrid = ({ countries }) => {
  const $filteredCountries = useStore(filteredCountries);
  const $searchQuery = useStore(searchQuery);

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

    filteredCountries.set(
      tempCountries.filter((country) =>
        country.name.common.toLowerCase().includes($searchQuery.toLowerCase())
      )
    );
  }, [$searchQuery]);

  return (
    <ul className="grid gap-[4.6875rem] justify-between justify-items-center grid-cols-[repeat(auto-fill,_minmax(12.5rem,_1fr))]">
      {/* {sortedCountries.map((country) => ( */}
      {$filteredCountries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
};
