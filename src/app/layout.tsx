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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
