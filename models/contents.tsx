import AccountBoxIcon from "@material-ui/icons/AccountBox";
import WebIcon from "@material-ui/icons/Web";
import TimelineIcon from "@material-ui/icons/Timeline";
import Home from "@material-ui/icons/Home";

export type content = {
  name: string;
  link: string;
  icon: Function;
};

export const contents: content[] = [
  { name: "Home", link: "/", icon: () => <Home /> },
  { name: "Profile", link: "/profile", icon: () => <AccountBoxIcon /> },
  { name: "Products", link: "/products", icon: () => <WebIcon /> },
  { name: "History", link: "/history", icon: () => <TimelineIcon /> }
];
