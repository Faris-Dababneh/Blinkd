import React from "react";
import {Sidebar} from '../../components/dashboard/Sidebar';
import {DashboardComponent} from '../../components/dashboard/DashboardComponent';

function Dashboard ()
{
    return (
        <div className="flex flex-row">
            <Sidebar />
            <DashboardComponent />
        </div>
    );
}

export default Dashboard;