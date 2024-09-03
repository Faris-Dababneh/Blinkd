import React from "react";
import {Sidebar} from '../../components/dashboard/Sidebar';
import {DashboardComponent} from '../../components/dashboard/DashboardComponent';

//import { useSession } from 'next-auth/react';
//import { useRouter } from 'next/navigation'

function Dashboard ()
{
    //const {data: session } = useSession();

    return (
        <div className="flex flex-row">
            <Sidebar />
            <DashboardComponent />
        </div>
    );
}

export default Dashboard;