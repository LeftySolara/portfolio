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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
