import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";

import "./_styles/globals.css";

config.autoAddCss = false;

export const metadata = {
  title: "Julianne Adams",
  description: "Portfolio of Julianne Adams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_FONT_LINK} />
      </Head>
      <body className="flex flex-col justify-center bg-orange-50 px-12 py-2 text-grey-700">
        <Navbar />
        <main className="flex flex-row justify-center w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
