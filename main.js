// khai báo danh sách gồm các món ăn gợi ý
const foods  = ["Bún bò", "Cơm tấm", "Gà rán", "Mì cay", "Phở", "Bún đậu", "Cơm chiên", "Bánh cuốn", "Bún thịt nướng", "Mì xào", "Cơm sườn", "Cháo lòng", "Bún mắm", "Cơm gà xối mỡ", "Bánh canh"];

//hàm random các món ăn có trong danh sách
function getRandomFood() {
    const random = Math.floor(Math.random() * foods.length); //lấy ngẫu nhiên 1 số trong phạm vi chiều dài của danh sách
    return foods[random]; //trả về 1 món ăn ngẫu nhiên trong danh sách
}

//hàm in ra món ăn random
function showFood() {
    let food = getRandomFood(); // lấy 1 món ăn ngẫu nhiên có trong danh sách
    document.getElementById("recommend").innerHTML = `Hôm nay bạn nên ăn: ${food}`; //in món ăn đó ra
}
showFood(); //in ra món ăn gợi ý sau khi vào trang web