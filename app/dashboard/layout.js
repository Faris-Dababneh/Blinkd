import React from "react";
import {Sidebar} from '../../components/dashboard/Sidebar';
import {DashboardComponent} from '../../components/dashboard/DashboardComponent';
import AvatarDropdown from "../../components/navbar/AvatarDropdown";
import {Header} from '../../components/dashboard/Header';

export default function Layout({ children }) {
    return (
        <div className="flex flex-row w-full">
        <Sidebar />
        <div className="w-full">
            <AvatarDropdown />
            <div className='flex flex-col pl-44 pt-4 w-5/6 h-screen'>
                
                <main>{children}</main>
            </div>
        </div>
        
    </div>
    );
  }