import React from "react";
import { SidebarProvider } from "../../context/SidebarContext";
import Sidebar from "../../components/Layout/Sidebar";
import Header from "../../components/Layout/Header";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <main className=" bg-gray-100 min-h-screen">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
