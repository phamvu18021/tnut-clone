import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { Box, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export const CardAboutSwipe = ({ image }: { image: string }) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box>
      <Image
        className="Image"
        src={image}
        width={"100%"}
        objectFit={"contain"}
        height={"auto"}
      />
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

export const AboutSwipe = () => {
  const AboutImg = [
    {
      title: "Ảnh giới thiệu 1",
      avt: `/about1.jpg`,
    },
    {
      title: "Ảnh giới thiệu 2",
      avt: `/about2.jpg`,
    },

    {
      title: "Ảnh giới thiệu 3",
      avt: `/about3.jpg`,
    },

    {
      title: "Ảnh giới thiệu 4",
      avt: `/about4.jpg`,
    },

    {
      title: "Ảnh giới thiệu 5",
      avt: `/about5.jpg`,
    },

    {
      title: "Ảnh giới thiệu 6",
      avt: `/about6.jpg`,
    },
  ];

  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {AboutImg?.map((Aimg, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <CardAboutSwipe image={Aimg.avt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
