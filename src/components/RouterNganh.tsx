"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useState } from 'react';

const linkStyles = {
  textDecoration: 'none',
};

export const RouterNganh = () => {
  const [activeLink, setActiveLink] = useState('sectionIntroduce'); 
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <Box
      boxShadow="lg"
      rounded="md"
      bg={"linear-gradient(180deg, #fff 0, #f8f9fa 100%)"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Breadcrumb
        separator=""
        maxW={"1728px"}
        margin={"0 auto"}
        p={"0 21px"}
        color={"#1E2456 !important"}
        fontSize={"18px"}
        whiteSpace="nowrap"
        overflowX="auto"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#sectionIntroduce"
            onClick={() => handleLinkClick('sectionIntroduce')}
            style={{
              ...linkStyles,
              borderBottom: activeLink === 'sectionIntroduce' ? '2px solid red' : 'none',
              padding: '12px'
            }}
          >
            Giới thiệu
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#sectionBenefit"
            onClick={() => handleLinkClick('sectionBenefit')}
            style={{
              ...linkStyles,
              borderBottom: activeLink === 'sectionBenefit' ? '2px solid red' : 'none',
              padding: '12px'
            }}
          >
            Lợi ích chương trình
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#sectionHoc"
            onClick={() => handleLinkClick('sectionHoc')}
            style={{
              ...linkStyles,
              borderBottom: activeLink === 'sectionHoc' ? '2px solid red' : 'none',
              padding: '12px'
            }}
          >
            Chương trình học
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="#sectionVieclam"
            onClick={() => handleLinkClick('sectionVieclam')}
            style={{
              ...linkStyles,
              borderBottom: activeLink === 'sectionVieclam' ? '2px solid red' : 'none',
              padding: '12px'
            }}
          >
            Cơ hội việc làm
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
