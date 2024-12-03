import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { ModalProvider } from "@/components/ModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
// import '@/styles/swiper.css'
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const queryClient = new QueryClient();
  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </ModalProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
