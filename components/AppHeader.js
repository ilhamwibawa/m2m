import React from "react";
import AppButton from "./AppButton";

function AppHeader() {
  return (
    <header className="bg-gray-100 px-5 py-5 md:px-10 md:py-5 flex items-center justify-between shadow">
      <h1 className="text-xl font-bold">Brand</h1>
      <nav className="flex items-center gap-5 md:gap-10">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Sign In
        </a>
        <AppButton variant="primary" apperance="rounded">
          Create Account
        </AppButton>
      </nav>
    </header>
  );
}

export default AppHeader;
