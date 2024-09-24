'use client'
import React, { useState } from 'react'
import { MdOutlineSpaceDashboard, MdOutlineSettings, MdOutlineHome, MdOutlineCreditCard } from "react-icons/md";
import { LuCreditCard } from "react-icons/lu";
import Link from 'next/link';

import { MantineProvider } from '@mantine/core';
import { NavLink } from '@mantine/core';

export const Sidebar = () => {
  const menu = [
    { index: 0, label: 'Dashboard', href: '/dashboard', icon: MdOutlineSpaceDashboard },
    { index: 1, label: 'Billing', href: '#dashboard', icon: MdOutlineCreditCard },
  ]

  const options = [
    { index: 2, label: 'Settings', href: '#settings', icon: MdOutlineSettings },
    { index: 3, label: 'Homepage', href: '/', icon: MdOutlineHome },
  ]

  const [active, setActive] = useState(0);

  return (
    <MantineProvider>
      <div className='w-1/6 border h-screen'>
          <div className="p-4">
            <Link href='/' className="text-txt">
              <p className="font-bold text-xl">Blinkd</p>
            </Link>
          </div>
          <div className='w-full'>
          <div className='w-full p-4'>
                <p className='text-small font-light'>MENU</p>
                {menu.map((item) => (
                    <NavLink 
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    active={item.index === active}
                    onClick={() => setActive(item.index)}
                    leftSection={<item.icon size={20}/>}
                  />
                ))}
              </div>
            <div className='w-full p-4'>
              <p className='text-small font-light'>OPTIONS</p>
              {options.map((item) => (
                  <NavLink 
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  active={item.index === active}
                  onClick={() => setActive(item.index)}
                  leftSection={<item.icon size={20}/>}
                />
              ))}
            </div>
              
          </div>
      </div>
    </MantineProvider>
  )
}
