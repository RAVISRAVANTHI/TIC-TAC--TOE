 <script>

  <!-- 5x5 Grid of Buttons -->
            
                for (let i = 0; i < 30; i++) {
                    document.write('<button class="box"></button>');
                }
           
        let boxes = document.querySelectorAll('.box');
        let resetBtn = document.querySelector('#reset');
        let newGameBtn = document.querySelector('#new-btn');
        let msgContainer = document.querySelector('.msg-container');
        let msg = document.querySelector('#msg');
        let turnO = true; // Player O starts

        const winPatterns = [
            // Rows
            [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], 
            [15, 16, 17, 18, 19], [20, 21, 22, 23, 24],
            // Columns
            [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], 
            [3, 8, 13, 18, 23], [4, 9, 14, 19, 24],
            // Diagonals
            [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]
        ];

        boxes.forEach((box) => {
            box.addEventListener('click', function () {
                if (turnO) {
                    box.innerText = 'O';
                    box.style.color = 'red';
                    turnO = false;
                } else {
                    box.innerText = 'X';
                    box.style.color = 'black';
                    turnO = true;
                }
                box.disabled = true;
                checkWinner();
            });
        });

        const disableBoxes = () => {
            boxes.forEach(box => box.disabled = true);
        };

        const enableBoxes = () => {
            boxes.forEach(box => {
                box.disabled = false;
                box.innerText = "";
            });
        };

        const showWinner = (winner) => {
            let winnerName = winner === "O" ? "Ravi" : "Khajit";
            msg.innerText = `Congratulations, Winner is ${winnerName}`;
            msgContainer.classList.remove('hide');
            disableBoxes();
        };

        const checkWinner = () => {
            let hasWin = false;
            for (let pattern of winPatterns) {
                let pos1Val = boxes[pattern[0]].innerText;
                let pos2Val = boxes[pattern[1]].innerText;
                let pos3Val = boxes[pattern[2]].innerText;
                let pos4Val = boxes[pattern[3]].innerText;
                let pos5Val = boxes[pattern[4]].innerText;

                if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos4Val !== "" && pos5Val !== "" &&
                    pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val && pos4Val === pos5Val) {
                    showWinner(pos1Val);
                    hasWin = true;
                    return;
                }
            }

            if (!hasWin) {
                const allBoxesFilled = [...boxes].every(box => box.innerText !== "");
                if (allBoxesFilled) {
                    msg.innerText = 'Match Drawn';
                    msgContainer.classList.remove('hide');
                }
            }
        };

        const resetGame = () => {
            turnO = true;
            enableBoxes();
            msgContainer.classList.add('hide');
        };

        newGameBtn.addEventListener('click', resetGame);
        resetBtn.addEventListener('click', resetGame);
    </script>


