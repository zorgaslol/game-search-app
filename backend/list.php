<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=utf-8");

$host = "localhost";
$user = "root";
$pass = "";
$db   = "game_search";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  echo json_encode(["error" => "DB connection failed"]);
  exit;
}

$baseImageUrl = "http://localhost/game-api/images/";

$search = isset($_GET["search"]) ? trim($_GET["search"]) : "";

if ($search !== "") {
  $sql = "SELECT id, title, price, image_file
          FROM games
          WHERE title LIKE ?
          ORDER BY id DESC";
  $stmt = $conn->prepare($sql);
  $like = "%" . $search . "%";
  $stmt->bind_param("s", $like);
  $stmt->execute();
  $result = $stmt->get_result();
} else {
  $sql = "SELECT id, title, price, image_file FROM games ORDER BY id DESC";
  $result = $conn->query($sql);
}

$games = [];
while ($row = $result->fetch_assoc()) {
  $games[] = [
    "id" => (int)$row["id"],
    "title" => $row["title"],
    "price" => (float)$row["price"],
    "image_url" => $baseImageUrl . $row["image_file"]
  ];
}

echo json_encode($games);

$conn->close();
