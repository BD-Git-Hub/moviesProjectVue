<?php 

if(isset($_POST['submit'])){

    $username = $_POST['loginUsername'];
    $password = $_POST['loginPassword'];

    echo $username . $password;

    // $connection = mysqli_connect('localhost', 'root', '', 'databasename');

    // if($connection) {
    //     echo 'We are connected';
    // } else {
    //     die('Database connection failed.');
    // }


}

?>