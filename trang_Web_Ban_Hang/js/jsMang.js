let arr = [
    ["images/banghe.jpeg", "Bàn ghễ phòng khách gỗ gõ đỏ", "Giá: 16.000.000₫",
        "Lượt xem: 194", "Bộ salon phòng khách, gỗ đủ món tay 12 ,chạm rồng rất" +
    " tinh sảo,hoàn thiện phun sơn cao cấp ,chống công viền vênh, mối mọt, bảo " +
    "hành 24 tháng"],


    ["images/giuong_go.jpg", "Giường ngủ có ngăn kéo", "Giá: 3.500.000₫", "Lượt " +
    "xem: 1906", "Trạng thái:Đặt hàng - Màu sản phẩm:tràm óc chó\n" +
    "                Chất liệu:Chất liệu: Gỗ công nghiệp MDF công nghệ ván sàn chịu" +
    " lực tốt, đã qua tẩm sấy chống mối mọt,\n" +
    "                không cong vênh.\n" +
    "                Kích thước:rộng:1m6 x dài: 2m\n" +
    "                Bảo hành:12 tháng"],


    ["images/sofa-vang-ni-gia-re-3.jpg", "Sofa văng nỉ giá rẻ 1m8 thiết kế hiện đại tại" +
    " Hà Nội", "Giá: 3.750.000₫", " Lượt xem: 196", "mang phong cách hiện đại với kiểu đệm rít múi\n" +
    "                là một trong những mẫu sofa văng hot nhất hiện nay. Với phong cách " +
    "hiện đại, màu sắc trẻ trung, chất\n" +
    "                liệu tốt, bạn hoàn toàn có thể tin chọn. Việc của bạn là chọn màu ghế, " +
    "còn lại cứ để chúng tôi\n" +
    "                lo."],


    ["images/ban-an-1.jpg", "Bàn ăn 4 ghế mango màu vàng giá rẻ", "Giá: 2.900.000₫", "Lượt xem: 1906",
        "Chất liệu bàn ăn mango 4 chỗ màu vàng là Gỗ nhập khẩu\n" +
        "                Kích thước: dài: 1m2 – rộng 80 cm\n" +
        "                Màu sắc: vàng\n" +
        "                Đóng gói trong thùng carton, dễ dàng vận chuyển, không lo trầy xước.\n" +
        "                Hàng luôn có sẵn, giao trong ngày, thanh toán khi nhận hàng và kiểm tra hàng."],


    ["images/ban-trang-diem-1.jpg", "Bàn trang điểm giá rẻ hộc sâu –tp 01", "Giá: 1.800.000₫", "Lượt xem: 106",
        "Chất liệu bàn trang điểm giá rẻ hộc sâu là mặt đệm,gỗ\n" +
        "                Kích thước: Rộng – sâu – cao\n" +
        "                Màu sắc: trắng\n" +
        "                Độ mới 100% chưa qua sử dụng."],


    ["images/ban-giam-doc.jpg", "Bàn giám đốc 1m8 –tp 20", "Giá: 1.950.000₫", "Lượt xem: 176", "Bàn giám đốc" +
    " 1m8 tại Hà Nội được làm bằng chất liệu gỗ công nghiệp cao cấp. Bàn được phủ một lớp\n" +
    "                Melamine, sơn PU chống trầy xước tốt, ẩm mốc, bóng đẹp theo thời gian. Với độ dày 80mm, mặt bàn cong\n" +
    "                phía trước và có một khoảng trang trí độc đáo, cách điệu."]
]


function hienthimang() {
    let str = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            str += "<li>";
            str += "<img src=" + arr[i][0] + " height=\"150\" width=\"170\">"
                + "<h2><a href='san_pham1.html'>" + arr[i][1] + "</a></h2>" + arr[i][2] + "<br><br>" + arr[i][3] + "<br><br>"
                + arr[i][4] + "<br><br>";
            str += "</li>";
        } else {
            continue;
        }
    }
    return str;
}


function themvaomang() {
    cout = arr.length;
    arr[cout] = [];
    arr[cout].push(document.getElementById("link_img").value);
    arr[cout].push(document.getElementById("title").value);
    arr[cout].push(document.getElementById("price").value);
    arr[cout].push(document.getElementById("view").value);
    arr[cout].push(document.getElementById("comtent").value);
}

function laymangsua() {
    let sttsua = document.getElementById("stt_sua").value;
    document.getElementById("link_img").value = arr[sttsua][0];
    document.getElementById("title").value = arr[sttsua][1];
    document.getElementById("price").value = arr[sttsua][2];
    document.getElementById("view").value = arr[sttsua][3];
    document.getElementById("comtent").value = arr[sttsua][4];
}

function suamang() {
    let sttsua = document.getElementById("stt_sua").value;
    let linkimg = document.getElementById("link_img").value;
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let view = document.getElementById("view").value;
    let comtent = document.getElementById("comtent").value;

    arr[sttsua][0] = linkimg;
    arr[sttsua][1] = title;
    arr[sttsua][2] = price;
    arr[sttsua][3] = view;
    arr[sttsua][4] = comtent;

    document.getElementById("hienthi").innerHTML = hienthimang();
}

function delete_arr() {
    let sttsua = document.getElementById("stt_sua").value;
    arr.splice(sttsua, 1);
    document.getElementById("hienthi").innerHTML = hienthimang();
}

function tim_kiem_vi_tri() {
    let timkiem = document.getElementById("btt_search").value;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr[i][j] == timkiem) {
                return i + 1;
            }
        }

    }
    return false;
}

function hienthimangtimkiem(a) {
    let str1 = "<ul>"
        + "<li>"
        + "<img src=" + arr[a][0] + " height=\"150\" width=\"170\">"
        + "<h2>" + arr[a][1] + "</h2>" + arr[a][2] + "<br><br>" + arr[a][3] + "<br><br>"
        + arr[a][4] + "<br><br>"
        + "</li>"
    return str1;
}

function tim_kiem() {
    let timkiem = tim_kiem_vi_tri();
    if (timkiem != false) {
        document.getElementById("hienthi").innerHTML = hienthimangtimkiem(parseInt(timkiem) - 1);
    } else {
        alert("không tìm kiếm được! ")
    }
}

function hien_thi_gio_hang() {
    let str2 = "<table>\n" +
        "<tr>\n" +
        "<th>Tên sản phẩm</th>\n" +
        "<th>Giá sản phẩm</th>\n" +
        "<th>thông tin sản phẩm</th>\n" +
        "<th>ảnh sản phẩm</th>\n" +
        "<th>Xóa</th>\n" +
        "</tr>\n" +
        "<div id=\"bang_gio_hang\"></div>\n" +
        "<tr>" +
        "<td>" + arr[0][1] + "</td>" +
        "<td>" + arr[0][2] + "</td>" +
        "<td>" + arr[0][4] + "</td>" +
        "<td><img src=\"" + arr[0][0]+"\"height='100' width='100'>" + "</td>" +
        "<td><button>Xóa</button></td>\n" +
        "</tr>  </table>";
    return str2;
}

