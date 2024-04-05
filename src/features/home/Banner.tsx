import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export const CardBanner = ({ image }: { image: string }) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box>
      <Image
        priority
        alt="image"
        className="Image"
        src={image}
        // width={"1883"}
        // objectFit={"contain"}
        // layout="fill"
        width={1950}
        height={800}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />

      <BtnTheme
        position={"absolute"}
        top={"80%"}
        left={{ base: "10%", lg: "18%" }}
        color={"white"}
        colorScheme="white"
        size={{ base: "xs", md: "lg" }}
        fontSize={{ base: "14px", lg: "20px" }}
        onClick={() => !isOpen && onOpen && onOpen()}
        w={{ base: "140px", md: "220px", lg: "260px" }}
      >
        ĐĂNG KÝ NGAY!
      </BtnTheme>
    </Box>
  );
};
const SwiperContainer = styled.div`
.swiper-button-next, .swiper-button-prev {
  color: #fff;
}
.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after {
  font-size:30px
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
  font-size:30px
}
.swiper-pagination {
  position: absolute;
  top: 82%;
  left: 80%;
  transform: translate3d(-50%, 0, 0);
  bottom: 30px;
  @media (max-width: 420px) {
  display: none;
  }
}
.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  justify-content: center;
  font-size: 16px;
  color: #8A8A8A;
  opacity: 1;
  background: rgba(0, 0, 0, 0);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #4299E1;
}
@media (max-width: 420px) {
  
}
}`;

export const Banner = (imagesBanner: any) => {
  const teachers = [
    {
      title:
        "Ứng dụng nền tảng Đại học số tiên tiến, Tuyển sinh liên tục, Xét duyệt hồ sơ dự tuyển, Bằng cấp tương đương hệ chính quy      ",
      avt: imagesBanner?.imagesBanner?.anh_banner1 || `/banner-tnut.webp`,
      desc: `ĐẠI HỌC TỪ XA`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner?.imagesBanner?.anh_banner2 || `/banner-tnut1.webp`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner?.imagesBanner?.anh_banner3 || `/banner-tnut2.webp`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner?.imagesBanner?.anh_banner4 || `/banner-tnut3.webp`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };
  return (
    <SwiperContainer>
      <Swiper
        pagination={pagination}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {teachers?.map((teacher, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <CardBanner image={teacher.avt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
