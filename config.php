<?php
// Add classes
include("../src/classes/Database.class.php"); 
include("../src/classes/Admin.class.php");

if (session_status() == PHP_SESSION_NONE ) {
    session_start();
}