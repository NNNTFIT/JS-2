const A = ["Bún bò", "Cơm tấm", "Gà rán", "Mì cay", "Phở"];
function randomFood() {
  const random = Math.floor(Math.random() * A.length);
  return A[random];
}
function showFood() {
  const food = randomFood();
  document.getElementById("recommend").innerHTML =
    `Hôm nay bạn nên ăn: ${food}`;
}
showFood();
