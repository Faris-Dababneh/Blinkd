'use client'
// FIGURE OUT HOW TO SET COOKIES WHEN THE USER CHANGES AN INPUT COMPONENT Cookies.set('name', value)
import React, { useState, useEffect } from 'react'
import BottomNav from './BottomNav'
import {DateRangePicker} from "@nextui-org/react";
import {getLocalTimeZone, today} from "@internationalized/date";
import {Select, SelectItem, Avatar, Chip} from "@nextui-org/react";
import countryList from 'react-select-country-list';
import Cookies from 'js-cookie'

import { TagsInput } from '@mantine/core';
import { MantineProvider } from '@mantine/core';


function Start() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);

  const [duration, setDuration] = useState(null)
  const [interests, setInterests] = useState([]);
  const [places, setPlaces] = useState(new Set([]))
  console.log(Cookies.get('duration'))
  const handleSelectionChange = (e) => {
    setPlaces(new Set(e.target.value.split(",")));
    console.log(places)
  };

  const Duration = () => {
    return (
      <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4'>
          <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>How long do you need your news coverage?</h1>
          <p className='py-3 text-center'>Your feed will contain all relevant news during this period.</p>
          <DateRangePicker 
                visibleMonths={2}
                variant={"underlined"}
                value={duration}
                onChange={setDuration}
                maxValue={today(getLocalTimeZone())}
                className='w-full sm:w-1/2 md:w-1/3'
              />
      </div>
      
    )
  }

  const Interests = () => {
    return (
        <MantineProvider>
          <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4'>
            <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>What news categories are you interested in?</h1>
            <p className='py-3 text-center'>This will help personalize your feed for your liking.</p>
            <TagsInput
              label="Your interests"
              placeholder="Enter interests here"
              data={['Science', 'Technology', 'Politics', 'World Events', 'Business & Economy', 'Entertainment & Pop Culture', 'Health & Wellness', 'Environment', 'Sports', 'Art & Culture']}
              value={interests}
              onChange={setInterests}
              clearable
              className='w-3/4 sm:w-1/2 lg:w-1/3'
            />
          </div>
        </MantineProvider>
    );
  }
  
  const Geography = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      // Fetch data only if countries list is empty
      if (!countries.length) {
        const fetchData = async () => {
          const leanData = await countryList().getData().map(country => ({
            label: country.label,
            value: country.value,
          }));
          setCountries(leanData);
        };
        fetchData();
      }
    }, []);

    return (
      <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4'>
        <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>What country or region do you want to prioritize?</h1>
        <p className='py-3 text-center'>Specifying an area helps customize your news alongside global events.</p>
        
        <Select
          className="max-w-xs"
          label="Select countries"
          items={countries}
          selectionMode="multiple"
          labelPlacement="outside"
          selectedKeys={places}
          onChange={handleSelectionChange}
          disableAnimation
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
      </div>
    );
  }
  
  const Optional = () => {
    return (
      <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4'>
        <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>Additional Personalization (Optional)</h1>
        <p className='py-3 text-center sm:w-2/3 xl:w-1/2'>These are optional personalization options to indicate your news source preferences, content format, emotional tone, and depth of coverage.</p>
      </div>
    );
  }

  const questions = [<Duration />, <Interests />, <Geography /> /*<Optional />*/];

  return (
    <div className='flex h-full w-full overflow-hidden pt-20'>
        {questions[currentIndex - 1]}
        <BottomNav currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} answers={[duration, interests, places]} />
    </div>
)
}




export default Start;