import {  Briefcase, ChartBar, LayoutDashboard, Megaphone, Settings, User,} from "lucide-react";

const K = {
NAVLINKS: [
    {
        icon: <LayoutDashboard/>,
        text: "Overview",
        link: "/dashboard"
    },
    {
        icon: <Briefcase/>,
        text: "Pitches",
        link: "/dashboard/pitches"
    },
    {
        icon:<ChartBar/>,
        text: "Analytics",
        link: "/dashboard/analytics"
    },
    {
        icon: <User/>,
        text: "Profile",
        link: "/dashboard/profile"
    },
    {
        icon: <Settings/>,
        text: "Settings",
        link: "/dashboard/settings"
    },
    
]
};

export default K;