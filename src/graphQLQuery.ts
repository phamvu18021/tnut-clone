export const graphqlHomeQuery = `
  query NewQuery {
    trangChus {
      nodes {
        anhBanner {
          anh_banner_1
          anh_banner_2
          anh_banner_3
          anh_banner_4
          anh_banner_5
        }
        danhGiaHocVien {
          cac_danh_gia {
            anh_hoc_vien
            danh_gia
            nghe_nghiep
            ten_hoc_vien
          }
          tieu_de_section
        }
        gioiThieu {
          form_title
          section_title
          text_list1
          text_list2
          text_list3
        }
        nganhDaoTao {
          tieu_de_section
          cac_nganh_hoc {
            image_nganh
            text_nganh
          }
        }
        quangCao {
          anh_bang
          quang_cao {
            text_1
            text_2
            text_3
            text_button
          }
        }
        slogan
        thongTu {
          link_video
          thong_tu {
            text_1
            text_2
            text_3
          }
        }
        slug
        loiIch {
          loi_ich_desc
          loi_ich_descs
          loi_ich_title
        }
        footer {
          block_1 {
            link_facebook
            link_tiktok
            link_youtube
            link_zalo
            logo
            title
          }
          block_2 {
            item_1 {
              label
              link
            }
            item_2 {
              label
              link
            }
            item_3 {
              label
              link
            }
            title
          }
          block_3 {
            image_1
            image_2
            text_1
            text_2
            title
          }
          block_4 {
            image
            title
          }
        }
      }
    }
  }
`;
