import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IUserData } from "@/shared/types";
export default function NavigationBar() {
  const auth = useAuthUser<IUserData>();
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  console.log(isAuth);
  const signOut = useSignOut();
  return (
    <NavigationMenu className="flex flex-col justify-between  min-w-full pt-4 items-center  sm:flex-row  sm:gap-10">
      <div className="flex gap-4 items-center">
        <img
          src="https://utfs.io/f/b0d9f2dc-8832-403f-a679-7f95d43fd949-4mg7i.png"
          alt="GoTickets"
          className="w-20"
          loading="lazy"
        />{" "}
        <p className="font-bold">GoTickets</p>
      </div>

      <NavigationMenuList className="gap-4 ">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          >
            <Link to="/tickets">Tickets</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      {!isAuth ? (
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <Link to="/signUp">Sign Up</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              <Link to="/login">Login</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      ) : (
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p>{auth?.email}</p>{" "}
          </div>
          <Button
            onClick={() => {
              signOut();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </NavigationMenu>
  );
}
