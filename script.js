// JavaScript to generate and style the rows within .moving-text
const movingText = document.querySelector('.moving-text');
const numRows = 29; // Number of rows

for (let i = 0; i < numRows; i++) {
    const row = document.createElement('p');
    // Use &nbsp; to represent a tab, and add multiple to create visible tabs
    row.innerHTML = 'You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been hacked!';
    row.style.animation = `moveSideways ${10 + i * 0.5}s linear infinite alternate`; // Adjust the animation duration
    movingText.appendChild(row);
}

const blob = new Blob([""], { type: "application/octet-stream" });

// Create a URL for the Blob
const blobURL = URL.createObjectURL(blob);

// Create a download link and trigger the download
const a = document.createElement("a");
a.href = blobURL;
a.download = "empty.txt"; // Set the filename
a.style.display = "none";
document.body.appendChild(a);
a.click();

// Clean up by removing the link and revoking the Blob URL
document.body.removeChild(a);
URL.revokeObjectURL(blobURL);