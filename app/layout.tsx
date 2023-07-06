import "./globals.css";

export const metadata = {
  title: "Social Scribe",
  description: "We do automate all of your brand's social media activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">{children}</body>
    </html>
  );
}
