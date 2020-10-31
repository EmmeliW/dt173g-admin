"use strict"

// Close update div function
const updateDiv = document.getElementById('updateDiv');
const closeDiv = () => {updateDiv.style.display = 'none';}

// Eventlisteners
window.addEventListener('load', getEducation);
window.addEventListener('load', getWork);
window.addEventListener('load', getWebsite);


/* ------------------------------ Education ------------------------------ */
// Variables
const eduDiv = document.getElementById("eduDiv");
const addEdu = document.getElementById('addEdu');
let university = document.getElementById('university');
let education_name = document.getElementById('education_name');
let start_date = document.getElementById('start_date');
let end_date = document.getElementById('end_date');

// Get
function getEducation() {
    eduDiv.innerHTML = '';
    // Call
    fetch('https://emmlan.se/src/api/education.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(edu => {
            eduDiv.innerHTML +=
            `<div class="edu">
            <h4>${edu.university} </h4>
            <h5> ${edu.education_name} </h5>
            <p> ${edu.start_date} - ${edu.end_date} </p>
            <button education_id="${edu.education_id}" onClick="deleteEducation(${edu.education_id})">Radera</button>
            <button education_id="${edu.education_id}" onClick="getEduToUpdate(${edu.education_id})">Updatera</button></div>`;
        });
    })
}

