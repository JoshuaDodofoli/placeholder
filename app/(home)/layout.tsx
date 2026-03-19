import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
  );
}
