import "./globals.css";

export const metadata = {
  title: "Sungmin Lee",
  description:
    "Portfolio of Sungmin Lee – Software Engineer and Classical Guitarist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/db311df611.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
