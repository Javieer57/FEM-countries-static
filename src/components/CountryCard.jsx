export const CountryCard = ({ country }) => {
  const route = `/details/${country.name.common.replace(/\s/g, "-")}`;

  const countryInfo = {
    Population: country.population.toLocaleString(),
    Region: country.region,
    Capital: country.capital,
  };

  return (
    <a href={route}>
      <figure className="bg-white rounded-md overflow-hidden hover:scale-105 transition-transform dark:bg-darkBlue-500 max-w-[16.5rem] shadow">
        <img
          className="w-full aspect-[5/3]"
          src={country.flags.png}
          alt={country.name.common}
        />

        <figcaption className="p-6 pb-11">
          <h2 className="text-lg font-extrabold mb-4">{country.name.common}</h2>

          <div className="space-y-2">
            {Object.entries(countryInfo).map(([key, value]) => (
              <p className="text-xs font-light">
                <span className="font-semibold">{key}:</span> {value}
              </p>
            ))}
          </div>
        </figcaption>
      </figure>
    </a>
  );
};
