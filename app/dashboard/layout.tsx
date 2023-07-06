import { Suspense } from "react";
import Nav from "./nav";

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
    <div>
      <Suspense>
        <Nav />
      </Suspense>
      {children}
    </div>
  );
}
