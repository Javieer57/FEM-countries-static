import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { CountryCard } from "@components/CountryCard.jsx";
import {
  filteredCountries,
  searchQuery,
  selectedRegion,
} from "@store/countriesStore.js";

export const CountriesGrid = ({ countries }) => {
  const $filteredCountries = useStore(filteredCountries);
  const $searchQuery = useStore(searchQuery);
  const $selectedRegion = useStore(selectedRegion);

  useEffect(() => {
    filteredCountries.set(
      countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes($searchQuery.toLowerCase()) &&
          country.region.includes($selectedRegion)
      )
    );
  }, [$searchQuery, $selectedRegion]);

  return (
    <ul className="grid gap-[4.6875rem] justify-between justify-items-center grid-cols-[repeat(auto-fill,_minmax(12.5rem,_1fr))]">
      {$filteredCountries.length > 0 &&
        $filteredCountries.map((country) => (
          <li key={country.name.common}>
            <CountryCard country={country} />
          </li>
        ))}
    </ul>
  );
};
