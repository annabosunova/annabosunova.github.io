/**
 * checkData(): -> Boolean
 * Checks whether user's entered input is not empty
 * @returns false and displays the message 
 *          if one or all fields are empty
 * 
 * @returns true if data is correct
 */
function checkdata() {
    //Create references to the input elements we wish to validate
    const username = document.getElementById("name");
    const email_address = document.getElementById("email");

    //Check if username field is empty
    if (username.value == "") {
        alert("Please enter the name");
        username.focus();
        return false;
    }
    //Check if email field is empty
    if (email_address.value == "") {
        alert("Please enter the email");
        email_address.focus();
        return false;
    }
    return true;
}

/**
 * downloadResume(): -> Void
 * 
 * Opens resume in the window
 */
function downloadResume() {
    const resumeUrl = '/documents/Resume.pdf';
    window.open(resumeUrl, '_blank');
}

/**
 * switchModeWhite(): -> Void
 * 
 * Changes the background and font of the elements for the white mode
 */
function switchModeWhite() {
    const body = document.querySelector("body");
    const menuItems = document.querySelectorAll(".menu a");
    body.style.color = "#1A1A1D";
    body.style.backgroundColor = "#d0d1d3";
    // Loop through each menu item and change its color
    menuItems.forEach(item => {
        item.style.color = "#1A1A1D";
    });


}

/**
 * switchModeDark(): -> Void
 * 
 * Changes the background and font of the elements for the dark mode
 */
function switchModeDark() {
    const body = document.querySelector("body");
    const menuItems = document.querySelectorAll(".menu a");
    body.style.color = "#d0d1d3";
    body.style.backgroundColor = "#1A1A1D";
    // Loop through each menu item and change its color
    menuItems.forEach(item => {
        item.style.color = "#BBBB";
    });
}