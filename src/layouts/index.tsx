import { ReactNode } from "react";
import { CTA } from "./components/Cta";
import dynamic from "next/dynamic";
import { Loading } from "@/components/Loading";
interface ILayout {
  children: ReactNode;
}

const Header = dynamic(() => import("./header").then((mod) => mod.Header), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import("./footer").then((mod) => mod.Footer), {
  loading: () => <Loading />
});
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
