<?php

    header("Access-Control-Allow-Origin : *");
    header("Content-Type : application/json *");

    include_once("../../config/Database.php");
    include_once("../../models/admin.php");


    $database = new Database();
   $db = $database->connect();

    $admin = new Admin($db);

    //Get students from the database
    $result = $admin->read();

    
    $datas =$result->fetchAll(PDO::FETCH_ASSOC);
    
    $admin_array=array() ;

    foreach ($datas as $data => $value) 
    {
        extract($value);            
        $admin_row = array(

            'id' => $id,
           'name' => $mail,
           'mail' =>$mail,
           'password' => $password,
    
        );
        array_push($admin_array,$admin_row);
    }
        echo(json_encode($admin_array));
?>
