import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Activity,
  ChevronRight,
  Info,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import viteLogo from "/vite.svg";

const Sidenav = () => {
  return (
    <div className="bg-white h-full w-full">
      <div className="left-0 flex-col items-center max-sm:px-6 max-sm:gap-64 px-10 py-10">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-black font-bold pb-6">
            <NavLink to="/">
              <img src={viteLogo} alt="Logo" className="h-12" />
            </NavLink>
            My wallet
          </div>
        </nav>
        <Sheet>
          <div className="md:hidden flex items-center justify-between mr-3 text-black font-bold">
            <NavLink to="/work">
              <img src="" alt="Logo" className="h-8" />
            </NavLink>
          </div>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden border-0"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full">
            <nav className="grid gap-6 text-lg font-medium mt-32" id="topnav">
              <div className="flex items-center justify-center gap-2 mb-16 text-black font-bold">
                <img src="" alt="Logo" className="" />
                <span></span>
              </div>
              <SheetClose asChild>
                <NavLink to="/" className="hover:text-foreground">
                  Overview
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Transactions
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Budgets
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Wallets
                </NavLink>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex-1 overflow-y-auto" style={{ overflowY: "hidden" }}>
          <nav className="grid items-start text-sm font-medium">
            <NavLink
              to="/"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-black"
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </NavLink>
            <NavLink
              to="/transactions"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-black"
            >
              <Activity className="h-4 w-4" />
              Transactions
            </NavLink>

            <NavLink
              to="/transactions"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-black"
            >
              <Package className="h-4 w-4" />
              Budgets
            </NavLink>
            <NavLink
              to="/reset-pin"
              className="flex items-center gap-3 rounded-lg px-3 py-4 text-black"
            >
              <Settings className="h-4 w-4" />
              Wallet
            </NavLink>
          </nav>
        </div>
        <div className="w-full h-20 mt-auto flex items-center border-t-2">
          <Button size="sm" className="w-full mtn-btn bg-white text-black">
            <LogOut />
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
