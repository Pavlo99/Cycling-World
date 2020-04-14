<?php
$mysqli = false;

function connectDB()
{
    global $mysqli;
    $mysqli = new mysqli("localhost", "root", "pavlo2001", "myDataBase");
    if ($mysqli->connect_errno) {
        printf("Соединение не удалось: %s\n", $mysqli->connect_error);
        exit();
    }
    $mysqli->query("SET NAMES 'utf-8'");
}

function closeDB()
{
    global $mysqli;
    $mysqli->close();
}

function getGoods($limit)
{
    global $mysqli;
    connectDB();

    $result = $mysqli->query("SELECT * FROM `goods` ORDER BY `id` DESC LIMIT $limit");
    closeDB();
    return resultToArray($result);
}

function resultToArray($result)
{
    $array = array();
    while (($row = $result->fetch_assoc()) != false) {
        $array[] = $row;
    }
    return $array;
}