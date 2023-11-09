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
export const CardBanner = ({ image }: { image: string }) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box>
      <Image
        className="Image"
        src={image}
        // alt={title}
        width={"100%"}
        objectFit={"contain"}
        height={"auto"}
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
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px) {
    top: -400px;
  }
  @media (max-width: 420px) {
    top: -210px;
  }
`;
const NavButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  background-color: hsl(0, 0%, 100%);
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5s;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  &:hover {
    background-color: hsl(
      40.08298755186722,
      96.7871485943775%,
      48.82352941176471%
    );
    cursor: pointer;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const Banner = () => {
  const teachers = [
    {
      title:
        "Ứng dụng nền tảng Đại học số tiên tiến, Tuyển sinh liên tục, Xét duyệt hồ sơ dự tuyển, Bằng cấp tương đương hệ chính quy      ",
      avt: `/banner-ptit.png`,
      desc: `ĐẠI HỌC TỪ XA`,
    },
    {
      title:
        "Với hệ đào tạo từ xa PTIT, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: `/banner-ptit1.png`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`,
    },
    {
      title:
        "Với hệ đào tạo từ xa PTIT, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: `/banner-ptit2.png`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`,
    },
    {
      title:
        "Với hệ đào tạo từ xa PTIT, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: `/banner-ptit3.png`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`,
    },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <SwiperContainer>
      <Swiper
        pagination={pagination}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
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
