import AccountBoxIcon from "@material-ui/icons/AccountBox";
import WebIcon from "@material-ui/icons/Web";
import TimelineIcon from "@material-ui/icons/Timeline";
import Home from "@material-ui/icons/Home";

export type content = {
  name: string;
  link: string;
  icon: Function;
  displayAtHome: boolean;
};

export const contents: content[] = [
  { name: "Home", link: "/", icon: () => <Home />, displayAtHome: false },
  {
    name: "Profile",
    link: "/profile",
    icon: () => <AccountBoxIcon />,
    displayAtHome: true
  },
  {
    name: "Products",
    link: "/products",
    icon: () => <WebIcon />,
    displayAtHome: true
  },
  {
    name: "History",
    link: "/history",
    icon: () => <TimelineIcon />,
    displayAtHome: true
  }
];
