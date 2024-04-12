import { ReactNode } from "react";
import { CTA } from "./components/Cta";
import { Footer } from "./footer";
import { Header } from "./header";
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
