const foods  = ["Bún bò", "Cơm tấm", "Gà rán", "Mì cay", "Phở", "Bún đậu", "Cơm chiên", "Bánh cuốn", "Bún thịt nướng", "Mì xào", "Cơm sườn", "Cháo lòng", "Bún mắm", "Cơm gà xối mỡ", "Bánh canh"];
function getRandomFood() {
    const random = Math.floor(Math.random() * foods.length);
}
function showFood() {
    let food = getRandomFood(); 
    document.getElementById("recommend").innerHTML = `Hôm nay bạn nên ăn: ${food}`;
}
showFood();