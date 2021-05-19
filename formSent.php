<?php
  header("Access-Control-Allow-Origin: *");

  $email = $_POST['email'];
  $name  = $_POST['name'];
  $service;

  $title = $_POST[''];

  $token = "1400384359:AAGehrCcvXm1TIyuXAzITNPD4HeVyq1Gnfo";
  $chat_id = "-1001407042618";

  $arr = array(
    'Email: ' => $email,
    'Name: '  => $name,
  );

  foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
  };

  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>
