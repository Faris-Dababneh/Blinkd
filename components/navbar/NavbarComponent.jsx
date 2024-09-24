'use client'
import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { BsStack } from "react-icons/bs";

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

import AvatarDropdown from "./AvatarDropdown";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

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
  if (pathname !== '/dashboard') {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="mt-2">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <div className="mr-8">
            <Link href='/' className="text-txt">
              <BsStack size={20}/>
              <p className="font-bold text-xl ml-2">Blinkd</p>
            </Link>
          </div>
          <NavContent />
        </NavbarContent>

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
  } else {
    return;
  }
}

import { FaUserCircle } from "react-icons/fa";
import {Avatar} from "@nextui-org/react";

const NavContent = () => {
  const pathname = usePathname();
  const {data: session } = useSession();
  return (
    <>
        {pathname === '/' ? (
        <>
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
          </NavbarContent>
          {session ? (
            <NavbarContent justify="end">
              <NavbarItem className="hidden md:flex">
                <Link prefetch={false} href="/dashboard"><Button className="bg-primary text-white text-medium rounded-full" variant="flat">
                  Dashboard
                </Button>
                </Link>
              </NavbarItem>
            </NavbarContent>
          ) : (
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} className="bg-transparent text-black md:text-medium -mr-4 hidden sm:flex" href="/api/auth/signin" variant="flat">
                Log in
              </Button>
            </NavbarItem>
            <NavbarItem >
              <Button as={Link} className="bg-primary text-white rounded-full md:text-medium" href="/signup" variant="flat">
                Sign up
              </Button>
            </NavbarItem>
          </NavbarContent>
          )}
      </>
     ) : (
     pathname !== '/' &&
      <>
        <NavbarContent className="hidden sm:flex gap-8">      
            <NavbarItem>
              <Link className="text-txt" href="/">
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
          {session ? (
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                  <AvatarDropdown />
              </NavbarItem>
            </NavbarContent>
          ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/" className="text-txt text-medium">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} className="bg-primary text-white text-medium rounded-full" href="api/auth/signin" variant="flat">
                Sign up
              </Button>
            </NavbarItem>
          </NavbarContent>
          )}
      </>
     )}
    </>
  )
}




export default NavbarComponent;
