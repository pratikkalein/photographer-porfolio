import AdminHeader from "@/components/adminHeader";
import "../globals.css";
import AdminFooter from "@/components/adminFooter";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between">
        <AdminHeader />
        <main className="px-8">{children}</main>
        <AdminFooter />
      </body>
    </html>
  );
}
