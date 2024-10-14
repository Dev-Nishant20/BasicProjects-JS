// Selecting all boxes (cells) in the Tic-Tac-Toe grid
let boxes = document.querySelectorAll(".box");

// Selecting the reset button
let reset = document.querySelector("#rst-btn");

// Selecting the new game button
let newGamebtn = document.querySelector("#new-btn");

// Selecting the message container that displays the winner
let msgContainer = document.querySelector(".msg-container");

// Selecting the message element that shows the winner's name/message
let msg = document.querySelector("#message");

// Variable to track whose turn it is (true for 'O', false for 'X')
let turnO = true; 

// Defining all the winning patterns in Tic-Tac-Toe (indices of boxes that form a winning combination)
const winPatterns = [
    [0,1,2],  // Top row
    [0,3,6],  // Left column
    [0,4,8],  // Diagonal from top-left to bottom-right
    [1,4,7],  // Middle column
    [2,5,8],  // Right column
    [2,4,6],  // Diagonal from bottom-left to top-right
    [3,4,5],  // Middle row
    [6,7,8],  // Bottom row
];

// Adding a click event listener to each box in the grid
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Checking whose turn it is and assigning the corresponding symbol to the clicked box
        if(turnO){
            box.innerText = "O";  // 'O's turn
            turnO = false;  // Toggle the turn to 'X'
        } else {
            box.innerText = "X";  // 'X's turn
            turnO = true;  // Toggle the turn back to 'O'
        }
        box.disabled = true;  // Disabling the box so it can't be clicked again
        
        // After each move, check if there's a winner
        checkWinner();
    });
});

// Function to disable all boxes (used when there's a winner)
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;  // Disable all boxes in the grid
    }   
}

// Function to display the winner and disable further moves
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;  // Set the message to announce the winner
    msgContainer.classList.remove("hide");  // Show the message container
    disableBoxes();  // Disable the boxes to end the game
};

// Function to check if there's a winner based on the current game state
const checkWinner = () => {
    // Iterate through each winning pattern
    for(let pattern of winPatterns){
        // Get the values (X or O) for the current pattern (3 boxes)
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        // Check if all three positions in the current pattern are filled and are the same
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // If a winning pattern is found, show the winner
                showWinner(pos1Val);
            }
        }
    }
};

// Function to enable all boxes and reset their text content (used for starting a new game)
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;  // Enable all boxes for a new game
        box.innerText = "";  // Clear the text (X or O) inside each box
    }   
}

// Function to reset the game state (used for both Reset and New Game buttons)
const resetGame = () => {
    turnO = true;  // Reset the turn to 'O'
    enableBoxes();  // Re-enable all boxes and clear them
    msgContainer.classList.add("hide");  // Hide the message container after resetting
}

// Adding click event listener to the "New Game" button to reset the game
newGamebtn.addEventListener("click", resetGame);

// Adding click event listener to the "Reset" button to reset the game
reset.addEventListener("click", resetGame);
