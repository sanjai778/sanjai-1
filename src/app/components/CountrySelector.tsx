'use client';

import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import styles from './CountrySelector.module.css';

interface Country {
  name: {
    common: string;
  };
  cca2: string;
  flags: {
    svg: string;
    png: string;
  };
}

interface OptionType {
  value: string;
  label: string;
  cca2: string;
}

const CountrySelector = () => {
  const countryCodeToEmoji = (code: string) => {
    const OFFSET = 127397; // 0x1F1E6 - 0x41
    const codePoints = code
      .toUpperCase()
      .split('')
      .map(char => char.charCodeAt(0) + OFFSET);
    return String.fromCodePoint(...codePoints);
  };

  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,flags');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        data.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      } catch (err) {
        console.error('Failed to fetch countries:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const options: OptionType[] = countries.map((country) => ({
    value: country.name.common,
    label: country.name.common,
    cca2: country.cca2,
  }));

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      borderColor: '#ced4da',
      borderRadius: '.5rem',
      height: 'calc(1.5em + 1rem + 2px)',
      padding: '0 .5rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#80bdff',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#495057',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#f8f9fa' : '#fff',
      color: state.isSelected ? '#fff' : '#333',
      padding: '10px 15px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }),
  };

  const formatOptionLabel = ({ label, cca2 }: OptionType) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginRight: '10px', fontSize: '1.2em' }}>{countryCodeToEmoji(cca2)}</span>
      <span>{label}</span>
    </div>
  );

  if (error) {
    return <div className={styles.formControl}>Error loading countries</div>;
  }

  return (
    <Select
      instanceId="country-select"
      id="countryName"
      name="countryName"
      options={options}
      isLoading={isLoading}
      placeholder="Select your region"
      isClearable
      isSearchable
      required
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      classNamePrefix="react-select"
    />
  );
};

export default CountrySelector;
