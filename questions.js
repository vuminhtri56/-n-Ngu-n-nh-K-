const QUESTION_BANK = [
    {
        "id": 1,
        "question": "Các chức năng chính của hệ thống đèn tín hiệu hàng không là gì",
        "options": [
            "Là hệ thống trợ giúp bằng mắt giúp cho phi công thực hiện CHC và di chuyển trên mặt đất",
            "Có thiết kế thay đổi cường độ chiếu sáng",
            "Có các cấu hình để phân biệt cấp sân bay",
            "Một trong 03 ý trên đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 2,
        "question": "Hệ thống đèn tín hiệu hàng không có tác dụng cung cấp các thông tin nào cho phi công",
        "options": [
            "Để tiếp cận chính xác",
            "Có tầm nhìn tốt để CHC",
            "Để dễ dàng di chuyển trên các đường lăn, đường CHC",
            "Cả 03 ý trên đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 3,
        "question": "Nguồn áp thông thường được sử dụng cho",
        "options": [
            "Hệ thống nguồn cung cấp cho đèn hiệu sân bay",
            "Hệ thống đèn chớp",
            "Đèn xoay",
            "Cả b và c đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 4,
        "question": "Nguồn dòng là nguồn điện có dòng điện cung cấp",
        "options": [
            "Không phụ thuộc tải",
            "Phụ thuộc tải",
            "Phụ thuộc áp ra",
            "Tất cả câu trên đều sai"
        ],
        "answer": 0
    },
    {
        "id": 5,
        "question": "Nguồn dòng có thể vận hành",
        "options": [
            "Ngắn mạch",
            "Hở mạch",
            "Cả câu a và b đều đúng",
            "Cả câu a và b đều sai"
        ],
        "answer": 0
    },
    {
        "id": 6,
        "question": "Ưu điểm của mạch đèn nối tiếp",
        "options": [
            "Cho phép tăng số lượng bóng đèn",
            "Tăng chiều dài mạch đèn",
            "Dễ dàng điều chỉnh độ sáng đèn",
            "Tất cả trường hợp trên"
        ],
        "answer": 3
    },
    {
        "id": 7,
        "question": "Phụ lục nào sau đây nói về các hệ thống trợ giúp bằng mắt hàng không",
        "options": [
            "Part 4 doc 9157",
            "Part 5 doc 9157",
            "Part 9 doc 9137"
        ],
        "answer": 0
    },
    {
        "id": 8,
        "question": "Phụ lục nào sau đây nói về quy trình bảo dưỡng đèn hiệu hàng không",
        "options": [
            "Part 4 doc 9157",
            "Part 5 doc 9157",
            "Part 9 doc 9137"
        ],
        "answer": 2
    },
    {
        "id": 9,
        "question": "Phụ lục nào sau đây nói về tiêu chuẩn thiết kế sân bay",
        "options": [
            "Part 1 doc 9157",
            "Part 2 doc 9157",
            "Part 4 doc 9157"
        ],
        "answer": 0
    },
    {
        "id": 10,
        "question": "Phụ lục nào sau đây nói về tiêu chuẩn khớp dễ gẫy đèn hiệu hàng không",
        "options": [
            "Part 6 doc 9157",
            "Part 5 doc 9157",
            "Part 4 doc 9157"
        ],
        "answer": 0
    },
    {
        "id": 11,
        "question": "Quy định khoảng cách an toàn từ tim đường CHC tiêu chuẩn ICAO sân bay cấp 4D, E đến vị trí dừng chờ không bị ảnh hưởng bởi ILS cho người và thiết bị là bao nhiêu mét",
        "options": [
            "90m",
            "70m",
            "120m"
        ],
        "answer": 0
    },
    {
        "id": 12,
        "question": "Khoảng cách giữa hai đường băng song song cho phép tiếp cận đồng thời",
        "options": [
            "≥ 760 m",
            "≥ 915 m",
            "≥ 1.035 m"
        ],
        "answer": 2
    },
    {
        "id": 13,
        "question": "Theo tiêu chuẩn ICAO, giá trị điện trở đất lớn nhất đối với hệ thống tiếp mát cáp sơ cấp đèn là bao nhiêu",
        "options": [
            "≤ 4Ω",
            "≤ 10Ω",
            "≤ 15Ω"
        ],
        "answer": 0
    },
    {
        "id": 14,
        "question": "Theo bạn thế nào là tiếp cận không chính xác (non-precision approach)",
        "options": [
            "Là tiếp cận chỉ theo phương ngang",
            "Là tiếp cận theo phương ngang và phương thẳng đứng",
            "Tiếp cận chỉ có hệ thống đèn không có thiết bị dẫn đường phụ trợ",
            "Tiếp cận chỉ có thiết bị phụ trợ không có hệ thống đèn"
        ],
        "answer": 0
    },
    {
        "id": 15,
        "question": "Theo bạn thế nào là tiếp cận chính xác (precision approach)",
        "options": [
            "Là tiếp cận chỉ theo phương ngang",
            "Là tiếp cận theo phương ngang và phương thẳng đứng",
            "Phương pháp tiếp cận bằng mắt không có đèn hướng dẫn góc đáp",
            "Phương pháp tiếp cận bằng thiết bị đo cự ly DME"
        ],
        "answer": 1
    },
    {
        "id": 16,
        "question": "Chiều dài hệ thống đèn tiếp cận giản đơn dài",
        "options": [
            "300m",
            "900m",
            "600m",
            "420m"
        ],
        "answer": 3
    },
    {
        "id": 17,
        "question": "Chiều dài hệ thống đèn tiếp cận tiêu chuẩn CAT I, II, III là bao nhiêu mét",
        "options": [
            "420m",
            "900m",
            "600m",
            "300m"
        ],
        "answer": 1
    },
    {
        "id": 18,
        "question": "Khoảng cách giữa hai hàng đèn tiếp cận theo tiêu chuẩn CAT I, II, III là bao nhiêu mét",
        "options": [
            "50m",
            "30m",
            "60m"
        ],
        "answer": 1
    },
    {
        "id": 19,
        "question": "Khoảng cách giữa hai hàng đèn tiếp cận loại tiếp cận giản đơn là bao nhiêu mét",
        "options": [
            "50m",
            "30m",
            "60m",
            "Câu b và c đúng"
        ],
        "answer": 3
    },
    {
        "id": 20,
        "question": "Hệ thống đèn tiếp cận tim có màu gì",
        "options": [
            "Màu vàng",
            "Màu trắng",
            "Màu xanh"
        ],
        "answer": 1
    },
    {
        "id": 21,
        "question": "Hệ thống đèn tiếp cận trước thềm (Side row barrette) có màu gì",
        "options": [
            "Màu vàng",
            "Màu đỏ",
            "Màu xanh"
        ],
        "answer": 1
    },
    {
        "id": 22,
        "question": "Theo khuyến cáo của ICAO, hệ thống tiếp cận CAT I cần đấu nối làm mấy mạch",
        "options": [
            "01 mạch",
            "02 mạch",
            "04 mạch chẵn, lẻ"
        ],
        "answer": 1
    },
    {
        "id": 23,
        "question": "Các góc ngẩng của đèn tiếp cận từ thềm CHC đến 315 mét là mấy độ",
        "options": [
            "6.5°",
            "6°",
            "5,5°"
        ],
        "answer": 2
    },
    {
        "id": 24,
        "question": "Các góc ngẩng của đèn tiếp cận từ 316 mét đến 475 mét là mấy độ",
        "options": [
            "5,5°",
            "7°",
            "6°"
        ],
        "answer": 2
    },
    {
        "id": 25,
        "question": "Các góc ngẩng của đèn tiếp cận từ 476 mét đến 640 mét được điều chỉnh là",
        "options": [
            "7°",
            "6°",
            "8°",
            "5,5°"
        ],
        "answer": 0
    },
    {
        "id": 26,
        "question": "Các góc ngẩng của đèn tiếp cận từ 641 mét đến 900 mét là mấy độ",
        "options": [
            "6.5°",
            "8°",
            "5,5°",
            "7°"
        ],
        "answer": 1
    },
    {
        "id": 27,
        "question": "Thời gian cho phép chuyển đổi nguồn của hệ thống đèn tiếp cận tiêu chuẩn ICAO CAT I là",
        "options": [
            "15 giây",
            "10 giây",
            "5 giây"
        ],
        "answer": 0
    },
    {
        "id": 28,
        "question": "Theo tiêu chuẩn ICAO CAT II thì đối với hệ thống đèn tiếp cận (Approach lighting) nằm trong phạm vi 450m tính từ đầu thềm CHC số lượng đèn phải hoạt động là bao nhiêu %",
        "options": [
            "90%",
            "85%",
            "95%"
        ],
        "answer": 2
    },
    {
        "id": 29,
        "question": "Theo tiêu chuẩn ICAO CAT II thì đối với hệ thống đèn tiếp cận (Approach lighting) nằm ngoài phạm vi 450m cho phép số lượng đèn ít nhất phải hoạt động là bao nhiêu",
        "options": [
            "95%",
            "90%",
            "85%"
        ],
        "answer": 2
    },
    {
        "id": 30,
        "question": "Thời gian cho phép chuyển đổi nguồn của hệ thống đèn tiếp cận trước thềm (Side row barrette) tiêu chuẩn ICAO CAT II là bao nhiêu",
        "options": [
            "1 giây",
            "3 giây",
            "5 giây"
        ],
        "answer": 0
    },
    {
        "id": 31,
        "question": "Các dải crossbar của đèn tiếp cận có tác dụng",
        "options": [
            "Cho phi công biết khoảng cách đến thềm",
            "Cho phi công biết đường chân trời so với phương ngang",
            "Cho phi công biết cấu hình đèn sân bay",
            "Các câu trên đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 32,
        "question": "Khoảng cách giữa 2 đèn lề đường CHC đấu nối cùng một mạch và cùng phía của đường CHC là bao nhiêu",
        "options": [
            "50 m",
            "60 m",
            "120 m"
        ],
        "answer": 2
    },
    {
        "id": 33,
        "question": "Đèn lề đường CHC có nửa bên màu trắng và nửa bên màu vàng được lắp ở vị trí nào",
        "options": [
            "Vị trí giới hạn hai đầu đường hạ cánh",
            "Ở giữa đường CHC",
            "Trong khoảng 600m đến cuối đường CHC"
        ],
        "answer": 2
    },
    {
        "id": 34,
        "question": "Đèn giới hạn đường CHC màu gì và được lắp như thế nào",
        "options": [
            "Màu xanh lắp quay về hướng tiếp cận",
            "Màu đỏ lắp quay về hướng đường CHC",
            "Màu đỏ lắp quay về hướng tiếp cận"
        ],
        "answer": 1
    },
    {
        "id": 35,
        "question": "Đèn lề đường CHC đấu nối nhau như thế nào",
        "options": [
            "Đấu nối chung một mạch",
            "Đấu nối với đèn giới hạn đường CHC",
            "Đấu nối hai mạch riêng lẻ",
            "Câu b và c đúng"
        ],
        "answer": 3
    },
    {
        "id": 36,
        "question": "Một đầu đường CHC có ít nhất",
        "options": [
            "4 đèn cuối đường CHC",
            "6 đèn cuối đường CHC",
            "8 đèn cuối đường CHC"
        ],
        "answer": 1
    },
    {
        "id": 37,
        "question": "Khoảng cách đặt đèn tim CHC (Runway centre line Lights) so với tim đường băng là bao nhiêu",
        "options": [
            "≤ 30cm",
            "≤ 45cm",
            "≤ 60cm"
        ],
        "answer": 2
    },
    {
        "id": 38,
        "question": "Theo tiêu chuẩn ICAO đèn lề đường CHC đặt cách vạch sơn lề CHC không quá mấy mét",
        "options": [
            "2m",
            "3m",
            "4m"
        ],
        "answer": 1
    },
    {
        "id": 39,
        "question": "Mạch đèn tim CHC (Runway centre line - RCL) theo tiêu chuẩn của ICAO đấu nối như thế nào",
        "options": [
            "01 mạch",
            "02 mạch",
            "Hai phương pháp trên đều đúng"
        ],
        "answer": 1
    },
    {
        "id": 40,
        "question": "Theo tiêu chuẩn ICAO CAT II, số lượng đèn vùng chạm bánh (Touchdown Zone) cho phép ít nhất phải hoạt động là bao nhiêu",
        "options": [
            "90%",
            "95%",
            "85%"
        ],
        "answer": 0
    },
    {
        "id": 41,
        "question": "Theo tiêu chuẩn ICAO CAT II, số lượng đèn tim CHC cho phép ít nhất phải hoạt động là bao nhiêu",
        "options": [
            "90%",
            "95%",
            "85%"
        ],
        "answer": 1
    },
    {
        "id": 42,
        "question": "Theo tiêu chuẩn ICAO CAT II, III đối với hệ thống đèn tim đường CHC thời gian cho phép gián đoạn cấp nguồn là bao lâu",
        "options": [
            "5 giây",
            "10 giây",
            "1 giây"
        ],
        "answer": 2
    },
    {
        "id": 43,
        "question": "Theo tiêu chuẩn ICAO CAT II, III thời gian cho phép chuyển đổi nguồn của hệ thống đèn thềm CHC là bao nhiêu",
        "options": [
            "1 giây",
            "10 giây",
            "15 giây"
        ],
        "answer": 0
    },
    {
        "id": 44,
        "question": "Thời gian cho phép chuyển đổi nguồn của hệ thống đèn lề CHC tiêu chuẩn ICAO CAT II là",
        "options": [
            "15 giây",
            "3 giây",
            "1 giây"
        ],
        "answer": 0
    },
    {
        "id": 45,
        "question": "Đèn tim đường CHC bắt đầu có đèn màu đỏ được lắp ở vị trí nào",
        "options": [
            "Vị trí giới hạn hai đầu đường băng",
            "Trong khoảng 900m đến cuối đường CHC",
            "Trong khoảng 600m đến cuối đường CHC"
        ],
        "answer": 1
    },
    {
        "id": 46,
        "question": "Trong vùng dịch ngưỡng thì các đèn lề CHC có màu gì theo hướng tiếp cận",
        "options": [
            "Màu trắng",
            "Màu xanh",
            "Màu đỏ"
        ],
        "answer": 2
    },
    {
        "id": 47,
        "question": "Đèn thềm đường CHC màu gì, lắp đặt như thế nào",
        "options": [
            "Màu xanh lắp quay về hướng tiếp cận",
            "Màu đỏ lắp quay về hướng tiếp cận",
            "Màu xanh lá lắp quay về hướng đường CHC"
        ],
        "answer": 0
    },
    {
        "id": 48,
        "question": "Các đèn lề đường lăn theo tiêu chuẩn ICAO, lắp đặt cách mép vạch sơn lề đường lăn là bao nhiêu",
        "options": [
            "≤ 2m",
            "≤ 3m",
            "≤ 4m"
        ],
        "answer": 1
    },
    {
        "id": 49,
        "question": "Khoảng cách giữa hai đèn lề đường lăn (đoạn thẳng) theo tiêu chuẩn ICAO là bao nhiêu mét",
        "options": [
            "≤ 70m",
            "≤ 60m",
            "≤ 80m"
        ],
        "answer": 1
    },
    {
        "id": 50,
        "question": "Khoảng cách giữa hai đèn tim đường lăn (đoạn thẳng) theo tiêu chuẩn ICAO là bao nhiêu",
        "options": [
            "≤ 40m",
            "≤ 30m",
            "≤ 50m"
        ],
        "answer": 1
    },
    {
        "id": 51,
        "question": "Khoảng cách đặt đèn tim đường lăn (taxiway centre line) so với tim đường lăn là bao nhiêu",
        "options": [
            "≤ 30cm",
            "≤ 45cm",
            "≤ 60cm"
        ],
        "answer": 0
    },
    {
        "id": 52,
        "question": "Các đèn chớp báo vạch dừng (Runway Guard Light) dạng A theo tiêu chuẩn ICAO có chu kỳ chớp như thế nào",
        "options": [
            "Từ 60 đến 100 lần/phút",
            "Từ 45 đến 50 lần/phút",
            "Từ 50 đến 60 lần/phút"
        ],
        "answer": 1
    },
    {
        "id": 53,
        "question": "Nguồn cấp cho hệ thống biển báo tại sân bay anh đang quản lý lấy từ đâu",
        "options": [
            "Cấp nguồn riêng",
            "Từ hệ thống mạch đèn lề đường lăn",
            "Từ hệ thống mạch đèn tim đường lăn",
            "Từ hệ thống mạch đèn đường CHC"
        ],
        "answer": 1
    },
    {
        "id": 54,
        "question": "Loại biển báo có cỡ chữ rộng 400mm bề mặt rộng 800mm thì chiều cao cho phép lắp đặt tối đa và khoảng cách từ vạch sơn lề đường lăn là bao nhiêu mét",
        "options": [
            "Chiều cao tối đa là 1100mm và cách vạch lề đường lăn từ 11-21 m",
            "Chiều cao tối đa là 1100mm và cách vạch lề đường lăn từ 05-11 m",
            "Chiều cao tối đa là 900mm và cách vạch lề đường lăn từ 05-11 m"
        ],
        "answer": 0
    },
    {
        "id": 55,
        "question": "Loại biển báo có cỡ chữ rộng 400mm bề mặt rộng 800mm thì chiều cao cho phép lắp đặt tối đa và khoảng cách từ vạch sơn lề đường CHC là bao nhiêu mét",
        "options": [
            "Chiều cao tối đa là 1100mm và cách vạch lề đường CHC từ 11-21 m",
            "Chiều cao tối đa là 1100mm và cách vạch lề đường CHC từ 8- 15 m",
            "Chiều cao tối đa là 900mm và cách vạch lề đường CHC từ 05-11 m"
        ],
        "answer": 1
    },
    {
        "id": 56,
        "question": "Phân biệt màu trên biển báo cấm và dừng chờ (Mandatory) Màu nền và màu ký tự",
        "options": [
            "Đỏ và Trắng",
            "Trắng và Vàng",
            "Đen và Đỏ"
        ],
        "answer": 0
    },
    {
        "id": 57,
        "question": "Phân biệt màu nền trên biển báo chỉ dẫn (Information) Màu nền và màu ký tự",
        "options": [
            "Đỏ và trắng",
            "Trắng và vàng",
            "Vàng và đen"
        ],
        "answer": 2
    },
    {
        "id": 58,
        "question": "Phân biệt màu trên biển báo vị trí (Location) Màu nền và màu ký tự",
        "options": [
            "Đen và vàng",
            "Trắng và vàng",
            "Đen và đỏ"
        ],
        "answer": 0
    },
    {
        "id": 59,
        "question": "Câu nào sai sau đây? Bộ điều khiển SLOS có tác dụng như thế nào",
        "options": [
            "Để điều khiển đóng, tắt một hoặc hai đèn Stopbar",
            "Để điều khiển đóng, tắt một hoặc hai đèn tim đường lăn dẫn (Lead-on)",
            "Để điều khiển đóng, tắt một hoặc hai đèn tim đường CHC"
        ],
        "answer": 2
    },
    {
        "id": 60,
        "question": "Trong hệ thống đèn đường Stopbar tiêu chuẩn CAT II có 02 đèn liên tiếp nhau đấu nối như thế nào",
        "options": [
            "Đấu nối chung một mạch",
            "Đấu nối theo hai mạch chẵn, lẻ",
            "Một trong hai cách trên đều đúng"
        ],
        "answer": 1
    },
    {
        "id": 61,
        "question": "Tại sao đèn đường lăn có cường độ sáng thấp, hãy chọn câu đúng nhất",
        "options": [
            "Do cần xác định rõ đường lăn khi máy bay hạ cánh",
            "Do công suất đèn đường lăn có công suất lớn",
            "Nhằm tránh nhầm lẫn với đèn đường CHC khi tàu bay hạ cánh",
            "Nhằm tránh ảnh hưởng đến độ sang đèn PAPI"
        ],
        "answer": 2
    },
    {
        "id": 62,
        "question": "Đèn vạch dừng có tác dụng như thế nào",
        "options": [
            "Ngăn chặn máy bay thoát khỏi đường CHC khi chưa được phép",
            "Ngăn chặn tàu bay lên đường CHC khi chưa được phép",
            "Ngăn chặn xe cộ thoát khỏi đường CHC",
            "Không cho phép lên đường CHC trong bất cứ tình huống nào"
        ],
        "answer": 1
    },
    {
        "id": 63,
        "question": "Đối với tiếp cận góc 3° hạ cánh không có thiết bị ILS thì các góc của đèn PAPI được chỉnh để bắt đầu bay hiệu chuẩn là",
        "options": [
            "Hộp A: 3°30’, hộp B: 3°10’, hộp C: 2°50’, hộp D: 3°30’",
            "Hộp A: 2°25’, hộp B: 2°45’, hộp C: 3°15’, hộp D: 3°35’",
            "Hộp A: 3°45’, hộp B: 3°15’, hộp C: 2°45’, hộp D: 2°25’",
            "Hộp A: 2°30’, hộp B: 2°50’, hộp C: 3°10’, hộp D: 3°30’"
        ],
        "answer": 3
    },
    {
        "id": 64,
        "question": "Đối với tiếp cận góc 3° hạ cánh có thiết bị ILS thì các góc của đèn PAPI được chỉnh để bắt đầu bay hiệu chuẩn là",
        "options": [
            "Hộp A: 3°30’, hộp B: 3°10’, hộp C: 2°50’, hộp D: 3°30’",
            "Hộp A: 2°25’, hộp B: 2°45’, hộp C: 3°15’, hộp D: 3°35’",
            "Hộp A: 3°45’, hộp B: 3°15’, hộp C: 2°45’, hộp D: 2°25’",
            "Hộp A: 2°30’, hộp B: 2°50’, hộp C: 3°10’, hộp D: 3°30’"
        ],
        "answer": 1
    },
    {
        "id": 65,
        "question": "Đèn PAPI được sử dụng trong những điều kiện nào",
        "options": [
            "Mọi thời tiết và thời gian trong ngày",
            "Ban đêm hoặc tầm nhìn hạn chế",
            "Ban ngày"
        ],
        "answer": 0
    },
    {
        "id": 66,
        "question": "Trong trường hợp nào sau đây người lái đã điều chỉnh máy bay hạ cánh đúng góc quy định của hệ thống đèn PAPI gồm 4 bộ đèn",
        "options": [
            "Người lái nhìn thấy bốn đèn màu đỏ",
            "Người lái nhìn thấy ba đèn màu trắng, một đèn màu đỏ",
            "Người lái nhìn thấy một đèn màu trắng, ba đèn màu đỏ",
            "Người lái nhìn thấy hai đèn màu trắng, hai đèn màu đỏ"
        ],
        "answer": 3
    },
    {
        "id": 67,
        "question": "Trong trường hợp nào sau đây người lái đã điều chỉnh máy bay hạ cánh góc theo góc quá thấp của hệ thống đèn PAPI gồm 4 bộ đèn",
        "options": [
            "Người lái nhìn thấy bốn đèn màu đỏ",
            "Người lái nhìn thấy ba đèn màu trắng, một đèn màu đỏ",
            "Người lái nhìn thấy 2 đèn trắng, 2 đèn đỏ",
            "Người lái nhìn thấy một đèn màu trắng, ba đèn màu đỏ"
        ],
        "answer": 0
    },
    {
        "id": 68,
        "question": "Góc ngẩng của các đèn trong một hệ thống đèn PAPI như thế nào",
        "options": [
            "Tất cả như nhau",
            "Tất cả khác nhau",
            "Giống nhau từng cặp",
            "Hai đèn ở giữa bằng nhau"
        ],
        "answer": 1
    },
    {
        "id": 69,
        "question": "Mạch cáp sơ cấp hệ thống đèn PAPI được đấu nối với nhau như thế nào",
        "options": [
            "Một mạch nối tiếp",
            "Hai mạch chẵn lẻ",
            "Các phương pháp trên đều đúng"
        ],
        "answer": 0
    },
    {
        "id": 70,
        "question": "Khoảng cách ngang giữa các hộp đèn PAPI liền nhau là",
        "options": [
            "10m",
            "15 m",
            "9 m±1m"
        ],
        "answer": 2
    },
    {
        "id": 71,
        "question": "Đèn PAPI (đèn D) theo tiêu chuẩn ICAO cách vạch lề đường cất hạ cánh",
        "options": [
            "15m ±1m",
            "12m",
            "42m"
        ],
        "answer": 0
    },
    {
        "id": 72,
        "question": "Góc 3° của đèn PAPI được tính theo công thức nào",
        "options": [
            "( Góc B + góc C ) / 2",
            "( Góc B - góc C ) / 2",
            "( Góc C - góc B ) / 2"
        ],
        "answer": 0
    },
    {
        "id": 73,
        "question": "Khi phi công tiếp cận vào hạ cánh thì cách bao xa đã nhìn thấy ánh sáng của hệ thống đèn PAPI nếu thời tiết tốt",
        "options": [
            "Từ 11Km vào ban ngày đến 30km vào ban đêm",
            "Từ 5 đến 10km",
            "Từ 25 đến 40km"
        ],
        "answer": 0
    },
    {
        "id": 74,
        "question": "Tổ hợp đèn PAPI sân bay mà bạn quản lý gồm có",
        "options": [
            "2 hộp đèn",
            "8 hộp đèn",
            "6 hộp đèn",
            "4 hộp đèn"
        ],
        "answer": 3
    },
    {
        "id": 75,
        "question": "Khi điều dòng đèn PAPI bị hư hỏng, bạn sẽ làm gì để đưa đèn PAPI vào khai thác nhanh nhất, hãy chọn phương án đúng",
        "options": [
            "Tìm hiểu nguyên nhân, xác định thiết bị hư, lập báo cáo để mua thay thế",
            "Chuyển sang điều khiển Local",
            "Thông báo cho KSVKL chuyển đầu hạ cánh",
            "Chuyển mạch đèn PAPI sang điều dòng khác để khai thác tạm thời"
        ],
        "answer": 3
    },
    {
        "id": 76,
        "question": "Đối với hệ thống đèn CAT I, II, III, hệ thống đèn chớp tiếp cận (Sequenced Flashing Lighting - SFL) theo tiêu chuẩn TCCS 04 /CHK 2009 có quy định bắt buộc không",
        "options": [
            "Có bắt buộc",
            "Được tùy chọn",
            "Không bắt buộc"
        ],
        "answer": 1
    },
    {
        "id": 77,
        "question": "Đèn chớp tiếp cận (Sequenced Flashing Lighting) theo tiêu chuẩn ICAO có chu kỳ chớp như thế nào",
        "options": [
            "Chu kỳ chớp từ 01Hz hoặc 2Hz",
            "Chu kỳ chớp từ 01Hz đến 1,5Hz",
            "Chu kỳ chớp từ 01Hz đến 2,5Hz"
        ],
        "answer": 0
    },
    {
        "id": 78,
        "question": "Công tắc điện tại mỗi tủ đèn chớp có tác dụng nào",
        "options": [
            "Nhằm ngắt điện cung cấp cho đèn chớp khi có sửa chữa",
            "Bảo đảm an toàn cho nhân viên khi có sửa chữa",
            "Ngắt nguồn tích điện cho các tụ điện cấp năng lượng cho bóng chớp chứa khí Xenon",
            "Tất cả điều trên"
        ],
        "answer": 3
    },
    {
        "id": 79,
        "question": "Đèn chớp xác định thềm (RTILS) theo tiêu chuẩn ICAO, lắp đặt cách vạch lề đường CHC là bao nhiêu",
        "options": [
            "Không quá 10m",
            "5 - 8m",
            "15 - 20m"
        ],
        "answer": 0
    },
    {
        "id": 80,
        "question": "Góc ngẩng đèn chớp xác định thềm là bao nhiêu",
        "options": [
            "10 độ",
            "9 độ",
            "8 độ"
        ],
        "answer": 0
    },
    {
        "id": 81,
        "question": "Đối với hệ thống đèn chớp thềm (RTILS), khi một bóng chớp không sáng, bóng chớp còn lại chớp như thế nào",
        "options": [
            "Chớp nhanh hơn",
            "Chớp chậm hơn",
            "Sẽ tự động tắt"
        ],
        "answer": 2
    },
    {
        "id": 82,
        "question": "Đèn chớp có",
        "options": [
            "4 nấc sáng",
            "3 nấc sáng",
            "2 nấc sáng",
            "1 nấc sáng"
        ],
        "answer": 1
    },
    {
        "id": 83,
        "question": "Theo tiêu chuẩn TCCS 04: CHK/ 2009 về điện của của hệ thống đèn phù trợ được thay đổi dòng 03 mức 6,6A quy định như thế nào",
        "options": [
            "Mức 1 là 4,8A, mức 2 là 5,5A, mức 3 là 6,6A",
            "Mức 1 là 4,2A, mức 2 là 5,5A, mức 3 là 6,6A",
            "Mức 1 là 4,1A, mức 2 là 5,2A, mức 3 là 6,6A"
        ],
        "answer": 0
    },
    {
        "id": 84,
        "question": "Theo tiêu chuẩn TCCS 04: CHK/ 2009 về điện của của hệ thống đèn phù trợ được thay đổi dòng 05 mức 6,6A quy định như thế nào",
        "options": [
            "Mức 1 là 2,8A, mức 2 là 3,4A, mức 3 là 4,1A, mức 4 là 5,2A, mức 5 là 6,6A",
            "Mức 1 là 1,8A, mức 2 là 3,4A, mức 3 là 4,1A, mức 4 là 5,2A, mức 5 là 6,6A",
            "Mức 1 là 2,0A, mức 2 là 3,4A, mức 3 là 4,1A, mức 4 là 5,2A, mức 5 là 6,6A"
        ],
        "answer": 0
    },
    {
        "id": 85,
        "question": "Theo tiêu chuẩn TCCS 04: CHK/ 2009, dòng điện đầu ra các máy điều dòng là bao nhiêu",
        "options": [
            "6,6A hoặc 20A",
            "5A hoặc 10A",
            "10 hoặc 20A"
        ],
        "answer": 0
    },
    {
        "id": 86,
        "question": "Theo tiêu chuẩn TCCS 04: CHK/ 2009, máy điều dòng cần phải có các chức năng giám sát tối thiểu nào",
        "options": [
            "Dòng điện ra",
            "Lỗi chạm đất",
            "Điện áp ra",
            "Tất cả các ý trên"
        ],
        "answer": 3
    },
    {
        "id": 87,
        "question": "Cơ sở để chọn công suất máy điều dòng (CCR) là gì",
        "options": [
            "Chiều dài đường dây cáp sơ cấp điện của mạch",
            "Số lượng bóng đèn và công suất đèn",
            "Cả hai cơ sở trên"
        ],
        "answer": 2
    },
    {
        "id": 88,
        "question": "Chọn câu trả lời đúng nhất. Có thể thay đổi công suất ra của điều dòng được không",
        "options": [
            "Không thay đổi được do tải là cố định",
            "Có thể thay đổi được tùy thuộc vào tải",
            "Có thể thay đổi được nhưng tùy thuộc vào chiều dài cáp đèn",
            "Tất cả câu trả lời trên đều sai"
        ],
        "answer": 1
    },
    {
        "id": 89,
        "question": "Câu nào sau đây sai",
        "options": [
            "Điều dòng có chức năng bảo vệ ngắn mạch",
            "Điều dòng có chức năng bảo vệ hở mạch",
            "Điều dòng có chức năng bảo vệ quá dòng",
            "Điều dòng có chức năng bảo vệ lỗi đất"
        ],
        "answer": 0
    },
    {
        "id": 90,
        "question": "Ở cùng một nấc sáng, khi tải tăng, điện áp ra của điều dòng như thế nào",
        "options": [
            "Giảm đi",
            "Tăng theo",
            "Không đổi",
            "Không xác định được"
        ],
        "answer": 1
    },
    {
        "id": 91,
        "question": "Cọc tải đầu ra (Tap) của các điều dòng nhằm mục đích gì",
        "options": [
            "Điều chỉnh phù hợp với tải thực tế và tránh tổn hao",
            "Thay đổi dòng điện ra",
            "Tăng , giảm tổn hao"
        ],
        "answer": 0
    },
    {
        "id": 92,
        "question": "Đối với máy điều dòng, khi đầy tải số lượng bóng đèn cháy (không sáng) cho phép tối đa là bao nhiêu",
        "options": [
            "20%",
            "30%",
            "25%"
        ],
        "answer": 1
    },
    {
        "id": 93,
        "question": "Trong một mạch đèn tín hiệu số lượng đèn cháy ≥ 30% thì mạch đèn hoạt động như thế nào",
        "options": [
            "Bình thường",
            "Trở kháng mạch giảm, số đèn còn lại sáng hơn bình thường",
            "Trở kháng mạch tăng, số đèn còn lại sáng yếu hơn bình thường",
            "Trở kháng tăng cao, có thể dẫn đến tác động mạch bảo vệ điều dòng cắt hoặc hoạt động ở mức dòng không ổn định"
        ],
        "answer": 3
    },
    {
        "id": 94,
        "question": "Để đo điện trở cách điện của mạch cáp sơ cấp nối tiếp đèn tín hiệu, nhân viên bảo trì cần tiến hành công việc gì trong quá trình tiến hành đo",
        "options": [
            "Cắt nguồn cung cấp cho máy điều dòng",
            "Xả tích điện lõi dây của cáp",
            "Tháo 02 đầu cáp ra khỏi cọc đấu",
            "Tất cả các công việc trên"
        ],
        "answer": 3
    },
    {
        "id": 95,
        "question": "Nếu mạch cáp đèn bị chạm đất nhiều điểm sẽ xảy ra hiện tượng gì",
        "options": [
            "Điều dòng sẽ tắt do bị chạm đất",
            "Dòng ra hoạt động bình thường",
            "Điều dòng sẽ bị làm việc quá tải và dòng ra không ổn định có thể gây ra cháy cáp đèn nếu không khắc phục kịp thời"
        ],
        "answer": 2
    },
    {
        "id": 96,
        "question": "Khi tín hiệu điều khiển xa báo lỗi điều dòng general error thì khả năng nào xảy ra",
        "options": [
            "Mạch đèn bị hở",
            "Quá dòng",
            "Điều dòng bị mất nguồn",
            "Tất cả các trường hợp trên"
        ],
        "answer": 3
    },
    {
        "id": 97,
        "question": "Khi đấu nối máy điều dòng vào nguồn điện ta phải chú ý điều gì",
        "options": [
            "Mức điện áp phù hợp",
            "Kích cỡ cáp cấp nguồn, cầu chì phù hợp với công suất",
            "Cân bằng 3 pha khi lắp các tải",
            "Tất cả các chú ý trên"
        ],
        "answer": 3
    },
    {
        "id": 98,
        "question": "Chức năng nào sau đây điều dòng không có",
        "options": [
            "Giám sát lỗi đèn",
            "Hiển thị giá trị lỗi đất",
            "Theo dõi số giờ hoạt động",
            "Đo điện trở dây mạch vòng"
        ],
        "answer": 3
    },
    {
        "id": 99,
        "question": "Hãy chọn câu trả lời đúng nhất: Đối với máy điều dòng, ở cùng một nấc sáng điện áp ra khi có tải và khi không tải là",
        "options": [
            "Khác nhau",
            "Bằng nhau",
            "Điện áp ra khi có tải lớn hơn lúc không tải",
            "Điện áp ra khi có tải nhỏ hơn lúc không tải"
        ],
        "answer": 2
    },
    {
        "id": 100,
        "question": "Đối với một mạch đèn cố định, điện áp trên hai cực đầu ra điều dòng phụ thuộc vào những yếu tố nào",
        "options": [
            "Số lượng và độ dài của cáp",
            "Cường độ sáng của mạch đèn",
            "Các vị trí đấu nối cáp sơ cấp",
            "Tất cả các yếu tố trên"
        ],
        "answer": 1
    },
    {
        "id": 101,
        "question": "Ở điều kiện bình thường, đối với một mạch đèn thì dòng điện qua các bóng đèn là",
        "options": [
            "Bằng nhau",
            "Khác nhau",
            "Một số đèn khác nhau, một số đèn giống nhau",
            "Đèn ở gần máy điều dòng có dòng chạy qua lớn hơn"
        ],
        "answer": 0
    },
    {
        "id": 102,
        "question": "Khi xử lý (điều chỉnh) TAP cọc tải đầu ra của CCR ta phải để máy điều dòng ở trạng thái",
        "options": [
            "Có mức sáng nhỏ nhất",
            "Có mức sáng cao nhất",
            "Ngắn mạch",
            "Hở mạch"
        ],
        "answer": 1
    },
    {
        "id": 103,
        "question": "Đèn xoay (đèn Beacon) ánh sáng có mấy màu sắc",
        "options": [
            "Hai màu: xanh và trắng",
            "Hai màu: xanh và vàng",
            "Chỉ có một màu trắng",
            "Chỉ có một màu vàng"
        ],
        "answer": 0
    },
    {
        "id": 104,
        "question": "Đèn xoay (đèn Beacon) quay bao nhiêu vòng trong một phút",
        "options": [
            "12 vòng",
            "24 vòng",
            "36 vòng",
            "20 vòng"
        ],
        "answer": 0
    },
    {
        "id": 105,
        "question": "Thùng đèn dùng để",
        "options": [
            "Lắp đèn chìm",
            "Lắp đèn nổi",
            "Chứa biến áp cách ly",
            "Bao gồm các câu trên"
        ],
        "answer": 3
    },
    {
        "id": 106,
        "question": "Đối với hệ thống điều khiển tắt mở đèn có thể dùng phương pháp tắt mở thông qua cáp đèn 5kV được không",
        "options": [
            "Không được, phương án điều khiển phải thông qua dây điều khiển",
            "Do tín hiệu truyền cùng với điện áp 5kV nên rất nguy hiểm nên không thể điều khiển được",
            "Không được do công nghệ hiện nay chưa làm được",
            "Có thể tắt mở được chỉ cần lắp đặt thiết bị phù hợp"
        ],
        "answer": 3
    },
    {
        "id": 107,
        "question": "Khi nhân viên kíp trực trên đài KSKL huấn lệnh cho phi công tại điểm dừng chờ lên đường CHC thì các hệ thống đèn tại vị trí đó hoạt động như thế nào",
        "options": [
            "Khi đèn Stopbar tắt, hệ thống đèn lead-on sáng",
            "Khi đèn Stopbar sáng, hệ thống đèn lead-on tắt",
            "Khi đèn Stopbar tắt, hệ thống đèn lead-on cũng tắt",
            "Ý a và b đúng, c sai"
        ],
        "answer": 3
    },
    {
        "id": 108,
        "question": "Khi dùng điều khiển xa, ta có thể mở cùng một lúc các mạch đèn: tiếp cận, thềm, PAPI ở hai đầu trên cùng một đường CHC được không",
        "options": [
            "Không",
            "Có thể được vì ta có thể chọn hạ cánh ở hai đầu đường CHC cùng một lúc",
            "Chỉ mở được đèn tiếp cận hai đầu cùng một lúc",
            "Chỉ mở được đèn thềm hai đầu cùng một lúc"
        ],
        "answer": 0
    },
    {
        "id": 109,
        "question": "Theo tiêu chuẩn ICAO, dòng tổn thất cho phép của 1000m cáp sơ cấp đèn tín hiệu 5000V bao nhiêu",
        "options": [
            "≤ 20 microAmpere",
            "≤ 15 microAmpere",
            "≤ 10 microAmpere"
        ],
        "answer": 2
    },
    {
        "id": 110,
        "question": "Thiết bị nào có thể thay thế film dist cut out",
        "options": [
            "Antifuse",
            "Biến áp",
            "Biến áp cách ly",
            "Cả a và b đều đúng"
        ],
        "answer": 2
    },
    {
        "id": 111,
        "question": "Một mạch đèn có một số đèn nối tiếp nhau không sáng, các đèn còn lại sáng bình thường, theo bạn nguyên nhân do đâu",
        "options": [
            "Do bị chạm đất một điểm",
            "Do bị chạm đất 2 điểm",
            "Bị đứt cáp sơ cấp",
            "Mất tín hiệu điều khiển CCR"
        ],
        "answer": 1
    },
    {
        "id": 112,
        "question": "Khi biến áp cách ly bị hở mạch (bóng đèn bị hỏng), biện pháp nào sau đây đúng",
        "options": [
            "Không cần làm gì, do khi hở mạch không ảnh hưởng đến chất lượng biến áp",
            "Phải làm biện pháp ngắn mạch hai đầu ra biến áp, do khi hở mạch sẽ xung điện áp cao giữa cuộn sơ cấp và thứ cấp lâu ngày sẽ làm giảm độ cách điện",
            "Cần có biện pháp chống rung, do khi hở mạch biến áp sẽ kêu và rung mạnh lâu ngày sẽ bị hỏng",
            "Phải tháo biến áp ra khỏi mạch đèn khi nào có đèn thay sẽ lắp lại"
        ],
        "answer": 1
    },
    {
        "id": 113,
        "question": "Khi làm việc ở gần thiết bị có điện cao thế phải thực hiện qui định nào",
        "options": [
            "Không làm việc một mình",
            "Chỉ làm việc một mình",
            "Phải có ít nhất 3 người cùng làm việc",
            "Không theo qui định nào"
        ],
        "answer": 2
    },
    {
        "id": 114,
        "question": "Qui định thời gian kiểm tra, thử cách diện của găng tay cao su và ủng cách điện",
        "options": [
            "Trước khi sử dụng lần đầu, rồi có thể dùng cho đến khi hỏng",
            "Trước mỗi lần sử dụng",
            "6 tháng thử một lần",
            "Mỗi tháng thử 1 lần"
        ],
        "answer": 2
    },
    {
        "id": 115,
        "question": "Khi cắt cầu dao chính để sửa chữa, ta cần phải làm gì",
        "options": [
            "Mang găng tay cách điện",
            "Treo biển báo “Cấm đóng điện, có người làm việc” tại cầu dao",
            "Đứng trên sàn cách điện để sửa chữa",
            "Tất cả các trường hợp trên"
        ],
        "answer": 3
    },
    {
        "id": 116,
        "question": "Đo điện trở cách điện (Rcđ) trên 1 tuyến cáp trung thế hoặc cáp đèn cần thiết phải thực hiện các biện pháp an toàn nào",
        "options": [
            "Cắt điện trước khi tiến hành đo đạc",
            "Cắt điện, tách cáp ra khỏi thiết bị rồi tiến hành đo đạc",
            "Cắt điện, nối đất đầu cáp, tách cáp ra khỏi thiết bị rồi tiến hành đo đạc",
            "Không có biện pháp nào đúng"
        ],
        "answer": 2
    },
    {
        "id": 117,
        "question": "Khoảng cách an toàn phụ thuộc vào",
        "options": [
            "Điện áp",
            "Cách điện của mạng điện",
            "Sức khỏe con người",
            "Độ ẩm không khí"
        ],
        "answer": 0
    },
    {
        "id": 118,
        "question": "Điện áp bước không phụ thuộc vào yếu tố nào",
        "options": [
            "Khoảng cách bước chân người",
            "Dòng điện chạy trong đất",
            "Khoảng cách từ chân người đến điểm chạm đất",
            "Tiết diện dây dẫn"
        ],
        "answer": 3
    },
    {
        "id": 119,
        "question": "Khi có hiện tượng chạm đất, người gặp nguy hiểm khi",
        "options": [
            "Khoảng cách so điểm chạm đất ngoài 20m",
            "Đứng rất gần điểm chạm đất",
            "Đứng cách điểm chạm đất và trên thảm cách điện",
            "Đứng trên vòng tròn đẳng thế"
        ],
        "answer": 1
    },
    {
        "id": 120,
        "question": "Điện áp bước bằng 0 khi người",
        "options": [
            "Đứng trên ghế cách điện",
            "Đứng trên một vòng tròn đẳng thế",
            "Đứng trên sàn kim loại được nối với thiết bị",
            "Tất cả đều sai"
        ],
        "answer": 1
    },
    {
        "id": 121,
        "question": "Điện trở của hệ thống nối đất phụ thuộc vào",
        "options": [
            "Chiều dài cọc nối đất",
            "Khoảng cách giữa các cọc",
            "Điện trở suất của đất",
            "Tất cả đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 122,
        "question": "Chọn câu trả lời đúng",
        "options": [
            "RCCB là khí cụ dòng dư có khả năng bảo vệ quá tải",
            "RCCB là khí cụ dòng dư có khả năng bảo vệ ngắn mạch",
            "RCCB là khí cụ dòng dư có khả năng bảo vệ quá tải và ngắn mạch",
            "RCCB là khí cụ chỉ có khả năng bảo vệ chống dòng rò"
        ],
        "answer": 3
    },
    {
        "id": 123,
        "question": "Chọn câu trả lời sai",
        "options": [
            "Hệ thống nối đất TT có điểm trung tính cách ly với đất",
            "Hệ thống nối đất IT có điểm trung tính cách đất",
            "Dây PEN vừa là dây bảo vệ vừa là dây trung tính trong hệ thống nối đất TN-C",
            "Dây trung tính và dây PE là 2 dây riêng biệt trong hệ thống nối đất TN-S"
        ],
        "answer": 0
    },
    {
        "id": 124,
        "question": "Để bảo đảm an toàn cho người khai thác và thiết bị nhất thiết phải thực hiện qui định an toàn nào",
        "options": [
            "Qui định về phòng cháy và chữa cháy",
            "Qui định an toàn kỹ thuật theo qui trình của nhà chế tạo thiết bị và của đơn vị",
            "Qui định an toàn về thiết bị điện theo tiêu chuẩn Việt Nam",
            "Cả ba qui định trên"
        ],
        "answer": 3
    },
    {
        "id": 125,
        "question": "Nguyên nhân chính thuộc về bản chất gây ra nguy hiểm cho người khi tiếp xúc với điện là gì",
        "options": [
            "Điện áp",
            "Điện trở của người",
            "Trị số dòng điện và đường đi của dòng điện qua cơ thể người",
            "Vị trí tiếp xúc điện"
        ],
        "answer": 2
    },
    {
        "id": 126,
        "question": "Với dòng điện xoay chiều tần số 50Hz thì giới hạn trị số dòng điện an toàn đối với người là",
        "options": [
            "5mA",
            "<10mA",
            "<50mA",
            "<1A"
        ],
        "answer": 1
    },
    {
        "id": 127,
        "question": "Trong cùng một giá trị điện áp, tần số dòng điện nào sau đây gây nguy hiểm nhất cho con người",
        "options": [
            "50Hz",
            "400Hz",
            "100000Hz",
            "1000Hz"
        ],
        "answer": 0
    },
    {
        "id": 128,
        "question": "Khi thấy người bị điện giật, phải làm gì trước tiên",
        "options": [
            "Lấy túi thuốc cứu thương, gọi xe cấp cứu",
            "Tìm người quản lý và yêu cầu người đến cứu",
            "Cắt mạch điện",
            "Lấy dụng cụ sào kéo người ra khỏi nơi có điện"
        ],
        "answer": 2
    },
    {
        "id": 129,
        "question": "Để đảm bảo an toàn cho người và thiết bị khi tiến hành bảo dưỡng và sửa chữa thiết bị cần thực hiện các qui định nào",
        "options": [
            "Thông báo cho mọi người biết",
            "Cắt nguồn điện, treo bảng cấm đóng điện",
            "Cả a & b đúng",
            "Cả a & b đều sai"
        ],
        "answer": 1
    },
    {
        "id": 130,
        "question": "Tác dụng của biển báo an toàn về điện",
        "options": [
            "Báo cho mọi người biết là đã đến gần nơi có điện gây nguy hiểm cho người",
            "Báo cho mọi người không được đóng điện hoặc cắt điện khi chưa có lệnh của người có trách nhiệm",
            "Cả a & b đúng",
            "Cả a & b sai"
        ],
        "answer": 0
    },
    {
        "id": 131,
        "question": "Hệ thống điện sân bay được đề cập trong tài liệu",
        "options": [
            "Doc 9157 Part 5",
            "Doc 9137 Part 9",
            "Doc 9157 Part 4",
            "Doc 9157 Part 6"
        ],
        "answer": 0
    },
    {
        "id": 132,
        "question": "Thời gian cho phép chuyển đổi nguồn của hệ thống Stop bar tiêu chuẩn ICAO CAT II, III là",
        "options": [
            "15 giây",
            "3 giây",
            "1 giây"
        ],
        "answer": 2
    },
    {
        "id": 133,
        "question": "Theo tiêu chuẩn ICAO CAT II, thời gian chuyển đổi nguồn cho các mạch đèn lề đường lăn chính và đèn báo chướng ngại vật là bao nhiêu",
        "options": [
            "15 giây",
            "3 giây",
            "1 giây"
        ],
        "answer": 0
    },
    {
        "id": 134,
        "question": "Theo tiêu chuẩn ICAO CAT II, thời gian chuyển đổi nguồn 1 giây cho các mạch đèn đường CHC dùng để tàu bay cất cánh trong điều kiện tầm nhìn nhỏ hơn 800m là những mạch đèn nào",
        "options": [
            "Hệ thống đèn lề CHC, Đèn tim và đèn cuối đường CHC",
            "Toàn bộ đèn Stopbar",
            "Đèn tim và đèn cuối đường CHC",
            "Cả a, b, c"
        ],
        "answer": 3
    },
    {
        "id": 135,
        "question": "Tác dụng của hệ thống cung cấp nguồn điện kiểu mạch vòng trong các sân bay là gì",
        "options": [
            "Tăng độ tinh cậy của hệ thống cấp điện cho phụ tải",
            "Chống sụt áp",
            "Tăng công suất cung cấp nguồn cho phụ tải",
            "Vận hành dễ dàng"
        ],
        "answer": 0
    },
    {
        "id": 136,
        "question": "Chức năng của dao cách ly",
        "options": [
            "Đóng cắt có tải",
            "Đóng cắt không tải",
            "Cách ly",
            "Câu b & c đúng"
        ],
        "answer": 3
    },
    {
        "id": 137,
        "question": "Chức năng chính của máy biến dòng điện TI là",
        "options": [
            "Cách ly sơ cấp và thứ cấp",
            "Biến đổi dòng điện sơ cấp thành dòng điện có giá trị chuẩn (5 A; 1A)",
            "Bảo vệ chống ngắn mạch",
            "Bảo vệ chống quá tải"
        ],
        "answer": 1
    },
    {
        "id": 138,
        "question": "Cầu dao phụ tải (LBS) là thiết bị dùng để",
        "options": [
            "Đóng, cắt không tải",
            "Đóng, cắt có tải",
            "Đóng cắt dòng sự cố",
            "Thiết bị bảo vệ quá áp"
        ],
        "answer": 1
    },
    {
        "id": 139,
        "question": "Chức năng chính của máy biến điện áp TU là",
        "options": [
            "Cách ly sơ cấp và thứ cấp",
            "Biến đổi điện áp sơ cấp thành điện áp có giá trị chuẩn (120V ; 70V)",
            "Bảo vệ chống ngắn mạch",
            "Bảo vệ chống quá tải"
        ],
        "answer": 1
    },
    {
        "id": 140,
        "question": "Chức năng cơ bản của cầu chì trong mạch điện là",
        "options": [
            "Bảo vệ quá áp",
            "Bảo vệ quá tải & ngắn mạch",
            "Bảo vệ điện áp không",
            "Tất cả đều sai"
        ],
        "answer": 1
    },
    {
        "id": 141,
        "question": "Điều nào không đúng với chức năng thông thường của CB hạ áp",
        "options": [
            "Điều khiển, đo lường từ xa",
            "Cách ly",
            "Đóng cắt",
            "Bảo vệ"
        ],
        "answer": 0
    },
    {
        "id": 142,
        "question": "Chức năng nào không đúng khi dùng FCO – Fuse cut out",
        "options": [
            "Đóng, cắt mạch điện có tải",
            "Đóng, cắt mạch điện không tải",
            "Bảo vệ quá tải",
            "Bảo vệ ngắn mạch"
        ],
        "answer": 0
    },
    {
        "id": 143,
        "question": "Chức năng chính của máy cắt là",
        "options": [
            "Đóng, cắt không tải",
            "Đóng, cắt có tải hoặc sự cố",
            "Cách ly",
            "Câu b & c đúng"
        ],
        "answer": 1
    },
    {
        "id": 144,
        "question": "Chức năng nào của LBFCO – Load break Fuse cut out khác với FCO",
        "options": [
            "Đóng, cắt mạch điện có tải",
            "Đóng, cắt mạch điện không tải",
            "Bảo vệ quá tải",
            "Bảo vệ ngắn mạch"
        ],
        "answer": 0
    },
    {
        "id": 145,
        "question": "Chống sét van trung thế là thiết bị dùng để",
        "options": [
            "Bảo vệ quá tải",
            "Bảo vệ ngắn mạch",
            "Bảo vệ xung quá áp lan truyền trên đường dây",
            "Bảo vệ sai tần số"
        ],
        "answer": 2
    },
    {
        "id": 146,
        "question": "Chức năng của máy biến áp",
        "options": [
            "Biến đổi dòng điện 1 chiều thành xoay chiều điện áp không đổi",
            "Biến đổi dòng điện xoay chiều từ điện áp này sang điện áp khác có tần số không đổi",
            "Biến đổi dòng điện xoay chiều từ điện áp này sang điện áp khác có tần số thay đổi",
            "Biến đổi dòng điện để truyền tải đi xa hơn mà không làm thay đổi điện áp"
        ],
        "answer": 1
    },
    {
        "id": 147,
        "question": "Một máy biến áp 3 pha 22/0,4kV có ký hiệu trên Name plate như sau: Dyn -11. Giải thích nào đúng",
        "options": [
            "Cuộn trung thế nối tam giác, cuộn hạ thế nối sao và trung tính có nối đất",
            "Cuộn trung thế nối tam giác, cuộn hạ thế nối sao và không nối đất",
            "Cuộn trung thế nối tam giác, cuộn hạ thế nối sao và trung tính có nối đất, điện áp thứ cấp lệch pha 30° so với sơ cấp",
            "Cuộn trung thế nối tam giác, cuộn hạ thế nối sao và có nối đất điện áp thứ cấp lệch pha 11° so với sơ cấp"
        ],
        "answer": 2
    },
    {
        "id": 148,
        "question": "Tác dụng chính của khí SF6 dùng trong máy cắt trung thế",
        "options": [
            "Ngăn tiếp điểm máy cắt tiếp xúc với không khí làm ô-xi hóa",
            "Ngăn ngừa khả năng gây ngắn mạch của đầu cực",
            "Làm tăng số lần đóng cắt cơ khí của máy cắt",
            "Ngăn ngừa và dập hồ quang sản sinh khi đóng cắt có dòng điện"
        ],
        "answer": 3
    },
    {
        "id": 149,
        "question": "Các ATS đều có bộ phận khóa liên động nhằm để",
        "options": [
            "Có thể vận hành bằng tay khi hệ thống tự động bị hỏng",
            "Để ngăn ngừa tác động khi máy phát hoạt động có điện áp",
            "Để ngăn tác động nhầm khiến 2 nguồn đóng cùng 1 lúc",
            "Để hạn chế đóng điện máy phát"
        ],
        "answer": 2
    },
    {
        "id": 150,
        "question": "Một MCCB có dòng cắt Ics = 50kA, nếu có ngắn mạch xảy ra có dòng bằng 50kA",
        "options": [
            "MCCB có thể cắt được dòng ngắn mạch đó và vẫn hoạt động lại bình thường",
            "Không cắt được do dòng ngắn mạch tới ngưỡng chịu được của tiếp điểm",
            "Cắt được dòng ngắn mạch nhưng không sử dụng lại MCCB được nữa do hư hỏng tiếp điểm",
            "Các câu trên đều sai"
        ],
        "answer": 0
    },
    {
        "id": 151,
        "question": "Trường hợp mất điện thương mại, máy phát điện tự động khởi động nhưng không tự động chuyển đổi ATS cung cấp điện cho phụ tải. Là nhân viên vận hành, bạn sẽ xử lý như thế nào",
        "options": [
            "Tắt máy, tìm nguyên nhân sửa chữa",
            "Chuyển đổi ATS bằng tay",
            "Kiểm tra điện áp ra của máy phát điện",
            "Báo cáo cấp trên, chờ xử lý"
        ],
        "answer": 1
    },
    {
        "id": 152,
        "question": "Đối với máy phát điện để điều chỉnh điện áp ra người ta thường dùng phương pháp nào",
        "options": [
            "Điều chỉnh tải tiêu thụ",
            "Thay đổi tần số quay",
            "Thay đổi số đôi cực",
            "Điều chỉnh dòng kích từ"
        ],
        "answer": 3
    },
    {
        "id": 153,
        "question": "Máy phát điện xoay chiều 3 pha lấy điện từ đâu để phát ra tải",
        "options": [
            "Từ cuộn dây rôto",
            "Từ cuộn dây Stator",
            "Từ chổi than",
            "Từ mạch AVR"
        ],
        "answer": 1
    },
    {
        "id": 154,
        "question": "Để điều chỉnh tần số của máy phát điện cần điều chỉnh thông số nào",
        "options": [
            "Điều chỉnh điện áp ra",
            "Dòng điện kích từ",
            "Tốc độ quay của động cơ kéo",
            "Điều chỉnh dòng ra"
        ],
        "answer": 2
    },
    {
        "id": 155,
        "question": "Phương pháp điều chỉnh tần số và điện áp của máy phát điện",
        "options": [
            "Điều chỉnh dòng điện kích từ trước sau đó điều chỉnh tốc độ động cơ kéo",
            "Điều chỉnh tốc độ động cơ kéo trước điều chỉnh dòng điện kích từ sau",
            "Điều chỉnh đồng thời cả hai",
            "Chỉ điều chỉnh dòng kích từ"
        ],
        "answer": 1
    },
    {
        "id": 156,
        "question": "Khi vận hành hệ thống ATS ở chế độ bằng tay do hư bộ điều khiển ATS, người vận hành phải chuyển chế độ “bằng tay” ở",
        "options": [
            "Chỉ cần chuyển chế độ bằng tay ở tủ ATS các thiết bị còn tại tự động chuyển",
            "Chuyển chế độ bằng tay ở tủ ATS, máy phát và bộ phận đóng cắt",
            "Vận hành linh hoạt tự động và tay ở mỗi thiết bị",
            "Hệ thống tự chuyển nguồn khi có điện lưới hoặc có điện áp máy phát"
        ],
        "answer": 1
    },
    {
        "id": 157,
        "question": "Khi mất điện lưới nhưng hệ thống ATS không khởi động máy phát, không tác động với các bộ phận chuyển đổi thì khả năng hư hỏng lớn nhất ở thiết bị nào",
        "options": [
            "Hỏng các cơ cấu liên động cơ khí và liên động điện",
            "Máy phát điện bị yếu ăc quy",
            "Hỏng thiết bị đóng cắt bên phần máy phát nên bộ điều khiển không thực hiện chu trình",
            "Relay giám sát điện áp bị hỏng nên không báo tín hiệu cho bộ điều khiển"
        ],
        "answer": 3
    },
    {
        "id": 158,
        "question": "Khi đo điện trở cách điện các cuộn dây của máy biến áp có phải tháo tiếp địa dây trung tính hay không",
        "options": [
            "Không cần thiết vì điện trở cách điện của cuộn dây không liên quan điện trở nối đất",
            "Phải tháo vì 3 cuộn dây phía hạ thế nối sao đang nối với đất",
            "Không cần phải tháo vẫn đo được điện trở cách điện của 3 pha cuộn cao thế và 3 pha cuộn hạ thế",
            "Không có câu nào đúng"
        ],
        "answer": 1
    },
    {
        "id": 159,
        "question": "Các lưu ý khi vận hành TI-TU trong hệ thống điện trung thế",
        "options": [
            "Nối đất một đầu thứ cấp",
            "Máy biến điện áp không để ngắn mạch phía thứ cấp khi vận hành",
            "Máy biến dòng điện không để hở mạch phía thứ cấp khi vận hành",
            "Tất cả các ý trên"
        ],
        "answer": 3
    },
    {
        "id": 160,
        "question": "Số lượng mạch đèn của đèn giới hạn cuối đường CHC",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1
    },
    {
        "id": 161,
        "question": "Đèn giới hạn đường CHC được đấu nối với mạch đèn",
        "options": [
            "Tim đường CHC",
            "Thềm đường CHC",
            "Lề đường CHC",
            "Đèn đường lăn gần nhất"
        ],
        "answer": 2
    },
    {
        "id": 162,
        "question": "Đèn tim đường CHC đoạn 300m cuối của đường CHC có màu",
        "options": [
            "Trắng",
            "Đỏ",
            "Xanh",
            "Vàng"
        ],
        "answer": 1
    },
    {
        "id": 163,
        "question": "Muốn đo điện trở trong của một mạch đèn tín hiệu, ta dùng",
        "options": [
            "Đồng hồ Megaohm",
            "Đồng hồ đo tiếp địa",
            "Đồng hồ VOM",
            "Máy đếm tần số"
        ],
        "answer": 2
    },
    {
        "id": 164,
        "question": "Điện trở trong của một mạch đèn tín hiệu gồm có điện trở của",
        "options": [
            "Cáp sơ cấp, Cáp thứ cấp, Cuộn sơ cấp của biến thế cách ly, Cuộn thứ cấp của biến thế cách ly; Đèn",
            "Cáp sơ cấp, Cáp thứ cấp, Cuộn sơ cấp của biến thế cách ly, Cuộn thứ cấp của biến thế cách ly",
            "Cáp thứ cấp, Cuộn thứ cấp của biến thế cách ly; Đèn",
            "Cáp sơ cấp, Cuộn sơ cấp của biến thế cách ly"
        ],
        "answer": 3
    },
    {
        "id": 165,
        "question": "Muốn đo điện trở cách điện của một mạch đèn tín hiệu, ta dùng",
        "options": [
            "Đồng hồ Megaohm",
            "Đồng hồ đo tiếp địa",
            "Đồng hồ VOM",
            "Máy đếm tần số"
        ],
        "answer": 0
    },
    {
        "id": 166,
        "question": "Thay đổi góc mở của Thyristor là thay đổi",
        "options": [
            "Giá trị điện áp và dòng điện đầu ra của máy điều dòng",
            "Giá trị điện áp và dòng điện đầu vào của cuộn dây sơ cấp máy điều dòng",
            "Tăng mức sáng của mạch đèn",
            "Giảm mức sáng của mạch đèn"
        ],
        "answer": 1
    },
    {
        "id": 167,
        "question": "Nguồn cấp cho thiết bị đèn hiệu có sử dụng UPS, theo bạn đối với hệ thống đèn CAT II cần chuyển nguồn cấp từ máy phát trước khi vận hành CAT II không",
        "options": [
            "Vẫn phải cấp nguồn từ máy phát trước do không đảm bảo liên tục nguồn điện trong vòng 1 giây",
            "Không cần cấp điện từ máy phát, sử dụng nguồn điện lưới chạy CAT II, do khi mất nguồn lưới vẫn còn UPS duy trì nguồn điện đảm bảo không bị gián đoạn khi ATS chuyển đổi",
            "Không cần cấp nguồn từ máy phát, trước khi vận hành CAT II phải chuyển nguồn cấp từ UPS",
            "Vẫn phải cấp nguồn từ máy phát đồng thời chuyển bypass UPS sang nguồn lưới để đảm bảo an toàn"
        ],
        "answer": 1
    },
    {
        "id": 168,
        "question": "Tại sao hệ thống điều khiển tại các sân bay ACV sử dụng relay trung gian 24VDC mặc dù có thể xuất tín hiệu trực tiếp từ PLC",
        "options": [
            "Dùng ngõ ra PLC điều khiển có thể làm hỏng PLC do dòng ngõ ra quá nhỏ",
            "Nhằm tăng dòng điều khiển, cách ly tín hiệu giữa PLC và thiết bị được điều khiển, đảm bảo an toàn cho PLC tránh nhiễu tín hiệu hoặc xung sét",
            "Nhằm cách ly tín hiệu giữa PLC và thiết bị được điều khiển, đảm bảo an toàn cho PLC tránh nhiễu hoặc xung sét khi đang khai thác",
            "Nhằm tăng dòng điều khiển, cách ly tín hiệu giữa PLC và thiết bị được điều khiển, đảm bảo an toàn cho thiết bị tránh nhiễu"
        ],
        "answer": 1
    },
    {
        "id": 169,
        "question": "Đối với hệ thống đèn, thiết bị nào làm tăng sóng hài lớn nhất trong quá trình vận hành khai thác",
        "options": [
            "Các máy điều dòng, do sử dụng điều khiển góc kích SCR cho điện áp đầu ra méo dạng ở chế độ không đầy tải",
            "Hệ thống máy tính, do các bộ nguồn máy tính là tải phi tuyến",
            "Các máy lạnh, máy hút độ ẩm do có động cơ quay",
            "Máy biến áp: do biến đổi năng lượng qua gông từ làm biến dạng nguồn điện"
        ],
        "answer": 0
    },
    {
        "id": 170,
        "question": "Biện pháp nào sau đây để giảm bớt sóng hài gây hại đến nguồn điện",
        "options": [
            "Tính toán và lắp đặt tụ bù nhằm nâng cao hiệu suất và giảm sóng hài",
            "Lắp đặt bộ cắt lọc sét do có các linh kiện làm giảm xung áp và xung dòng điện",
            "Lắp đặt thêm biến áp cách ly có công suất phù hợp",
            "Lắp đặt thêm bộ lọc sóng hài"
        ],
        "answer": 3
    },
    {
        "id": 171,
        "question": "Đèn báo đường lăn thoát nhanh (RETIL) cung cấp thông tin gì cho phi công",
        "options": [
            "Cung cấp thông tin về khoảng cách đến đường lăn gần nhất để thoát khỏi đường CHC",
            "Cung cấp thông tin về khoảng cách đến đường lăn gần nhất để lên đường CHC",
            "Cung cấp thông tin giao nhau giữa hai đường CHC",
            "Cung cấp thông tin giao nhau giữa hai đường lăn cần chú ý khi di chuyển"
        ],
        "answer": 0
    },
    {
        "id": 172,
        "question": "Đèn thoát nhanh khỏi đường CHC (RETIL) bao gồm bao nhiêu đèn",
        "options": [
            "4 đèn",
            "8 đèn",
            "12 đèn",
            "6 đèn"
        ],
        "answer": 3
    },
    {
        "id": 173,
        "question": "Khi một bóng đèn không sáng các bóng còn lại của đèn thuộc RETIL sẽ có trạng thái như thế nào",
        "options": [
            "Các bóng còn lại vẫn duy trì độ sáng",
            "Tất cả các đèn còn lại đều tắt",
            "Điều dòng sẽ tăng độ sáng cao nhất cho các đèn còn lại",
            "Các bóng còn lại sẽ sáng nhấp nháy"
        ],
        "answer": 1
    },
    {
        "id": 174,
        "question": "Đèn RETIL gồm bao nhiêu dãy đèn, mỗi dãy liền kề cách nhau bao nhiêu",
        "options": [
            "Gồm 3 dãy đèn, cách nhau 60m",
            "Gồm 2 dãy đèn, cách nhau 100m",
            "Gồm 3 dãy đèn, cách nhau 100m",
            "Gồm 2 dãy đèn, cách nhau 60m"
        ],
        "answer": 2
    },
    {
        "id": 175,
        "question": "Đèn dừng chờ trung gian có tác dụng gì",
        "options": [
            "Cung cấp thông tin cho phi công biết vị trí giao nhau giữa các đường lăn",
            "Cung cấp thông tin cho phi công biết vị trí giao nhau giữa đường CHC và đường lăn",
            "Cung cấp thông tin cho phi công biết vị trí giao nhau giữa hai đường CHC",
            "Cung cấp thông tin cho phi công biết vị trí giao nhau giữa đường lăn và vị trí sân đỗ"
        ],
        "answer": 0
    },
    {
        "id": 176,
        "question": "Đèn dừng chờ trung gian có màu sắc như thế nào",
        "options": [
            "Vàng",
            "Trắng",
            "Xanh",
            "Đỏ"
        ],
        "answer": 0
    },
    {
        "id": 177,
        "question": "Câu phát biểu nào đúng về cột chỉ thị hướng gió",
        "options": [
            "Chỉ dùng nguồn điện 220V để chiếu sáng",
            "Chiều dài ít nhất 3,6m với đường kính phần đuôi không nhỏ hơn 0,9m",
            "Chỉ quay được một vòng tròn 359 độ",
            "Là loại cố định không nâng lên hạ xuống được"
        ],
        "answer": 1
    },
    {
        "id": 178,
        "question": "Trong sân bay thường sử dụng mạch vòng cáp quang cho hệ thống điều khiển nhằm mục đích gì",
        "options": [
            "Đảm bảo truyền dữ liệu an toàn",
            "Khi bị hư hỏng một tuyến cáp quang, dữ liệu vẫn truyền qua các tuyến cáp còn lại",
            "Thuận lợi cho quá trình bảo dưỡng tuyến cáp mà vẫn đảm bảo khai thác",
            "Tất cả các ý trên"
        ],
        "answer": 3
    },
    {
        "id": 179,
        "question": "Đối với hệ thống điều khiển đèn hiệu, thiết bị lập trình PLC sử dụng vận hành dự phòng (redundant) có tác dụng gì",
        "options": [
            "Không làm gián đoạn điều khiển khi máy tính hỏng",
            "Làm hệ thống tăng số lượng phần cứng và không an toàn",
            "Không làm gián đoạn điều khiển, khi một PLC hỏng lập tức hệ thống tự động chuyển qua PLC dự phòng",
            "Các câu trên đều sai"
        ],
        "answer": 2
    },
    {
        "id": 180,
        "question": "Phát biểu nào sau đây đúng về điện áp đầu ra điều dòng",
        "options": [
            "Điện áp giữa hai cực bằng điện áp của một cực so với đất",
            "Điện áp giữa hai cực bằng tổng điện áp của các cực đầu ra với đất",
            "Điện áp giữa hai cực bằng hiệu điện áp của các cực đầu ra với đất",
            "Điện áp giữa hai cực bằng hiệu điện áp của một cực và áp bộ dò lỗi đất"
        ],
        "answer": 1
    },
    {
        "id": 181,
        "question": "Tại sao có thể làm hỏng đồng hồ đo VOM khi đo hở mạch đầu ra biến áp cách ly công suất lớn",
        "options": [
            "Biến áp cách ly công suất lớn khi hở mạch xuất hiện xung điện áp cao trên 1000V",
            "Khi hở mạch sẽ có điện áp giữa các cực và đất làm hỏng đồng hồ",
            "Khi hở mạch dùng VOM đo hai cực sẽ có dòng điện 6.6A qua đồng hồ",
            "Khi hở mạch điều dòng sẽ tăng công suất đầu ra làm hỏng đồng hồ"
        ],
        "answer": 0
    },
    {
        "id": 182,
        "question": "Tại sao khi điều dòng ở chế độ ngắn mạch, dòng ra có thể bị dao động ở mức 6.6A",
        "options": [
            "Ở chế độ ngắn mạch để có dòng 6.6A thì góc kích SCR rất nhỏ, mạch điều khiển khó duy trì ổn định",
            "Do máy điều dòng không vận hành ở chế độ ngắn mạch",
            "Khi ngắn mạch đầu ra làm cho điện áp vào dao động",
            "Do đầu ra không tải nên không có bóng đèn halogen bật sáng"
        ],
        "answer": 0
    },
    {
        "id": 183,
        "question": "Ưu điểm của điều dòng dùng linh kiện bán dẫn cho dòng ra sóng sin so với dùng góc kích SCR là gì",
        "options": [
            "Tối ưu công suất, không cần phải TAP đầu ra",
            "Biến áp cách ly hoạt động bền bỉ, thích hợp cho đèn LED, biển báo",
            "Giảm xung áp cao, tăng tuổi thọ cáp sơ cấp và bóng đèn",
            "Tất cả các ý trên"
        ],
        "answer": 3
    },
    {
        "id": 184,
        "question": "Điều dòng có điện áp cấp vào như thế nào",
        "options": [
            "Nguồn cấp 220vac",
            "Nguồn cấp 380vac",
            "Nguồn cấp 380vac - 3 pha",
            "Tất cả các ý trên"
        ],
        "answer": 3
    },
    {
        "id": 185,
        "question": "Khi sử dụng biến áp 500w cấp nguồn cho bóng đèn 45w sẽ xảy ra hiện tượng gì",
        "options": [
            "Do công suất biến áp quá lớn sẽ làm hỏng bóng đèn",
            "Biến áp sẽ hỏng do công suất ra quá nhỏ so với danh định",
            "Bóng đèn sáng bình thường",
            "Dòng điện qua bóng đèn lớn hơn 6.6A dẫn đến cháy bóng"
        ],
        "answer": 2
    },
    {
        "id": 186,
        "question": "Làm thế nào để tăng công suất ra khi có hai biến áp cách ly",
        "options": [
            "Đấu nối tiếp phía sơ cấp hai biến áp và nối tiếp hai đầu hạ thế ra",
            "Đấu song song phía sơ cấp hai biến áp và nối tiếp hai đầu hạ thế ra",
            "Đấu nối tiếp phía sơ cấp hai biến áp và đấu song song hai đầu hạ thế ra",
            "Đấu song song phía sơ cấp hai biến áp và đấu song song hai đầu hạ thế ra"
        ],
        "answer": 0
    },
    {
        "id": 187,
        "question": "Khi bật dòng ra cho các mạch đèn, hoặc khi tăng giảm độ sáng",
        "options": [
            "Ngay lập tức dòng ra bằng dòng yêu cầu để đảm bảo độ sáng tức thời",
            "Điều dòng điều chỉnh dòng ra tăng dần hoặc giảm dần đến dòng yêu cầu phù hợp với mức sáng",
            "Dòng ra tăng lên 6.6A rồi giảm về dòng yêu cầu",
            "Contactor điều dòng sẽ đóng ngắt liên tục để điều chỉnh về dòng điện yêu cầu"
        ],
        "answer": 1
    },
    {
        "id": 188,
        "question": "Đèn stopbar (đèn vạch dừng) được lắp đặt như thế nào",
        "options": [
            "Các đèn gần kề được lắp đặt cách nhau không quá 3m và đèn ngoài cùng cách lề đường lăn không quá 3m",
            "Các đèn gần kề được lắp đặt cách nhau không quá 3m và đèn ngoài cùng cách lề đường lăn không quá 4.5m",
            "Các đèn gần kề được lắp đặt cách nhau không quá 4.5m và đèn ngoài cùng cách lề đường lăn không quá 3m",
            "Các đèn gần kề được lắp đặt cách nhau không quá 2.5m và đèn ngoài cùng cách lề đường lăn không quá 3m"
        ],
        "answer": 0
    },
    {
        "id": 189,
        "question": "Một bóng đèn được coi là không hiệu quả khi cường độ trung bình của chùm tia chính của đèn đó thấp hơn bao nhiêu so với cường độ trung bình tối thiểu theo quy định",
        "options": [
            "50%",
            "60%",
            "70%",
            "75%"
        ],
        "answer": 0
    },
    {
        "id": 190,
        "question": "Khi điều khiển một mạch đèn mà không có tín hiệu phản hồi về PLC thì màn hình điều khiển xa sẽ hiển thị lỗi gì",
        "options": [
            "General Error",
            "Over Current",
            "Open Circuit",
            "No feedback"
        ],
        "answer": 3
    },
    {
        "id": 191,
        "question": "Khi điều khiển một mạch đèn mà mức sáng yêu cầu sai khác so với mức sáng thực tế của điều dòng thì màn hình điều khiển xa sẽ hiển thị lỗi gì",
        "options": [
            "Link failure",
            "No feedback",
            "Request brightness < > actual brightness",
            "General Error"
        ],
        "answer": 2
    },
    {
        "id": 192,
        "question": "Đối với điều dòng MCR3, không điều chỉnh được về mức tap nào",
        "options": [
            "4/8",
            "5/8",
            "6/8",
            "7/8"
        ],
        "answer": 1
    },
    {
        "id": 193,
        "question": "Tác dụng của lớp bán dẫn trong cáp điện sơ cấp 5kV",
        "options": [
            "Tạo lớp đệm giữa lớp cách điện và lớp dẫn điện bên trong cáp nhằm giảm khả năng ion hóa bề mặt lớp cách điện",
            "Tạo sự cân bằng điện thế dọc theo chiều dài của cáp, tăng tính chịu lực cho cáp",
            "Tăng cường khả năng dẫn điện của lõi cáp",
            "Chống ẩm cho lõi cáp"
        ],
        "answer": 0
    },
    {
        "id": 194,
        "question": "Tác dụng của lớp giáp đồng trong cáp điện sơ cấp 5kV",
        "options": [
            "Tạo lớp đệm giữa lớp cách điện và lớp dẫn điện bên trong cáp nhằm giảm khả năng ion hóa bề mặt lớp cách điện",
            "Tạo sự cân bằng điện thế dọc theo chiều dài của cáp, tăng tính chịu lực cho cáp",
            "Tăng cường khả năng dẫn điện của lõi cáp",
            "Chống ẩm cho lõi cáp"
        ],
        "answer": 1
    },
    {
        "id": 195,
        "question": "Các đèn chớp tuần tự trên dãy tiếp cận được định địa chỉ như thế nào",
        "options": [
            "Đèn xa thềm nhất có địa chỉ là 1 và tăng dần về phía thềm",
            "Đèn gần thềm nhất có địa chỉ là 1 và tăng dần về phía xa thềm",
            "Đèn bên trái thềm có địa chỉ là 1 và tăng dần về phía xa thềm",
            "Đèn bên phải thềm có địa chỉ là 1 và tăng dần về phía xa thềm"
        ],
        "answer": 0
    },
    {
        "id": 196,
        "question": "Tín hiệu điều khiển Multiwire giữa tủ PLC và hệ thống đèn chớp có điện áp bao nhiêu, cấp nguồn từ đâu",
        "options": [
            "48Vdc, cấp nguồn từ tủ PLC",
            "48Vdc, cấp nguồn từ tủ điều khiển đèn chớp",
            "24Vdc, cấp nguồn từ tủ PLC",
            "24Vdc, cấp nguồn từ tủ điều khiển đèn chớp"
        ],
        "answer": 0
    },
    {
        "id": 197,
        "question": "Các đèn tiếp cận trong phạm vi dải hãm phanh, dải quang hay 150m cách thềm được lắp đặt như thế nào",
        "options": [
            "Lắp sát mặt đất",
            "Lắp bằng cao độ thềm",
            "Lắp cao hơn cao độ thềm nhưng có độ dốc nhỏ hơn 1/60",
            "Lắp cao hơn cao độ thềm nhưng có độ dốc nhỏ hơn 1/40"
        ],
        "answer": 0
    },
    {
        "id": 198,
        "question": "Trên đường lăn dùng cho điều kiện tầm nhìn trên đường CHC dưới 350 m",
        "options": [
            "Các đèn tim trên đường cong cách nhau không quá 15 m, trên đường cong bán kính nhỏ hơn 400 m các đèn cách nhau không quá 7,5 m",
            "Các đèn tim trên đường cong cách nhau không quá 7,5 m, trên đường cong bán kính nhỏ hơn 400 m các đèn cách nhau không quá 3m",
            "Các đèn tim trên đường cong cách nhau không quá 30 m, trên đường cong bán kính nhỏ hơn 400 m các đèn cách nhau không quá 15m",
            "Các đèn tim trên đường cong cách nhau không quá 15 m, trên đường cong bán kính nhỏ hơn 400 m các đèn cách nhau không quá 30 m"
        ],
        "answer": 0
    },
    {
        "id": 199,
        "question": "Tổn thất điện áp khi truyền tải điện năng đi xa phụ thuộc vào yếu tố nào",
        "options": [
            "Tiết diện dây dẫn và dòng điện truyền tải",
            "Điện áp truyền tải",
            "Dòng điện phụ tải",
            "Câu a và c đúng"
        ],
        "answer": 0
    },
    {
        "id": 200,
        "question": "Để giảm tổn thất cung cấp điện năng cho các đài, trạm phục vụ bay thì cần phải làm như thế nào",
        "options": [
            "Tăng điện áp trên đường truyền từ hạ thế lên cao thế",
            "Tăng dung lượng tụ bù đầu ra đủ để bù phần sụt áp",
            "Tăng tiết diện dây dẫn"
        ],
        "answer": 0
    },
    {
        "id": 201,
        "question": "Khi điện áp của nguồn cung cấp cho máy điều dòng IDM 8000 cao hơn ngưỡng cài đặt thì màn hình LCD sẽ hiển thị cảnh báo lỗi nào",
        "options": [
            "U1-A hoặc U1-B",
            "U1+A hoặc U1+B",
            "Freq A- hoặc Freq B-",
            "Freq A+ hoặc Freq B+"
        ],
        "answer": 1
    },
    {
        "id": 202,
        "question": "Thiết bị nào sau đây không thực hiện đóng cắt, bảo vệ trong mạng hạ áp (<1000V)",
        "options": [
            "ACB (Air Circuit Breaker)",
            "LBS (Load Break Switch)",
            "MCCB (Moulded Case Circuit Breaker)",
            "MCB (Miniature Circuit Breaker)"
        ],
        "answer": 1
    },
    {
        "id": 203,
        "question": "Máy điều dòng tại các Cảng hàng không Việt Nam đấu nối với hệ thống điều khiển bằng phương thức nào",
        "options": [
            "Đấu nối kiểu J-Bus dựa trên đường truyền RS485",
            "Sử dụng kết nối qua dây đồng nhiều sợi multiwire",
            "Đấu nối điều khiển qua cáp mạng",
            "Cả 03 ý trên đều đúng"
        ],
        "answer": 3
    },
    {
        "id": 204,
        "question": "Điện áp dò lỗi đất 500VDC của máy điều dòng được đo ở các điểm nào",
        "options": [
            "Đo giữa điện áp vào SCR và đất",
            "Đo giữa một cọc ra tải của máy điều dòng và đất",
            "Đo giữa nguồn cấp cho máy điều dòng và đất",
            "Đo giữa hai cọc ra của máy điều dòng"
        ],
        "answer": 1
    },
    {
        "id": 205,
        "question": "Khi cấp nguồn cho máy điều dòng có module dò lỗi đất, điện áp dò lỗi đất 500VDC xuất hiện khi nào",
        "options": [
            "Khi không có dòng ra, điện áp dò lỗi đất bằng 0",
            "Điều dòng cài đặt về chế độ OFF, điện áp dò lỗi đất bằng 0",
            "Chỉ khi nào có dòng ra thì mới có điện áp dò lỗi đất",
            "Khi bật nguồn cung cấp cho điều dòng thì luôn có điện áp dò lỗi đất"
        ],
        "answer": 3
    },
    {
        "id": 206,
        "question": "Biển báo điểm check VOR có kết hợp với DME gồm có các thông số nào",
        "options": [
            "Bao gồm tần số đài VOR, góc phương vị và khoảng cách từ VOR đến DME liên quan",
            "Bao gồm tần số đài VOR, góc phương vị, khoảng cách từ VOR đến DME và tần số liên lạc bộ đàm",
            "Bao gồm góc phương vị, khoảng cách từ VOR đến DME và tần số sóng mang DME"
        ],
        "answer": 0
    },
    {
        "id": 207,
        "question": "Màu sắc thông tin biển báo, đèn hiệu và sơn kẻ tín hiệu hàng không dựa trên tiêu chuẩn nào",
        "options": [
            "CIE năm 1964",
            "CIE năm 1976",
            "CIE năm 1931",
            "Cả 03 ý trên đều đúng"
        ],
        "answer": 2
    },
    {
        "id": 208,
        "question": "Trong máy điều dòng có một cuộn dây (choke) nối với ngõ vào, hãy cho biết tác dụng của thiết bị này",
        "options": [
            "Cuộn dây có tác dụng hạn chế tiếng kêu của máy điều dòng khi vận hành",
            "Làm tăng điện áp vào để cấp công suất đủ cho tải ra",
            "Làm mượt xung dòng ngay khi thyristor đóng ngắt, giảm biến thiên dòng điện để tốt cho hệ thống nguồn",
            "Làm tăng xung dòng ngay khi thyristor đóng ngắt"
        ],
        "answer": 2
    },
    {
        "id": 209,
        "question": "Đối với máy điều dòng sử dụng thyristor, khi biến áp ra tải bị nóng bất thường nguyên nhân chính nào xảy ra",
        "options": [
            "Máy điều dòng bị quá tải",
            "Máy điều dòng bị non tải",
            "Góc kích thyristor trong một chu kỳ cân bằng, gây nóng quá mức",
            "Góc kích thyristor trong một chu kỳ bị bất đối xứng quá mức, sinh ra dòng điện một chiều gây nóng quá mức"
        ],
        "answer": 3
    },
    {
        "id": 210,
        "question": "Theo quy định của ICAO phát biểu nào sau đây sai",
        "options": [
            "Cho phép hai đèn liền kề trong cùng hệ thống bị hỏng",
            "Cho phép hai đèn không liền kề bị hỏng nhưng không quá tỉ lệ cho phép",
            "Cho phép một mạch chẵn lẻ đèn tim đường lăn không sáng",
            "Tất cả các phát biểu trên đều sai"
        ],
        "answer": 0
    }
];