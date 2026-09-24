// Hàm tính điểm trung bình
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}


// Hàm xếp loại học tập
function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}


// Lấy form
const studentForm = document.getElementById("studentForm");


// Xử lý khi bấm nút "Tính kết quả"
studentForm.addEventListener("submit", function(event) {

    // Không cho trang reload
    event.preventDefault();

    // Xóa thông báo lỗi cũ
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    // Lấy tên sinh viên
    const studentName = document.getElementById("studentName").value.trim();

    // Lấy điểm 5 môn
    const calculus = document.getElementById("calculus").value;
    const linearAlgebra = document.getElementById("linearAlgebra").value;
    const statistics = document.getElementById("statistics").value;
    const computerScience = document.getElementById("computerScience").value;
    const webDevelopment = document.getElementById("webDevelopment").value;


    // Kiểm tra tên sinh viên
    if (studentName === "") {
        errorMessage.textContent = "Vui lòng nhập tên sinh viên!";
        return;
    }


    // Kiểm tra không được để trống
    if (
        calculus === "" ||
        linearAlgebra === "" ||
        statistics === "" ||
        computerScience === "" ||
        webDevelopment === ""
    ) {
        errorMessage.textContent = "Vui lòng nhập đầy đủ điểm của 5 môn!";
        return;
    }


    // Chuyển điểm từ chuỗi sang số
    const scores = [
        Number(calculus),
        Number(linearAlgebra),
        Number(statistics),
        Number(computerScience),
        Number(webDevelopment)
    ];


    // Kiểm tra điểm từ 0 đến 10
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 0 || scores[i] > 10 || isNaN(scores[i])) {
            errorMessage.textContent =
                "Điểm phải nằm trong khoảng từ 0 đến 10!";
            return;
        }
    }


    // Tính điểm trung bình
    const avg = calculateAverage(scores);

    // Xếp loại
    const resultClassification = classify(avg);


    // Hiển thị thông tin sinh viên
    document.getElementById("resultName").textContent = studentName;


    // Hiển thị điểm từng môn
    document.getElementById("resultCalculus").textContent =
        scores[0].toFixed(2);

    document.getElementById("resultLinearAlgebra").textContent =
        scores[1].toFixed(2);

    document.getElementById("resultStatistics").textContent =
        scores[2].toFixed(2);

    document.getElementById("resultComputerScience").textContent =
        scores[3].toFixed(2);

    document.getElementById("resultWebDevelopment").textContent =
        scores[4].toFixed(2);


    // Hiển thị điểm trung bình
    document.getElementById("average").textContent =
        avg.toFixed(2);


    // Hiển thị xếp loại
    document.getElementById("classification").textContent =
        resultClassification;


    // Hiển thị khu vực kết quả
    document.getElementById("result").classList.remove("hidden");
});
