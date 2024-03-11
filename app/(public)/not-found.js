import Link from "next/link";
import "../globals.css";

export default function Custom404() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-center">
        <p>404 - Page Not Found</p>
        <Link className="underline" href="/">
          Go back to home -{">"}
        </Link>
      </div>
    </div>
  );
}
