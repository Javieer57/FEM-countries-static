import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { CountryCard } from "@components/CountryCard.jsx";
import { searchQuery, selectedRegion } from "@store/countriesStore.js";

export const CountriesGrid = ({ countries }) => {
  const [tempCountries, setTempCountries] = useState(countries);
  const $searchQuery = useStore(searchQuery);
  const $selectedRegion = useStore(selectedRegion);

  useEffect(() => {
    const filteredCountries = [...countries].filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes($searchQuery.toLowerCase()) &&
        country.region.includes($selectedRegion)
    );

    setTempCountries(filteredCountries);
  }, [$searchQuery, $selectedRegion]);

  return (
    <ul className="grid gap-[4.6875rem] justify-between justify-items-center grid-cols-[repeat(auto-fill,_minmax(12.5rem,_1fr))]">
      {/* {countries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))} */}
      {tempCountries.map((country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
      {/* {$filteredCountries.length === 0
        ? countries.map((country) => (
            <li key={country.name.common}>
              <CountryCard country={country} />
            </li>
          ))
        : $filteredCountries.map((country) => (
            <li key={country.name.common}>
              <CountryCard country={country} />
            </li>
          ))} */}
    </ul>
  );
};
