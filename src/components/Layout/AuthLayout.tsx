import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left section with image and overlay */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/mock/auth.png"
          alt="Laboratory Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Right section with form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
        <div className="max-w-md w-full p-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
