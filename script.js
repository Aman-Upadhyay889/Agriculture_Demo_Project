/* =====================================
   ROOT OF LIFE
   SMART AGRICULTURE
===================================== */


/* =========================
   LANDING PAGE
========================= */

function startJourney() {

    window.location.href = "dashboard.html";

}


/* =========================
   DASHBOARD NAVIGATION
========================= */

function showSection(sectionId, clickedItem = null) {

    // Get all sections
    const sections = document.querySelectorAll(".page-section");

    // Hide every section
    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    // Update sidebar navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.classList.remove("active");

    });


    if (clickedItem) {

        clickedItem.classList.add("active");

    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   CURRENT DATE
========================= */

function displayCurrentDate() {

    const dateElement = document.getElementById("currentDate");

    if (!dateElement) {
        return;
    }


    const today = new Date();


    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };


    dateElement.textContent =
        today.toLocaleDateString("en-IN", options);

}


/* =========================
   DEMO SENSOR VALUES
========================= */

function updateSensorValues() {

    const temperature =
        document.getElementById("temperatureValue");

    const humidity =
        document.getElementById("humidityValue");

    const moisture =
        document.getElementById("moistureValue");


    if (!temperature || !humidity || !moisture) {
        return;
    }


    /*
       These are temporary demo values.

       Later we will replace these
       with real data from the backend
       and Oracle database.
    */

    temperature.textContent = "32";

    humidity.textContent = "58";

    moisture.textContent = "64";

}


/* =========================
   INITIALIZE DASHBOARD
========================= */

document.addEventListener("DOMContentLoaded", function() {

    displayCurrentDate();

    updateSensorValues();

});