//In this section of the code, we use moment.js to deal with the time elements on the web application.

    // Initiate variables and display the current time on the webpage:
        // Create the variable that calls moment: 
        var timeNow = moment().format("dddd, MMM Do YYYY, HH:mm");
        // Link the element on the HTML to a variable that will be used by Moment.js:
        var displayMomentEl = document.getElementById("currentDay");
        // Display the code (time calculations) created by Moment.js onto the webpage:
        displayMomentEl.innerHTML = timeNow;





        