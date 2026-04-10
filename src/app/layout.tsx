import "./globals.css";

export const metadata = {
  title: "Sungmin Lee — Software Engineer & Guitar Instructor",
  description:
    "Sungmin Lee — Fullstack software engineer and classical & fingerstyle guitar instructor. Explore my work, book a lesson, or browse the tab shop.",
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
