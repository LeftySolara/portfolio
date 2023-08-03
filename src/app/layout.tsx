import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";

import "./_styles/globals.css";
import { inter, poppins } from "./_styles/fonts";

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
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} no-scrollbar`}
    >
      <body className="flex flex-col justify-center bg-orange-50 text-grey-700 lg:w-[900px] m-auto p-3">
        <Navbar />
        <main className="flex flex-col justify-center w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
