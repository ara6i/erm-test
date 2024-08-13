import LoginForm from "@/components/Auth/LoginForm";
import AuthLayout from "@/components/Layout/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
