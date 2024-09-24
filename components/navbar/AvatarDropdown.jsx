'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"; 
import { getUserProfile } from "../../app/database/Firebase";
import { Navbar, NavbarContent, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";
import { MdOutlineSpaceDashboard, MdOutlineSettings, MdOutlineLogout } from "react-icons/md";

function AvatarDropdown() {
  const { data: session } = useSession();
  console.log(session)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (session) {
        const data = await getUserProfile(session);
        setUserData(data);
      }
    };

    fetchUserData();
  }, [session]);

  return (
    <Navbar>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              
              name={session?.user?.name}
              size="sm"
              src={session?.user?.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownSection showDivider>
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{session?.user?.name}</p>
                <p className="text-gray-500">{session?.user?.email || "Loading..."}</p>
              </DropdownItem>
            </DropdownSection>
            <DropdownSection showDivider>
              <DropdownItem key="dashboard" startContent={<MdOutlineSpaceDashboard size={20}/>}>Dashboard</DropdownItem>
              <DropdownItem key="settings" startContent={<MdOutlineSettings size={20}/>}>Settings</DropdownItem>
            </DropdownSection>
            <DropdownItem key="logout" color="danger" startContent={<MdOutlineLogout size={20}/>}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default AvatarDropdown;
