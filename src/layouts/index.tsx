import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./components/Sidebar";
import { CTA } from "./components/Cta";
interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
