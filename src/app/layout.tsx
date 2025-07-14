import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meta-PWA - Превратите ваше веб-приложение в прогресивный опыт",
  description: "Meta-PWA помогает создавать молниеносные, работающие офлайн прогрессивные веб-приложения, которые обезпечивают пользователям опыт, близкий к нативному.",
  generator: "v0.dev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
