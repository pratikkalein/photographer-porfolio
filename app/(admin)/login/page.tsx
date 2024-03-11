"use client";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/signin";
import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="bg-gray-900 text-white p-8 rounded-md lg:min-w-96">
        <h1 className="font-bold text-2xl mb-4">Admin Login</h1>
        <form onSubmit={handleForm}>
          <label htmlFor="email" className="block py-2">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="rounded-sm p-2 text-black w-full"
            />
          </label>
          <label htmlFor="password" className="block py-2">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="rounded-sm p-2 text-black w-full"
            />
          </label>
          <button
            className="block bg-white w-full text-slate-900 rounded-sm p-1 mt-4 hover:bg-slate-600 transition-all duration-300 ease-in-out"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
