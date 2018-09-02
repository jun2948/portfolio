<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        mb_language("Japanese");
        mb_internal_encoding("UTF-8");
        $to = "jyun0814soccer@icloud.com";
        $title = $_POST['title'];
        $content = $_POST['message'];
        $header = $_POST['from'];
        if(mb_send_mail($to, $title, $content, $header)){
            echo "Success to send mail";
        } else {
            echo "Fail to send mail";
        };
    ?>
</body>
</html>