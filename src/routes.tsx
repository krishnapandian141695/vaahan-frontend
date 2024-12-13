import React from "react";
import Entries from "./views/dashboard/Reports/Sales/Entries";
import ViewEntries from "./views/dashboard/Reports/Sales/ViewEntries";
import DealerSale from "./views/dashboard/Reports/Sales/DealerSale";
import ChangePassword from "./views/dashboard/ChangePassword";
import PrintCertificate from "./views/PrintCertificate";
import AllSales from "./views/dashboard/Reports/Sales/AllSales";
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const AddCompany = React.lazy(() => import("./views/dashboard/AddCompany"));
const Manufacturer = React.lazy(
  () => import("./views/dashboard/Reports/Profiles/Manufacturer")
);
const Distributor = React.lazy(
  () => import("./views/dashboard/Reports/Profiles/Distributor")
);
const SubDistributor = React.lazy(
  () => import("./views/dashboard/Reports/Profiles/SubDistributor")
);
const dealer = React.lazy(
  () => import("./views/dashboard/Reports/Profiles/Dealer")
);
const subDistributerSale = React.lazy(
  () => import("./views/dashboard/Reports/Sales/SubDistributorSale")
);
const distributorSale = React.lazy(
  () => import("./views/dashboard/Reports/Sales/DistributorSale")
);

const routes = [
  { path: "/", exact: false, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/companyAdd", name: "Company", element: AddCompany },
  { path: "/manufacturer", name: "Manufacturer", element: Manufacturer },
  { path: "/distributor", name: "Distributor", element: Distributor },
  { path: "/subDistributor", name: "Manufacturer", element: SubDistributor },
  { path: "/dealer", name: "Dealer", element: dealer },
  {
    path: "/distributorSale",
    name: "DistributorSale",
    element: distributorSale,
  },
  {
    path: "/subDistributorSale",
    name: "SubDistributorSale",
    element: subDistributerSale,
  },
  { path: "/Entries", name: "Entries", element: Entries },
  { path: "/ViewEntries/:id", name: "ViewEntries", element: ViewEntries },
  { path: "/DealerSale", name: "DealerSale", element: DealerSale },
  { path: "/changePassword", name: "Change Password", element: ChangePassword },
  {
    path: "/PrintCertificate/:id",
    name: "Print Certificate",
    element: PrintCertificate,
  },
  {
    path: "/AllSales",
    name: "All Sales",
    element: AllSales,
  },
];

export default routes;
