import Employer from "./pages/users/Employer";
import JobSeeker from "./pages/users/JobSeeker";


export const routes = [
  {
    path: "/employer",
    exact: true,
    component: <Employer />,
    title: "Employer",
    isHeaderElement: true,
  },
  {
    path: "/jobseeker",
    exact: true,
    component: <JobSeeker/>,
    title: "JobSeeker",
    isHeaderElement: true,
  },
];
