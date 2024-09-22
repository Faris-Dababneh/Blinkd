'use client'
import React, { useState, useEffect } from 'react'
import BottomNav from './BottomNav'
import {DateRangePicker} from "@nextui-org/react";
import {getLocalTimeZone, today, parseDate} from "@internationalized/date";
import {Select, SelectItem, Avatar, Chip} from "@nextui-org/react";
import countryList from 'react-select-country-list';
import Cookies from 'js-cookie'
import _ from 'lodash';

import { TagsInput } from '@mantine/core';
import { MantineProvider } from '@mantine/core';


function Start() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [duration, setDuration] = useState()
  
  // Gets the cookie for duration if it exists
  let durationCookie = Cookies.get('duration') ? JSON.parse(Cookies.get('duration')) : null
  useEffect(() => {
    // If the cookie exists, it will set the DateRangePicker component to the cookie value
    if (durationCookie) {
      let durationStartMonth = durationCookie ? durationCookie.start.month < 10 ? `0${durationCookie.start.month}` : durationCookie.start.month : null
      let durationStartDay = durationCookie ? durationCookie.start.day < 10 ? `0${durationCookie.start.day}` : durationCookie.start.day : null
      let durationEndMonth = durationCookie ? durationCookie.end.month < 10 ? `0${durationCookie.end.month}` : durationCookie.end.month : null
      let durationEndDay = durationCookie ? durationCookie.end.day < 10 ? `0${durationCookie.end.day}` : durationCookie.end.day : null
      let startDate = durationCookie ? durationCookie.start.year > 1000 ? parseDate(`${durationCookie.start.year}-${durationStartMonth}-${durationStartDay}`) : null : null
      let endDate = durationCookie ? durationCookie.end.year > 1000 ? parseDate(`${durationCookie.end.year}-${durationEndMonth}-${durationEndDay}`) : null : null
      setDuration({start: startDate, end: endDate})
    } else {
      setDuration({start: null, end: null})
    }
  }, [])
  

  const durationChange = (event) => {
    setDuration(event)
    if (event)
    {
      Cookies.set('duration', `${JSON.stringify(event)}`)
    }
    
  }

  const Duration = () => {
    // THIS DATE COMPONENT STINKS - USE MANTINE INSTEAD https://mantine.dev/dates/date-picker-input/
    return (
      <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4' suppressHydrationWarning={true}>
          <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>How long do you need your news coverage?</h1>
          <p className='py-3 text-center'>Your feed will contain all relevant news during this period.</p>
          <DateRangePicker 
                visibleMonths={2}
                variant={"underlined"}
                value={duration}
                onChange={durationChange}
                maxValue={today(getLocalTimeZone())}
                className='w-full sm:w-1/2 md:w-1/3'
              />
      </div>
      
    )
  }
  
  let interestsCookie = Cookies.get('interests') ? JSON.parse(Cookies.get('interests')) : null;
  const [interests, setInterests] = useState(interestsCookie ? interestsCookie : []);

  const interestsChange = (event) => {
    setInterests(event)
    console.log(event)
    Cookies.set('interests', `${JSON.stringify(event)}`)
    console.log(JSON.parse(Cookies.get('interests')))
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
              data={['Science', 'Technology', 'Politics', 'World', 'Business', 'Entertainment', 'Health', 'Fitness', 'Environment', 'Sports', 'Art', 'Culture']}
              value={interests}
              onChange={(event) => interestsChange(event)}
              clearable
              className='w-3/4 sm:w-1/2 lg:w-1/3'
            />
          </div>
        </MantineProvider>
    );
  }

  let placesCookie = Cookies.get('places') ? JSON.parse(Cookies.get('places')) : null
  const [places, setPlaces] = useState(new Set([]))
  
  const handleSelectionChange = (event) => {
    setPlaces(new Set(event.target.value.split(",")));
    Cookies.set('places', `${JSON.stringify(new Set(event.target.value.split(",")))}`);
  };

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