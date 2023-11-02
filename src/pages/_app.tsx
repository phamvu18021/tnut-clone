import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { ModalProvider } from "@/components/ModalContext";
import "@/styles/globals.css";
import "@/styles/tableContent.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <DefaultSeo
        title="Học Viện Bưu Chính Viễn Thông"
        description="Học Viện Bưu Chính Viễn Thông hệ đào tạo từ xa tuyển sinh 2023"
      />
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
