import { Award, ChartLine, Layers, LayoutDashboard, PackageSearch, Target, Users } from "lucide-react";

const K = {
NAVLINKS: [
    {
        icon: <LayoutDashboard/>,
        text: "Overview",
        link: "/dashboard"
    },
    {
        icon: <PackageSearch/>,
        text: "Product Highlight",
        link: "/dashboard/product"
    },
   
    {
        icon: <Target/>,
        text: "Market",
        link: "/dashboard/market"
    },
    {
        icon: <Layers/>,
        text: "Business Model",
        link: "/dashboard/business"
    },
    {
        icon: <Award/>,
        text: "Achievements",
        link: "/dashboard/achievements"
    },
    {
        icon: <ChartLine/>,
        text: "Financials",
        link: "/dashboard/financials"
    },
    {
        icon: <Users/>,
        text: "Team",
        link: "/dashboard/team"
    },
]
};

export default K;