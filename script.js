// Semester Dean's List Eligibility Checker
// JavaScript Implementation

// AI ASSISTANCE DECLARATION:
// -- AI ASSISTED CODE START --
// AI was consulted for:
// 1. Correct conditional logic (>= 3.50)
// 2. Proper implementation of for loop structure
// 3. Formatting output to match exactly the image
// -- AI ASSISTED CODE END --

// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
const studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Create function to measure dean list eligibility using conditional statement
function checkDeanList(gpa) {
    if (gpa >= 3.50) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}

// Function to initialize and display results
function displayResults() {
    const outputSection = document.getElementById('output-section');
    
    // Clear existing content
    outputSection.innerHTML = "";
    
    // Add section header - EXACT FORMAT FROM IMAGE
    outputSection.innerHTML += "<h2>Section 03 Result</h2>";
    
    // 3. Create Looping (for loop) to print student data
    for (let i = 0; i < studentData.length; i++) {
        const studentName = studentData[i][0];
        const currentGPA = studentData[i][2];
        
        // Call function to check eligibility
        const status = checkDeanList(currentGPA);
        
        // Determine CSS class for status
        const statusClass = status === "Dean's List Eligible" ? "eligible" : "not-eligible";
        
        // 4. Print all the output (inside the loop) - EXACT FORMAT FROM IMAGE
        outputSection.innerHTML += `
            <div class="student-entry">
                <div><b>Name:</b> ${studentName}</div>
                <div><b>Current GPA:</b> ${currentGPA.toFixed(2)}</div>
                <div><b>Status:</b> <span class="${statusClass}">${status}</span></div>
                <hr>
            </div>
        `;
    }
}

// Run the display function when page loads
window.onload = displayResults;

// Optional: Console verification (for debugging)
console.log("Semester Dean's List Eligibility Results");
console.log("=======================================");
console.log("Section 03 Result");
console.log("=================");
for (let i = 0; i < studentData.length; i++) {
    const status = checkDeanList(studentData[i][2]);
    console.log(`Name: ${studentData[i][0]}`);
    console.log(`Current GPA: ${studentData[i][2].toFixed(2)}`);
    console.log(`Status: ${status}`);
    console.log("---");
}