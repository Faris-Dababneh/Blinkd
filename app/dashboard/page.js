'use client'
import React from "react";
import {Sidebar} from '../../components/dashboard/Sidebar';
import {DashboardComponent} from '../../components/dashboard/DashboardComponent';
import AvatarDropdown from "../../components/navbar/AvatarDropdown";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

function Dashboard ()
{
    return (
        <div className="flex flex-row w-full">
            <Sidebar />
            <div className="w-full">
                <AvatarDropdown />
                <DashboardComponent />
            </div>
            
        </div>
    );
}

export default Dashboard;