'use client'
import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { BsStack } from "react-icons/bs";

import { useSession } from 'next-auth/react';

const HomeNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data: session} = useSession();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-whitish border-b-1">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <BsStack size={25}/>
          <p className="font-bold text-xl ml-2">FULLSTACK</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8">
        <NavbarItem>
          <Link className="text-txt" href="/">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/" className="text-txt" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-txt" href="/">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      {session ? (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} className="bg-primary text-black text-medium rounded-full" href="/dashboard" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/" className="text-txt text-medium">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="bg-primary text-black text-medium rounded-full" href="api/auth/signin" variant="flat">
              Sign up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu className="z-30 px-6 pt-2 fixed flex max-w-full top-[var(--navbar-height)] inset-x-0 bottom-0 w-screen flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 bg-primary/70">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={
                `${index === 2 ? "text-secondary" : index === menuItems.length - 1 ? "text-tertiary" : "text-whitish"} w-full`
              }
  
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default HomeNav;
