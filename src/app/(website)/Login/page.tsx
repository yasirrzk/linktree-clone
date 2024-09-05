import LoginGoogle from "@/app/Component/buttons/LoginGoogle";

export default function loginpage() {
  return (
    <div>
      <div className="p-4 max-w-xs mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
        Sign in 
        </h1>
        <p className="text-center mb-6 text-gray-500">
          Sign in to your account using one of the methods below
        </p>
        <LoginGoogle />
      </div>
    </div>
  );
}
