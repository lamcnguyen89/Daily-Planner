// Miscellaneous Global Functions and arrays:

    //Create an array that stores all the user's plans. This allows things to be stored and retrieved from local storage we create a new empty array with a length of 19 because there will be 19 hours total in this planner. At first this array will be empty but the user will add to it as he/she sees fit:
    userTasksArray = new Array(18)

// In this section of the code, we use moment.js to deal with the time elements on the web application.

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

        let index = timeHour - 6;

        // Create the hourly display portion of the time block.

                // First create the row. One row per hour in the planner.
                let $rowHourly = $('<div>'); //For each hour of time, we build a single row
                $rowHourly.addClass('row'); //turn the div we created into a row by adding that class
                $rowHourly.addClass('time-block'); // Add a class of time-block to add CSS properties to the row
                $rowHourly.attr('hourIndex', timeHour);

                // Within that row we created, we start building the first column that will contain the hour display. This column controls the width of the time display:
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

        // Now we create the input portion of the time block where the user inputs his/her tasks for the hour.

                // First create the column that will house the user's input. This column controls the width of the user input box:
                let $colUserInput = $('<div>');
                $colUserInput.addClass('col-sm-9');

                // Next we create the input form box where the user will type his/her task(s) for the hour. This input box will go inside the column we just created.
                let $hourlyTasks = $('<textarea>');
                $hourlyTasks.attr('id', `input ${index}`);
                $hourlyTasks.attr('hourIndex', index);
                $hourlyTasks.attr('type', 'text');

                // This code assigns the user tasks for that hour into the userTasksArray towards a particular index number. This allows data to be stored and retrieved from local storage in an orderly manner. The user tasks will be stored in order meaning that tasks scheduled for earlier in the day will be placed earlier in the index of the array:
                $hourlyTasks.val(userTasksArray[index]);

                // Finally, we insert the user input text box into the column and insert the column into the time-block row:
                $rowHourly.append($colUserInput);
                $colUserInput.append($hourlyTasks);
                


        

        
        
         
        
        
        
        
    }

        