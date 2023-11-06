"use client";

import { Loading } from "@/components/Loading";
import { useModal } from "@/components/ModalContext";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});

const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />,
  }
);

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <Loading />,
});

const Slogan = dynamic(() => import("./Slogan").then((mod) => mod.Slogan), {
  loading: () => <Loading />,
});
const Advertisement = dynamic(
  () => import("./Advertisement").then((mod) => mod.Advertisement),
  {
    loading: () => <Loading />,
  }
);
const Testimonials = dynamic(
  () => import("./Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <Loading />,
  }
);
const Majors = dynamic(() => import("./Majors").then((mod) => mod.Majors), {
  loading: () => <Loading />,
});

const Circulars = dynamic(
  () => import("./Circulars").then((mod) => mod.Circulars),
  {
    loading: () => <Loading />,
  }
);
const LastestPost = dynamic(
  () => import("./LastestPost").then((mod) => mod.LastestPost),
  {
    loading: () => <Loading />,
  }
);

export const Home = () => {
  const { isOpen, onOpen } = useModal();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <>
      <Banner />
      <Introduce />
      <Benefit />
      <Slogan />
      <Majors />
      <Testimonials />
      <Advertisement />
      <LastestPost />
      <Circulars />
    </>
  );
};
