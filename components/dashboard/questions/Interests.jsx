import React, {useState} from 'react'
import {DateRangePicker} from "@nextui-org/react";
import Cookies from 'js-cookie'
import {getLocalTimeZone, today, parseDate} from "@internationalized/date";
import { MantineProvider } from '@mantine/core';
import { TagsInput } from '@mantine/core';
import { SaveAnswer } from './SaveAnswer';

export const Interests = () => {
    let interestsCookie = Cookies.get('interests') ? JSON.parse(Cookies.get('interests')) : null;
    const [interests, setInterests] = useState(interestsCookie ? interestsCookie : []);

    const interestsChange = (event) => {
        setInterests(event)
        console.log(event)
        Cookies.set('interests', `${JSON.stringify(event)}`)
        console.log(JSON.parse(Cookies.get('interests')))
    }

    return (
        <MantineProvider>
          <div className='flex justify-center items-center w-full flex-col overflow-hidden px-4 py-10'>
            <h1 className='text-black text-center text-2xl sm:text-4xl font-semibold'>What news categories are you interested in?</h1>
            <p className='py-3 text-center'>This will help personalize your feed for your liking.</p>
            <TagsInput
              label="Your interests"
              placeholder="Enter interests here"
              data={['Science', 'Technology', 'Politics', 'World', 'Business', 'Entertainment', 'Health', 'Fitness', 'Environment', 'Sports', 'Art', 'Culture']}
              value={interests}
              onChange={(event) => interestsChange(event)}
              clearable
              className='w-3/4'
            />
          </div>
          <SaveAnswer />
        </MantineProvider>
    );
}
