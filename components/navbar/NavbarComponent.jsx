'use client'
import React, { useEffect, useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { BsStack } from "react-icons/bs";

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <div className="mr-8">
          <Link href='/' className="text-txt">
            <BsStack size={20}/>
            <p className="font-bold text-xl ml-2">ComaCatchup</p>
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
}

import { FaUserCircle } from "react-icons/fa";
import {Avatar} from "@nextui-org/react";

const NavContent = () => {
  const {data: session} = useSession();
  const pathname = usePathname();

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
                <Button as={Link} className="bg-primary text-black text-medium rounded-full" href="/dashboard" variant="flat">
                  Dashboard
                </Button>
              </NavbarItem>
            </NavbarContent>
          ) : (
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} className="bg-primary text-black text-medium rounded-full" href="api/auth/signin" variant="flat">
                Sign in
              </Button>
            </NavbarItem>
          </NavbarContent>
          )}
      </>
    ) : (
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
              <Button as={Link} className="bg-primary text-black text-medium rounded-full" href="api/auth/signin" variant="flat">
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

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, cn} from "@nextui-org/react";

const AvatarDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
      <Avatar showFallback src='https://images.unsplash.com/broken' fallback={
          <FaUserCircle size={30}/>
        } className="bg-transparent cursor-pointer"/>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
      <DropdownSection title="Actions" showDivider>  
        <DropdownItem
            key="new"
            shortcut="⌘N"
            description="Create a new file"
            startContent={<FaUserCircle />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            shortcut="⌘C"
            description="Copy the file link"
            startContent={<FaUserCircle />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            shortcut="⌘⇧E"
            description="Allows you to edit the file"
            startContent={<FaUserCircle />}
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">  
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
            startContent={<FaUserCircle />}
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}



export default NavbarComponent;
