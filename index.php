<?php
include("config.php"); 

// Class
$admin = new Admin();

//Login
if(isset($_POST['username'])) {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);


    if($admin->login($username, $password)) {
        header('Location: admin.php');
    } else {
        $message = '<p class="errormessage">Felatigt användarnamn eller lösenord!</p>';
    }
}
   
// Errormessage if username/passwred is incorrect
if(isset($message)) { echo $message; }
// Post massege 
if(isset($_GET['message'])) {
    echo "<p class='message'>" . $_GET['message'] . "</p>";
}
$admin->get_all();

include("header.php");  
?>

    <form class="inlogg" method="post">
        <h1>Logga in</h1>
        <label for="username">Användarnamn:</label>
        <input type="text" id="username" name="username">
        <label for="password">Lösenord:</label>
        <input type="password" id="password" name="password">
        <input type="submit" id="login" value="Logga in">
    </form>