// Create
function addEducation() {
    university = university.value;
    education_name = education_name.value;
    start_date = start_date.value;
    end_date = end_date.value;

    let edu = {'university' : university, 'education_name' : education_name, 'start_date' : start_date, 'end_date' : end_date};

    fetch('https://emmlan.se/src/api/education.php', {
        method: 'POST',
        body: JSON.stringify(edu)
    })
    .then(response => response.json())
    .then(data => {
        getEducation();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Get one to update
function getEduToUpdate(id) {
    // Call
    fetch('https://emmlan.se/src/api/education.php?id=' + id)
    .then(response => response.json())
    .then(updateDiv.style.display = 'block')
    .then(edu => {
        updateDiv.innerHTML +=
            `<form method="get">
            <h3>Uppdatera</h3> <br>
            <label for="code">Kurskod</label>
            <input type="text" name="code" id="newUni" value="${edu.university}"> <br>
            <label for="name">Kursnamn</label>
            <input type="text" name="name" id="newName" value="${edu.education_name}"> <br>
            <label for="prog">Nivå</label>
            <input type="text" name="prog" id="newStart" value="${edu.start_date}"> <br>
            <label for="plan">Kursplan</label>
            <input type="text" name="plan" id="newEnd" value="${edu.start_date}"> <br>
            <input type="submit" id="updateButton" onClick="updateEducation(${edu.education_id})" value="Uppdatera kurs"> <br>      
            <input type="submit" id="closeButton" onClick="closeDiv()" value="Avbryt">
            </form>`     
    })
}


// Update
function updateEducation(id) {
    
    let newUni = document.getElementById('newUni');
    let newName = document.getElementById('newName');
    let newStart = document.getElementById('newStart');
    let newEnd = document.getElementById('newEnd');

    newUni = newUni.value;
    newName = newName.value;
    newStart = newStart.value;
    newEnd = newEnd.value;

    let edu = {'education_id': id, 'university' : newUni, 'education_name' : newName, 'start_date' : newStart, 'end_date' : newEnd};

    fetch('https://emmlan.se/src/api/education.php?id=' + id, {
        method: 'PUT',
        body: JSON.stringify(edu)
    })
    .then(response => response.json())
    .then(data => {
        getEducation();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Delete
function deleteEducation(id) {
    fetch('https://emmlan.se/src/api/education.php?id=' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        getEducation();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}

/* ------------------------------ Work ------------------------------ */
// Variables
const workDiv = document.getElementById("workDiv");
const addWork = document.getElementById('addWork');
let workplace = document.getElementById('workplace');
let title = document.getElementById('title');
let workStart = document.getElementById('workStart');
let workEnd = document.getElementById('workEnd');

// Eventlisteners
addWork.addEventListener('click', addNewWork);

// Get
function getWork() {
    workDiv.innerHTML = '';
    // Call
    fetch('https://emmlan.se/src/api/work.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(work => {
            workDiv.innerHTML +=
            `<div class="work">
            <h4>${work.workplace} </h4>
            <h5> ${work.title} </h5>
            <p> ${work.start_date} - ${work.end_date} </p>
            <button id="${work.work_id}" onClick="deleteWork(${work.work_id})">Radera</button>
            <button id="${work.work_id}" onClick="getworkToUpdate(${work.work_id})">Updatera</button></div>`;
        });
    })
}

// Create
function addNewWork() {
    workplace = workplace.value;
    title = title.value;
    workStart = workStart.value;
    workEnd = workEnd.value;

    let work = {'workplace' : workplace, 'title' : title, 'start_date' : workStart, 'end_date' : workEnd};

    fetch('https://emmlan.se/src/api/work.php', {
        method: 'POST',
        body: JSON.stringify(work)
    })
    .then(response => response.json())
    .then(data => {
        getWork();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Get one to update
function getworkToUpdate(id) {
    // Call
    fetch('https://emmlan.se/src/api/work.php?id=' + id)
    .then(response => response.json())
    .then(updateDiv.style.display = 'block')
    .then(work => {
        updateDiv.innerHTML +=
            `<form method="get">
            <h3>Uppdatera</h3> <br>
            <label for="workplace">Arbetsplats</label> <br>
            <input type="text" name="workplace" id="newWork" value="${work.workplace}"> <br>
            <label for="name">Titel</label> <br>
            <input type="text" name="title" id="newTitle" value="${work.title}"> <br>
            <label for="prog">Start</label> <br>
            <input type="text" name="prog" id="newStart" value="${work.start_date}"> <br>
            <label for="plan">Slut</label> <br>
            <input type="text" name="plan" id="newEnd" value="${work.end_date}"> <br>
            <input type="submit" id="updateButton" onClick="updateWork(${work.work_id})" value="Uppdatera kurs"> <br>      
            <input type="submit" id="closeButton" onClick="closeDiv()" value="Avbryt">
            </form>`     
    })
}


// Update
function updateWork(id) {
    
    let newWork = document.getElementById('newWork');
    let newTitle = document.getElementById('newTitle');
    let newStart = document.getElementById('newStart');
    let newEnd = document.getElementById('newEnd');

    newWork = newWork.value;
    newTitle = newTitle.value;
    newStart = newStart.value;
    newEnd = newEnd.value;

    let work = {'education_id': id, 'workplace' : newWork, 'title' : newTitle, 'start_date' : newStart, 'end_date' : newEnd};

    fetch('https://emmlan.se/src/api/work.php?id=' + id, {
        method: 'PUT',
        body: JSON.stringify(work)
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Delete
function deleteWork(id) {
    fetch('https://emmlan.se/src/api/work.php?id=' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}


/* ------------------------------ Website ------------------------------ */
// Variables
const webbDiv = document.getElementById("webbDiv");
const addWebb = document.getElementById('addWebb');
let web_title = document.getElementById('web_title');
let url = document.getElementById('url');
let repo = document.getElementById('repo');
let description = document.getElementById('description');
let img = document.getElementById('img');

// Eventlisteners
addWebb.addEventListener('click', addNewWebsite);

// Get
function getWebsite() {
    webbDiv.innerHTML = '';
    // Call
    fetch('https://emmlan.se/src/api/website.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(webb => {
            webbDiv.innerHTML +=
            `<div class="webb">
            <h4>${webb.title} </h4>
            <img alt="Bild på webbplats" src="img/${webb.img}.jpg"> <br>
            <a href="${webb.url}" target="_blank"> URL: Till Sidan </a>
            <p>GitHub repo: ${webb.repo} </p>
            <p> ${webb.description} </p>
            <button id="${webb.webbsite_id}" onClick="deleteWebsite(${webb.website_id})">Radera</button>
            <button id="${webb.webbsite_id}" onClick="getWebsiteToUpdate(${webb.website_id})">Updatera</button></div>`;
        });
    })
}
// Create
function addNewWebsite() {
    web_title = web_title.value;
    url = url.value;
    repo = repo.value;
    description = description.value;
    img = img.value;

    let webb = {'title' : web_title, 'url' : url, 'repo' : repo, 'description' : description, 'img' : img};

    fetch('https://emmlan.se/src/api/website.php', {
        method: 'POST',
        body: JSON.stringify(webb)
    })
    .then(response => response.json())
    .then(data => {
        getWork();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Get one to update
function getWebsiteToUpdate(id) {
    // Call
    fetch('https://emmlan.se/src/api/website.php?id=' + id)
    .then(response => response.json())
    .then(updateDiv.style.display = 'block')
    .then(web => {
        updateDiv.innerHTML +=
            `<form method="get">
            <label for="web_title">Webbplats</label>
            <h3>Uppdatera</h3> <br>
            <input type="text" name="web_title" id="newWebTitle" value="${web.title}"> <br>
            <label for="url">Titel</label>
            <input type="text" name="url" id="newUrl" value="${web.url}"> <br>
            <label for="repo">Start</label>
            <input type="text" name="repo" id="newRepo" value="${web.repo}"> <br>
            <label for="description">Beskrivning</label>
            <input type="text" name="description" id="newDescription" value="${web.description}"> <br>
            <label for="img">Välj bild</label>
            <input type="text" id="newImg" name="img" value="${web.img}"> <br>
            <input type="submit" id="updateButton" onClick="updateWebsite(${web.website_id})" value="Uppdatera kurs"> <br>      
            <input type="submit" id="closeButton" onClick="closeDiv()" value="Avbryt">
            </form>`     
    })
}


// Update
function updateWebsite(id) {
    
    let newWebTitle = document.getElementById('newWebTitle');
    let newUrl = document.getElementById('newUrl');
    let newRepo = document.getElementById('newRepo');
    let newDescription = document.getElementById('newDescription');
    let newImg = document.getElementById('newImg');

    newWebTitle = newWebTitle.value;
    newUrl = newUrl.value;
    newRepo = newRepo.value;
    newDescription = newDescription.value;
    newImg = newImg.value;

    let web = {'title' : newWebTitle, 'url' : newUrl, 'repo' : newRepo, 'description' : newDescription, 'img' : newImg};

    fetch('https://emmlan.se/src/api/website.php?id=' + id, {
        method: 'PUT',
        body: JSON.stringify(web)
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}

// Delete
function deleteWebsite(id) {
    fetch('https://emmlan.se/src/api/website.php?id=' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}