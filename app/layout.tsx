import { ToastContainer } from "react-toastify";
import "./globals.css";
import QueryClientContextProvider from "@/components/app/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientContextProvider>
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </QueryClientContextProvider>
      </body>
    </html>
  );
}
