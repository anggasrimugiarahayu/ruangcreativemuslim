import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ruang Ngonten - Strategi Faceless Creator",
  description: "Panduan ngonten untuk bangun akun sosmed dari nol tanpa harus nunjukin wajah.",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body
        className={`bg-rn-dark-bg text-gray-200 font-body selection:bg-rn-accent selection:text-black antialiased relative min-h-screen`}
      >
        {children}
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
        <Script id="lucide-init" strategy="lazyOnload">
          {`
            setInterval(() => {
              if (window.lucide) {
                window.lucide.createIcons();
              }
            }, 1000);
          `}
        </Script>
      </body>
    </html>
  );
}
