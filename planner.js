//In this section of the code, we use moment.js to deal with the time elements on the web application.

    // Initiate variables and display the current time on the webpage:
        // Create the variable that calls moment: 
        var timeNow = moment().format("dddd, MMM Do YYYY, HH:mm");
        // Link the element on the HTML to a variable that will be used by Moment.js:
        var displayMomentEl = document.getElementById("currentDay");
        // Display the code (time calculations) created by Moment.js onto the webpage:
        displayMomentEl.innerHTML = timeNow;



// In this section of the code, we create a loop that generates time blocks from 0600 to 2400. This loop will automatically display the hour for the particular time block.

    // Build a loop that generates time blocks from 0600 to 2400:
    for (let timeHour = 6; timeHour < 24; timeHour++) {

        // Create the hourly display portion of the time block
            // First create the row. One row per hour in the planner.
            let $rowHourly = $('<div>'); //For each hour of time, we build a single row
            $rowHourly.addClass('row'); //turn the div we created into a row by adding that class
            $rowHourly.addClass('time-block'); // Add a class of time-block to add CSS properties to the row
            $rowHourly.attr('hourIndex', timeHour);

            // Within that row we created, we start building the first column that will contain the hour display:
            let $colHourly = $('<div>');
            $colHourly.addClass('col-sm-2');

            // Within that column we created, we will create a time element:
            var $hourly = $('<div>');
            $hourly.addClass('hour');

            // Format the hours for display in military time:
            if(timeHour >= 0 && timeHour < 10) {
                var timeDisplay = "0" + timeHour + "00"
            } else {
                var timeDisplay = timeHour + "00"
            };

            // Show the time within this time element:
            $hourly.text(`${timeDisplay}`)

            // Finally, we insert the hour element inside the time display column and then insert that time display column into the row:
            $rowHourly.append($colHourly);
            $colHourly.append($hourly);
        
        
         
        
        
        
        
    }

        