"use client";

import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import { fetchGraphQL } from "@/ultil/fetchAuth";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { graphqlHomeQuery } from "@/graphQLQuery";
import client from "@/apollo/apolloClient";
import { GET_PAGE_CMS } from "@/apollo/queries/homeQueries";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />
});
const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />
});

const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />
  }
);

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <Loading />
});

const Slogan = dynamic(() => import("./Slogan").then((mod) => mod.Slogan), {
  loading: () => <Loading />
});
const Advertisement = dynamic(
  () => import("./Advertisement").then((mod) => mod.Advertisement),
  {
    loading: () => <Loading />
  }
);
const Testimonials = dynamic(
  () => import("./Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <Loading />
  }
);
const Majors = dynamic(() => import("./Majors").then((mod) => mod.Majors), {
  loading: () => <Loading />
});

const Circulars = dynamic(
  () => import("./Circulars").then((mod) => mod.Circulars),
  {
    loading: () => <Loading />
  }
);

export const Home = () => {
  const { isOpen, onOpen } = useModal();
  const [home_content, setHomeContent] = useState<any>(null);
  const [graphqlData, setGraphqlData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const { ref, inView } = useInView({
    threshold: 0.5 // Kích hoạt khi 50% của phần tử hiển thị trong viewport
  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (!isOpen && onOpen) onOpen();
  //   }, 2000);

  //   return () => window.clearTimeout(timeout);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    // Kiểm tra xem trongView và isVisible đều là true
    if (inView && !isVisible) {
      setIsVisible(true); // Nếu không thì hiển thị
    }
  }, [inView, isVisible]);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["graphqlHomeData"],
  //   queryFn: () => fetchGraphQL({ query: graphqlHomeQuery })
  // });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_PAGE_CMS
        });
        setGraphqlData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Trích xuất dữ liệu
  const trangChus = graphqlData?.trangChus?.nodes ?? [];
  return (
    <>
      <Banner imagesBanner={trangChus[0]?.anhBanner} />
      <Introduce introduce={trangChus[0]?.gioiThieu} />
      <Box ref={ref}>
        {isVisible && (
          <>
            <Benefit benefit={trangChus[0]?.loiIch} />
            <Slogan slogan={trangChus[0]?.slogan} />
            <Majors majors={trangChus[0]?.nganhDaoTao} />
            <Testimonials testimonials={trangChus[0]?.danhGiaHocVien} />
            <Advertisement advertisement={trangChus[0]?.quangCao} />
            <Event />
            <Circulars circulars={trangChus[0]?.thongTu} />
          </>
        )}
      </Box>
    </>
  );
};
