<?php
include("config.php"); 

// Check for session
if(!isset($_SESSION['username'])) {
        header('Location: index.php?message=Du måste logga in!');
    }
?>

<a class="logout" href='logout.php'>Logga ut</a>
<?php include("header.php");?>

    <div id="updateDiv"></div>

    <div class="flexbox">
        <section>
            <h3>Utbildning</h3>
        <form method="get">
            <label for="university">Vilken skola?</label>
            <input type="text" name="university" id="university">
            <label for="education_name">Utbildningens/kursens namn?</label>
            <input type="text" name="education_name" id="education_name">
            <label for="start_date">Start datum</label>
            <input type="text" name="start_date" id="start_date">
            <label for="end_date">Slut datum</label>
            <input type="text" name="end_date" id="end_date">
            <input type="submit" id="addEdu" value="Lägg till ny utbildning">
        </form>
            <div id="eduDiv"></div>

        </section>

        <section>
            <h3>Anställningar</h3>
        <form method="get">
            <label for="workplace">Arbetsgivare</label>
            <input type="text" name="workplace" id="workplace">
            <label for="title">Title</label>
            <input type="text" name="title" id="title">
            <label for="start_date">Start datum</label>
            <input type="text" name="start_date" id="workStart">
            <label for="end_date">Slut datum</label>
            <input type="text" name="end_date" id="workEnd">
            <input type="submit" id="addWork" value="Lägg till ny anställning">
        </form>
            <div id="workDiv"></div>
        </section>

        <section>
            <h3>Webbsidor</h3>
        <form method="get">
            <label for="web_title">Titel</label>
            <input type="text" name="web_title" id="web_title">
            <label for="url">URL</label>
            <input type="text" name="url" id="url">
            <label for="repo">Repo</label>
            <input type="text" name="repo" id="repo">
            <label for="description">Beskrivning</label>
            <input type="text" name="description" id="description">
            <label for="img">Bildens namn</label>
            <input type="text" name="img" id="img">
            <input type="submit" id="addWebb" value="Lägg till ny webbplats">
        </form>
            <div id="webbDiv"></div>
        </section>
    </div>

<?php include("footer.php"); ?>
