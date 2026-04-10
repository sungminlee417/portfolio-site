import "./globals.css";
import Script from "next/script";
import ThemeProvider from "@/components/ThemeProvider";

const GA_ID = "G-Q622MW6BRD";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          src="https://kit.fontawesome.com/db311df611.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body>
        <ThemeProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
