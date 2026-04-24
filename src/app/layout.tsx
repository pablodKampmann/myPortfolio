import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Pablo Kampmann | Desarrollador Full-Stack",
  description:
    "Desarrollador full-stack con formación en Ingeniería en Sistemas. Experiencia en desarrollo web, infraestructura y administración de bases de datos.",
  openGraph: {
    title: "Pablo Kampmann | Desarrollador Full-Stack",
    description:
      "Desarrollador full-stack con formación en Ingeniería en Sistemas. Experiencia en desarrollo web, infraestructura y administración de bases de datos.",
    type: "website",
    images: ["/images/profile/me-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
