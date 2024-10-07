'use client'
import React, { useState, useEffect } from "react";
import countryList from 'react-select-country-list';
import {Select, SelectItem, Avatar, Chip} from "@nextui-org/react";
import { SaveAnswer } from './SaveAnswer';

export const Places = () => {
    const [places, setPlaces] = useState(new Set([]))
  
    const handleSelectionChange = (event) => {
        setPlaces(new Set(event.target.value.split(",")));
        Cookies.set('places', `${JSON.stringify(new Set(event.target.value.split(",")))}`);
    };
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      // Fetch data only if countries list is empty
      if (!countries.length) {
        const fetchData = () => {
          const leanData = countryList().getData().map(country => ({
            label: country.label,
            value: country.value,
          }));
          setCountries(leanData);
        };
        fetchData();
      }
    }, []);

    return (
        <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4 py-10'>
          <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>What country or region do you want to prioritize?</h1>
          <p className='py-3 text-center'>Specifying an area helps customize your news alongside global events.</p>
          
          <Select
            className="max-w-sm"
            label="Select countries"
            items={countries}
            selectionMode="multiple"
            labelPlacement="outside"
            selectedKeys={places}
            isMultiline={true}
            variant='bordered'
            onChange={(event) => handleSelectionChange(event)}
            disableAnimation
            renderValue={(items) => {
              return (
                <div className="flex flex-wrap gap-2 py-2">
                  {items.map((item) => (
                    <Chip key={item.key}>{item.key}</Chip>
                  ))}
                </div>
              );
            }}
          >
            
            {countries.length > 0 ? (
              countries.map(country => (
                <SelectItem key={country.label} startContent={<Avatar alt={country.label} disableAnimation className="w-6 h-6" src={`https://flagcdn.com/${country.value.toLowerCase()}.svg`} />}>
                  {country.label}
                </SelectItem>
              ))
            ) : (
              <SelectItem>Loading countries...</SelectItem>
            )}
          </Select>
          <SaveAnswer />
        </div>
      );
}