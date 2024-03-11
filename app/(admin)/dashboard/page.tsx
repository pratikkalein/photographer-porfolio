"use client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

function Admin() {
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push("/login");
    } else {
      console.log("User is logged in");
      console.log(user.email);
    }
  });

  const signOutUser = async () => {
    await signOut(auth);
    console.log("User has been signed out");
    router.push("/login");
  };

  return (
    <div>
      Admin
      <p>This is the Admin Dashboard</p>
      <button
        className="bg-red-500 p-2"
        onClick={() => {
          signOutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Admin;
