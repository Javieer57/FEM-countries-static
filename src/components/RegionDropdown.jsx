import { useStore } from "@nanostores/react";
import { selectedRegion } from "@store/countriesStore.js";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowDown } from "@components/ArrowDown";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const RegionDropdown = () => {
  const $selectedRegion = useStore(selectedRegion);

  const handleRegionChange = (e) => {
    selectedRegion.set(e);
  };

  return (
    <Listbox
      value={$selectedRegion}
      onChange={handleRegionChange}
      as="div"
      className="relative w-full max-w-[12.5rem]"
    >
      {({ open }) => (
        <>
          <Listbox.Button className="flex justify-between items-center text-left rounded-md bg-white px-6 py-4 w-full shadow dark:bg-darkBlue-500 dark:text-white text-sm">
            {$selectedRegion ? $selectedRegion : "Filter by Region"}
            <ArrowDown
              className={`transition-all duration-500 ${open && "-rotate-180"}`}
            />
          </Listbox.Button>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
            className="absolute pt-1 w-full z-10"
          >
            <Listbox.Options className="rounded-md bg-white gap-1 px-6 py-4 flex flex-col items-start shadow-dropdown dark:bg-darkBlue-500 dark:text-white">
              {regions.map((region) => (
                <Listbox.Option
                  key={region}
                  value={region}
                  className="cursor-pointer inline-block"
                >
                  {region}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};
