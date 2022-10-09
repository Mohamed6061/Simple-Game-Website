let scoretxt = document.getElementById("score");
let myCanvas ;

let x = 21;
let y = 21;
let scale = 25;  // define variables for drawing canvas

let score = 0;  // for storing score
let count;  // to stop interval

let snakeX = 6* scale;
let snakeY = 5 * scale; // define frist place for snake

let snakeBody = []; // define array for body

let foodX;
let foodY;  // define food place
    
let volcityX = 0;
let volcityY = 0; // define moving direction

window.onload = function () {
    myCanvas = document.querySelector("canvas");
    myCanvas.width = x * scale;
    myCanvas.height = y * scale;  // draw bord
    context = myCanvas.getContext("2d");

    placeFood(); // put food on canvas

    addEventListener("keydown", changeDirection); //control on direction
    count = setInterval(update, 150 ); // for moving snake and updates
};

function update() {
    // update background
    context.fillStyle = "#000";
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);

    // update food
    context.fillStyle = "lime";
    context.fillRect(foodX, foodY, scale, scale);

    // check if snake eat food or not 
    if (foodX == snakeX && foodY == snakeY) {
        snakeBody.push([foodX,foodY]);
        placeFood();
    }

    // move body with head
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    // to move
    snakeY += volcityY * scale;
    snakeX += volcityX  * scale;
    
    // update & draw snake place
    context.fillStyle="white";
    context.fillRect(snakeX, snakeY, scale, scale);
    context.fillStyle="red";
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], scale, scale);
    }
    
    // end Game 
    if ( snakeX > x*scale || snakeY > y*scale || snakeX < 0  || snakeY < 0) {
        lose();
    // } 
    for (let i = 1  ; i < snakeBody.length ; i++) {
        if ( snakeX==snakeBody[i][0] &&  snakeY==snakeBody[i][1]) {
            lose();
        }
        
        ///////
        scoretxt.innerHTML= score-1;
        if (+localStorage.score < score-1) {
            localStorage.score= score-1;
            document.getElementById("highScore").innerHTML= localStorage.score
        }
    }
}
}
if (localStorage.getItem("score")) {
    document.getElementById("highScore").innerHTML= localStorage.score
}
if (  localStorage.score == undefined) {
    localStorage.score= 0
}


function changeDirection(e) {
    // when there is no move
    if (volcityY == 0 && volcityX == 0) {
        if (e.code == "ArrowUp") {
            volcityY = -1;
            volcityX = 0;
        } else if (e.code == "ArrowDown") {
            volcityY = 1;
            volcityX = 0;
        } else if (e.code == "ArrowLeft") {
            volcityY = 0;
            volcityX = -1;
        } else if (e.code == "ArrowRight") {
            volcityY = 0;
            volcityX = 1;
        }
    }
    // when moving up || when move down
    if ((volcityY == -1 && volcityX == 0) || (volcityY == 1 && volcityX == 0)) {
        if (e.code == "ArrowLeft") {
            volcityY = 0;
            volcityX = -1;
        } else if (e.code == "ArrowRight") {
            volcityY = 0;
            volcityX = 1;
        }
    }
    //

    // when move left || when move right
    if ((volcityY == 0 && volcityX == 1) || (volcityY == 0 && volcityX == -1)) {
        if (e.code == "ArrowUp") {
            volcityY = -1;
            volcityX = 0;
        } else if (e.code == "ArrowDown") {
            volcityY = 1;
            volcityX = 0;
        }
    }
}

function placeFood() {
    // (0.0 => 1.0) * 24 *scale
    ++score;
    foodX = Math.floor(Math.random() * x) * scale;
    foodY = Math.floor(Math.random() * y) * scale;
    if (foodX == snakeX && foodY == snakeY) return;
}

function lose() {
    alert(`

                                    ***** Game Over **
                                    * Your Score is   ${score - 1} *
                                    *********************
    `);
    clearInterval(count);
    location.reload();
}
/*****************Game Over**********************/