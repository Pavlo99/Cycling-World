<?php
require_once "functions.php";
require_once "index.php";

if (isset($_POST['button1'])) {
    $name = trim($_POST["name"]);
    $type = strip_tags(trim($_POST['type']));
    $wheels = strip_tags(trim($_POST['wheels']));
    $price = strip_tags(trim($_POST['price']));

    connectDB();
    $mysqli->query("INSERT INTO `goods` (`name`, `type`, `wheels`, `price`) VALUES ('{$name}','{$type}','{$wheels}', '{$price}')");
    closeDB();
}