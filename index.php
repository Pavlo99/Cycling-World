<?php
require_once "functions.php";
require_once "addGood.php";
$account = "Авторизація";

$goods = getGoods(50);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width-device-width, initial-scale=1, shrink-to-fit=no">
    <title>Вело Світ</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body onload="start()">

<!-- Верхній слот -->
<div class="container-fluid mycontainer">
    <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-6">
            <b class="title">ВелоСвіт</b>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6" style="font-size: x-large">
            <div class="row" style="text-align: right; margin-left: 5%">
                <a class="col-lg-3 col-md-6 col-sm-12 white" href="">Розстрочка</a>
                <a class="col-lg-3 col-md-6 col-sm-12 white" href="">Ремонт</a>
                <a class="col-lg-3 col-md-6 col-sm-12 white" href="" id="box">Корзина</a>
                <a class="col-lg-3 col-md-6 col-sm-12 white" target="_parent" href="sing.html" id="myAccount">
                    <?php
                    if (isset($_POST["button"])) {
                        if ($_POST['username'] != "")
                            $account = $_POST['username'];
                    }
                    echo $account;
                    ?>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Картинка -->
<div class="container align-items-center" style="margin-top: 1%">
    <div class="row grayBG header">
        <a class="col-lg-3 col-md-6 col-sm-12 white aproperty" href="#">Велосипеди</a>
        <a class="col-lg-3 col-md-6 col-sm-12 white aproperty" id="demo" href="#">Запчастини</a>
        <a class="col-lg-3 col-md-6 col-sm-12 white aproperty" href="#">Аксесуари</a>
        <a class="col-lg-3 col-md-6 col-sm-12 white aproperty" href="#">Одяг і захист</a>
    </div>

    <img class="imagestyle" src="images/bike.jpg" alt="Фото велосипеда">

    <div id="myGoods">
        <b style="margin-left: 2%;">Наш асортимент</b>
        <b style="margin-right: 2%;">
            < <b> >
            </b>
        </b>
    </div>

    <div id="mymaintable" class="grid-container table">
        <?php
        for ($i = 0; $i < count($goods); $i++) {
            echo '<div id = "mytableelem" class = "align-items-center mygoodsstyles col-lg-12 col-md-12 col-sm-12">
            <img src="images/bike4.jpg" id = "pict" style="margin-top: 2%">
            <p id="name1" style="margin: auto">Велосипед - ' . $goods[$i]["name"] . '</p>
            <p id="name2" style="margin: auto">Рама - ' . $goods[$i]["type"] . '</p>
            <p id="name3" style="margin: auto">Колеса - ' . $goods[$i]["wheels"] . '</p>
            <p id="name4" style="margin: auto">Ціна - ' . $goods[$i]["price"] . '</p>
            <button id="name5" onclick="buy()" style="font-size: 120%; margin-top: 2%; margin-bottom: 2%">Купити</button>
            </div>';
        }
        ?>
    </div>
</div>

<!-- Форма для додавання нового товару -->
<div style="text-align: center; margin-top: 7%;">
    <h1>Додати</h1>
</div>

<div align="center" style="width: 60%">
    <div align="right">
        <form action="addGood.php" method="post">
            <div class="form_group">
                <label for="name">Назва:</label>
                <input id="myselectname" class="addinput" type="text" name="name" style="width: 300px">
            </div>
            <div class="form_group">
                <label for="type">Рама:</label>
                <input class="addinput" type="text" name="type" id="type" style="width: 300px" required>
            </div>
            <div class="form_group">
                <label for="wheels">Колеса:</label>
                <input id="wheels" class="addinput" type="number" name="wheels" min="0" max="29" style="width: 300px">
            </div>
            <div class="form_group">
                <label for="price">Ціна:</label>
                <input id="price" class="addinput" type="number" name="price" max="20000" style="width: 300px">
            </div>
            <div class="form_group">
                <label for="country">Країна:</label>
                <select id="country" name="country" style="font-size: 25px; width: 300px">
                    <option>Виберіть вашу країну</option>
                    <option value="Росія">Росія</option>
                    <option value="Україна">Україна</option>
                    <option value="Білорусь">Білорусь</option>
                    <option value="Польща">Польща</option>
                </select>
            </div>
            <button type="submit" style="width: 300px" class="btn btn-primary" name="button1" id="button1">Додати</button>
        </form>

    </div>
</div>

<!-- Статистика -->
<div style="text-align: center;">
    <button style="font-size: 30px; margin-top: 2%; margin-bottom: 2%;" id="showElem"
            onclick="showElem()">Показати/сховати статистику
    </button>
</div>

<h2 id="h2Text" style="text-align: center; margin-top: 0; display: none;">Кількість проданих велосипедів в злежності
    від розміру коліс</h2>
<div id="canvasDiv" style="text-align: center; margin-top: 5%; display: none;">
    <canvas width="1000" height="1000" id="canvas"></canvas>
    <script src="script.js"></script>
</div>

<table align="center" style="text-align: center;">
    <tr>
        <th>Місяць</th>
        <th>К-сть</th>
    </tr>
    <tr>
        <td style="width: 30%;">Січень</td>
        <td style="width: 20%;">80</td>
    </tr>
    <tr>
        <td>Лютий</td>
        <td>60</td>
    </tr>
    <tr>
        <td>Березень</td>
        <td>65</td>
    </tr>
    <tr>
        <td>Квітень</td>
        <td>63</td>
    </tr>
    <tr>
        <td>Травень</td>
        <td>97</td>
    </tr>
    <tr>
        <td>Червень</td>
        <td>125</td>
    </tr>
    <tr>
        <td>Липень</td>
        <td>148</td>
    </tr>
    <tr>
        <td>Серпень</td>
        <td>115</td>
    </tr>
    <tr>
        <td>Вересень</td>
        <td>80</td>
    </tr>
    <tr>
        <td>Жовтень</td>
        <td>75</td>
    </tr>
    <tr>
        <td>Листопад</td>
        <td>70</td>
    </tr>
    <tr>
        <td>Грудень</td>
        <td>45</td>
    </tr>
</table>

<!-- Футер -->
<div style="margin-top: 3%;">
    <article class="article">
        <h6>Email: student@gmail.com</h6>
        <br>Number: +380503494638
        <br>Adress: Lviv, Bandery, 100
        <footer>
            © 2020 Lviv
        </footer>
    </article>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="script.js"></script>
</body>

</html>


