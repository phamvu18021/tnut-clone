
import { LayoutNganh } from "@/layouts/layoutNganh";
import { MajorsDetails } from "@/components/MajorsDetails";
export const Ktcn = () => {
  return (
    <LayoutNganh
      title="KINH TẾ CÔNG NGHIỆP"
      image="/nganh-kinh-te-cong-nghiep.jpg"
      path='/kinh-te-cong-nghiep'
    >
      <MajorsDetails
        major="KINH TẾ CÔNG NGHIỆP"
        image="/nganh-kinh-te-cong-nghiep.jpg"
        tabf="Tổng quan chương trình"
        tabs="Cơ hội nghề nghiệp"
        tabt="Thông tin tuyển sinh"
        tabfp={[
          "<b>Ngành Kinh tế công nghiệp</b> có tên tiếng Anh là Industrial economics. Kinh tế công nghiệp là một chuyên ngành Kinh tế học thuộc lĩnh vực kinh tế học ứng dụng, chuyên nghiên cứu về cơ cấu, tổ chức ngành, năng lực cạnh tranh giữa các ngành và tiểu ngành kinh tế.",
          "Mục tiêu đào tạo của ngành <b>Kinh tế công nghiệp</b> chính là đào tạo ra đội ngũ nguồn nhân lực chất lượng cao về kinh tế và quản lý trong các lĩnh vực công nghiệp, năng lượng. Đào tạo những kiến thức về tổ chức hoạt động và vận hành của thị trường, những vấn đề kinh tế trong các ngành công nghiệp và năng lượng cũng như những kiến thức liên quan đến quản lý các nguồn tài nguyên.",
        ]}
        tabsp={[
          "Sinh viên tốt nghiệp ngành Kinh tế công nghiệp sẽ có đầy đủ những kiến thức khoa học cơ bản cùng với những phẩm chất nghề nghiệp cần thiết để có thể tham gia vào quá trình quản lý một cách hiệu quả.",
          "Cụ thể là sau khi nhận được tấm bằng cử nhân ngành Kinh tế công nghiệp, các bạn sẽ có đủ năng lực để làm việc tại:",
          ". Nghiên cứu viên, tư vấn viên trong lĩnh vực năng lượng và môi trường",
          ". Kỹ sư vận hành và quản lý năng lượng trong doanh nghiệp sản xuất",
          ". Tham gia giảng dạy tại các trường đại học, cao đẳng...",
          ". Kiểm toán viên tại các Công ty kiểm toán",
          ". Trợ lý giám đốc, Chuyên gia tư vấn về Kinh tế...",
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
