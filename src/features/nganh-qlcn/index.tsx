import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
export const Qlcn = () => {
  return (
    <LayoutNganh
      title="QUẢN LÝ CÔNG NGHIỆP"
      image="/nganh-quan-li-cong-nghiep.jpg"
      path="/quan-ly-cong-nghiep"
    >
      <MajorsDetails
        major="QUẢN LÝ CÔNG NGHIỆP"
        image="/nganh-quan-li-cong-nghiep.jpg"
        tabf="Tổng quan chương trình"
        tabs="Cơ hội nghề nghiệp"
        tabt="Thông tin tuyển sinh"
        tabfp={[
          "<p ><b> Quản Lý Công Nghiệp </b> (tên tiếng Anh là Industrial Management – IM) là ngành giao thoa giữa kinh tế và kỹ thuật. Đóng vai trò quan trọng cho thành công của các công ty, doanh nghiệp kinh doanh, thương mại, dịch vụ.</p>",
          "<p>Định nghĩa một cách ngắn gọn thì ngành quản lý công nghiệp là ngành đào tạo, cung cấp các kiến thức lẫn kỹ năng chuyên môn cho sinh viên về quản trị nguồn nhân lực, dự án, sản xuất, quản lý vật tư – tồn kho, đánh giá công nghệ. Với kiến thức bao quát về hoạt động kinh doanh và am hiểu thị trường, cử nhân quản lý đồng thời cũng là người chịu trách nhiệm lập dự án kinh doanh, kế hoạch tiếp thị, nghiên cứu thị trường và đầu tư tài chính…</p>",
        ]}
        tabsp={[
          "Ngành <b>Quản Lý Công Nghiệp</b> được đánh giá là một ngành học có nhiều triển vọng nghề nghiệp trong tương lai với cơ hội việc làm rộng mở và mức lương hấp dẫn.",
          "Cử nhân ngành <b>Quản Lý Công Nghiệp</b> sau khi ra trường sẽ có cơ hội làm việc tại các tổ chức sản xuất, dịch vụ, thương mại với các quy mô khác nhau, đặt biệt có nhiều cơ hội làm việc tại các công ty đa quốc gia với các vị trí làm việc sau khi tốt nghiệp như: ",
          ". Quản lý nhà máy",
          ". Quản lý mua hàng",
          ". Quản lý sản xuất",
          ". Quản lý chất lượng sản phẩm",
          ". Cải tiến hệ thống sản xuất",
          ". Quản trị tài chính",
          ". Quản lý chuỗi cung ứng",
          ". Quản trị nhân sự…",
        ]}
        tabtp={[
          ". Đối tượng tuyển sinh: Tốt nghiệp THPT trở lên ",
          ". Hình thức tuyển sinh: Xét tuyển theo hồ sơ đăng ký. KHÔNG THI TUYỂN.",
          ". Thời gian tuyển sinh: Liên tục trong năm.",
          ". Thời gian đào tạo: từ 2 - 4,5 năm tùy đối tượng đầu vào",
          ">> Người học có thể học vượt để rút ngắn thời gian học tập theo quy chế đào tạo theo học chế tín chỉ. Liên hệ với chúng tôi qua hotline 081.567.4848 để biết thời gian đào tạo phù hợp với văn bằng đầu vào của bạn",
          "<b>Văn bằng tốt nghiệp</b>",
          ". Bằng do Đại học kỹ thuật công nghiệp – ĐH Thái Nguyên cấp",
          ". Không ghi hình thức Đào tạo trên văn bằng tốt nghiệp",
          ". Có giá trị tương đương bằng CHÍNH QUY, được Bộ GD&ĐT công nhận và có thể học tiếp lên Thạc sĩ, Tiến sĩ, thi công chức, xét bậc lương theo quy định nhà nước",
        ]}
      />
    </LayoutNganh>
  );
};
