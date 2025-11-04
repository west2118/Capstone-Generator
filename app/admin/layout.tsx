import React from "react";
import Link from "next/link";
import Sidebar from "@/components/app/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="min-h-screen flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </main>
    </div>
  );
}
