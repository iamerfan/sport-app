import "@/assets/globals.scss";
import Local from "next/font/local";
import Layout from "@/components/Layout";

const shabnam = Local({
  src: "../assets/fonts/Shabnam-FD-WOL.ttf",
  preload: true,
});

export const metadata = {
  title: "پنل ادمین ورزشی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shabnam.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
