import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
export const Ktxd = () => {
  return (
    <LayoutNganh title="KỸ THUẬT XÂY DỰNG" image="/nganh-xay-dung.jpg">
      <MajorsDetails
        major="KỸ THUẬT XÂY DỰNG"
        image="/nganh-xay-dung.jpg"
        tabf="Tổng quan chương trình"
        tabs="Cơ hội nghề nghiệp"
        tabt="Thông tin tuyển sinh"
        tabfp={[
          "Ngành Kỹ thuật xây dựng là ngành học đào tạo ra các kỹ sư xây dựng có khả năng tư vấn, thực thi, giám sát, thiết kế và nghiệm thu công trình. Trong đó bao gồm các công trình của nhà nước như đường cầu, các cơ sở vật chất công cộng. Ngoài ra kỹ sư xây dựng còn làm các công trình cho doanh nghiệp cá nhân.",
          "Khi học ngành Kỹ thuật xây dựng bạn sẽ được học các kiến thức cơ bản về khoa học tự nhiên và khoa học xã hội. Một số môn như: chủ nghĩa Mác Lênin, tư tưởng Hồ Chí Minh, Toán học đại cương… Tiếp đến là các môn chuyên ngành về kỹ thuật xây dựng. Bạn sẽ được học các môn về thiết kế, tính toán, phân tích, tổ chức thi công và tư vấn giám sát công trình. Sinh viên được thực tập tại các công ty xây dựng, có kiến thức thực tế.",
        ]}
        tabsp={[
          "Sinh viên tốt nghiệp ngành Kỹ thuật xây dựng có thể làm việc tại các công ty tư vấn về xây dựng, thi công xây dựng dự án hoặc tự lập các công ty riêng về thiết kế, giám sát, lập dự án hoặc làm việc tại các ban quản lý dự án xây dựng. Cụ thể:",
          ". Kỹ sư thiết kế, thi công",
          ". Kỹ sư giám sát",
          ". Kỹ sư quản lý chất lượng",
          ". Chuyên viên tư vấn",
          ". Giảng dạy",
        ]}
        tabtp={[
          ". Đối tượng tuyển sinh: Tốt nghiệp THPT trở lên ",
          ". Hình thức tuyển sinh: Xét tuyển theo hồ sơ đăng ký. KHÔNG THI TUYỂN.",
          ". Thời gian tuyển sinh: Liên tục trong năm.",
          ". Thời gian đào tạo: từ 2 - 4,5 năm tùy đối tượng đầu vào",
          ">> Người học có thể học vượt để rút ngắn thời gian học tập theo quy chế đào tạo theo học chế tín chỉ. Liên hệ với chúng tôi qua hotline 081.567.4848 để biết thời gian đào tạo phù hợp với văn bằng đầu vào của bạn",
          "Văn bằng tốt nghiệp",
          ". Bằng do Đại học kỹ thuật công nghiệp – ĐH Thái Nguyên cấp",
          ". Không ghi hình thức Đào tạo trên văn bằng tốt nghiệp",
          ". Có giá trị tương đương bằng CHÍNH QUY, được Bộ GD&ĐT công nhận và có thể học tiếp lên Thạc sĩ, Tiến sĩ, thi công chức, xét bậc lương theo quy định nhà nước",
        ]}
      />
    </LayoutNganh>
  );
};
