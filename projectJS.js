// Making newWindow Global
let newWindow;

document.addEventListener('DOMContentLoaded', function() {
    // Email Validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to generate meal plan
    function generateMealPlan() {
        // Assign meal values to variables
        const breakfast_value = document.getElementById('breakfast').value;
        const snack1_value = document.getElementById('snack1').value;
        const lunch_value = document.getElementById('lunch').value;
        const snack2_value = document.getElementById('snack2').value;
        const dinner_value = document.getElementById('dinner').value;

        // Collect user details
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const weeklyGoal = document.getElementById('weeklyGoal').value;

        // Validate email
        if (validateEmail(email)) {
            let days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            let mealPlanContent = '';

            // For loop to have the meal plan for each day of the week
            for (let i = 0; i < days_of_the_week.length; i++) {
                let day = days_of_the_week[i];
                mealPlanContent += `
                <h3>${day} Meals</h3>
                <p>Breakfast: ${breakfast_value}</p>
                <p>Morning Snack: ${snack1_value}</p>
                <p>Lunch: ${lunch_value}</p>
                <p>Afternoon Snack: ${snack2_value}</p>
                <p>Dinner: ${dinner_value}</p>
                `;
            }

            // Full HTML page with the meal plan content added
            const mealPlanHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Meal Plan for ${name}</title>
                <style>
                    body { font-family: monospace; }
                    .meal-plan { border: 1px solid black; padding: 20px; }
                </style>
            </head>
            <body>
                <h1>Perfectly Portioned Fitness Meal Plan</h1>
                <div class="meal-plan">
                    <h2>Personal Details</h2>
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Weekly Goal: ${weeklyGoal}</p>

                    <h2>Weekly Meal Schedule</h2>
                    ${mealPlanContent}
                </div>
            </body>
            </html>
            `;

            // Open a new window and write the HTML content to it
            let newWindow = window.open();
            newWindow.document.write(mealPlanHTML);
            newWindow.document.close();
            
            function printMealPlan() {
                if (newWindow) {
                    newWindow.print();
                } else {
                    alert('Please generate the meal plan first.');
                }
            }
        
            function downloadMealPlan() {
                // Create a blob with the HTML content to download it
                const blob = new Blob([mealPlanHTML], { type: 'text/plain' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'meal_plan.html';
                link.click();
            }
            document.querySelector('button[onclick="printMealPlan()"]').addEventListener('click', printMealPlan);
            document.querySelector('button[onclick="downloadMealPlan()"]').addEventListener('click', downloadMealPlan);

    }

        else {
            alert('Please enter a valid email address.');
        }
        }

    function clearMealPlan() {
        // Sets all the values of the meal plan equal to nothing
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('weeklyGoal').value = '';
        document.getElementById('breakfast').value = '';
        document.getElementById('snack1').value = '';
        document.getElementById('lunch').value = '';
        document.getElementById('snack2').value = '';
        document.getElementById('dinner').value = '';
    }



    // Attach the generateMealPlan function to the button click event
    document.querySelector('button[onclick="generateMealPlan()"]').addEventListener('click', generateMealPlan);
    document.querySelector('button[onclick="clearMealPlan()"]').addEventListener('click', clearMealPlan);
    document.querySelector('button[onclick="printMealPlan()"]').addEventListener('click', printMealPlan);
    document.querySelector('button[onclick="downloadMealPlan()"]').addEventListener('click', downloadMealPlan);
    
});