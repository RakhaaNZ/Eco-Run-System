import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./UI/Navbar/navbar";

const lateef = localFont({
  src: [
    {
      path: "./fonts/Lateef-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Lateef-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Eco Run System",
  description: "Eco Run Event Website",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lateef.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
