import { lazy } from "react";

export const routes = [
  {
    pageLink: "/",
    view: page("dashboard"),
    displayName: "Home",
    animationDelayForNavbar: 0.2,
    showInNavbar: true,
  },
  {
    pageLink: "/login",
    view: page("account/Login"),
    displayName: "Login",
    animationDelayForNavbar: 0.3,
    showInNavbar: false,
    public: true,
  },
  {
    pageLink: "/user/profile",
    view: page("user/Profile"),
    displayName: "Create Account",
  },
  {
    pageLink: "/user/activites",
    view: page("user/Activites"),
    displayName: "Create Account",
  },
  {
    pageLink: "/user/settings",
    view: page("user/Settings"),
    displayName: "Create Account",
  },
  {
    pageLink: "/account/create",
    view: page("account/Create"),
    displayName: "Create Account",
    animationDelayForNavbar: 0.4,
    showInNavbar: true,
  },
  {
    pageLink: "/account",
    view: page("account/List"),
    displayName: "Users List",
    animationDelayForNavbar: 0.5,
    showInNavbar: true,
  },
  {
    pageLink: "*",
    view: page("errors/NotFound"),
  },
];

function page(path) {
  return lazy(() => import(`@/pages/${path}`));
}
