import localFont from "next/font/local";

import "./globals.css";

const neo_sans_pro = localFont({
  variable: "--font-neo-sans",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/NeoSansProLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProLightIt.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeoSansProRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeoSansProMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProMedIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeoSansProBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProBoldIt.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeoSansProBlack.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProBlackIt.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeoSansProUltra.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansProUltIt.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "PureFitness Africa",
  description: "A leading chain of health clubs in Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${neo_sans_pro.variable} font-neo`}>{children}</body>
    </html>
  );
}
