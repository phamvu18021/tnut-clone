import Layout from "@/layouts";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { DefaultSeo, NextSeo } from "next-seo";
import { ModalProvider } from "@/components/ModalContext";
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

  return (
    <>
      <DefaultSeo
        title="ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
        description="Tuyển sinh hệ đại học trực tuyến khối ngành kỹ thuật, học từ xa kết hợp thực hành trực tiếp. Cấp bằng Kỹ sư/ Cử nhân được Bộ GD&ĐT công nhận."
        openGraph={{
          images: [
            {
              url: "/sep.jpg",
              width: 850,
              height: 650,
              alt: "ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa",
            },
          ],
        }}
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
