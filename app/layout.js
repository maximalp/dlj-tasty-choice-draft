import "./globals.css";

export const metadata = {
  title: "DLJ — Tasty Choice Draft",
  description: "A draft order tin for the league.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
