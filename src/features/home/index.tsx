"use client";

import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setHomeContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeContent();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 8000);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner imagesBanner={home_content?.acf?.anh_banner} />
      <Introduce introduce={home_content?.acf?.gioi_thieu} />
      <Benefit benefit={home_content?.acf?.loi_ich} />
      <Slogan slogan={home_content?.acf?.slogan} />
      <Majors majors={home_content?.acf?.nganh_dao_tao} />
      <Testimonials testimonials={home_content?.acf?.danh_gia_cua_hoc_vien} />
      <Advertisement advertisement={home_content?.acf?.quang_cao} />
      <Event />
      <Circulars circulars={home_content?.acf?.thong_tu} />
    </>
  );
};
