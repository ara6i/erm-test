import AuthLayout from "@/components/Layout/AuthLayout";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/sections/HeaderSection/Button";
import InputField from "@/components/Table/Inputs/InputField";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <AuthLayout>
      <div>
        <div className="flex justify-center flex-col gap-4 items-center mb-6">
          <Logo />
          <p className="text-3xl font-bold">Bo International</p>
        </div>
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          LOGIN
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please enter your registered email id or phone number
        </p>

        <InputField
          label="Email id / Phone Number"
          placeholder="Email id / Phone Number"
        />

        <div className="w-full flex items-center justify-center mt-10">
          <Link
            href={"/dashboard"}
            className=" rounded-xl flex items-center justify-center w-[242px] h-[40px] text-white bg-primary text-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
