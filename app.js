document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');

    let playerDisplay = document.querySelector("#player");
    let currentPlayer = "playerX";

    squares.forEach((square, index) => {
        square.addEventListener('click', (e) => clickOutCome(e, index))
    })
    const squareArray = Array.from(squares);

    function clickOutCome(e, index) {
        if (squareArray[index].style.cursor !== "not-allowed") {
            if (currentPlayer === "playerX") {
                squareArray[index].innerHTML = "X"
                currentPlayer = "player0"
                playerDisplay.innerHTML = "Next - player0"
            } else {
                currentPlayer = "playerX"
                squareArray[index].innerHTML = "0"
                playerDisplay.innerHTML = "Next - playerX"
            }
            squareArray[index].style.cursor = "not-allowed";
            const isWin = checkWinner(index);
            if (isWin) {
                alert("Win")
            }
        }
    }

    function checkWinner(index) {
        switch (index) {
            case 0: if (squareArray[index].innerHTML === "X") {
                return (squareArray[1].innerHTML === "X" && squareArray[2].innerHTML === "X") || (squareArray[3].innerHTML === "X" && squareArray[6].innerHTML === "X") || (squareArray[4].innerHTML === "X" && squareArray[8].innerHTML === "X")
            } else {
                return (squareArray[1].innerHTML === "0" && squareArray[2].innerHTML === "0") || (squareArray[3].innerHTML === "0" && squareArray[6].innerHTML === "0") || (squareArray[4].innerHTML === "0" && squareArray[8].innerHTML === "0")
            }
            case 1: if (squareArray[index].innerHTML === "X") {
                return (squareArray[0].innerHTML === "X" && squareArray[2].innerHTML === "X") || (squareArray[4].innerHTML === "X" && squareArray[7].innerHTML === "X")
            } else {
                return (squareArray[0].innerHTML === "0" && squareArray[2].innerHTML === "0") || (squareArray[4].innerHTML === "0" && squareArray[7].innerHTML === "0")
            }
        }
    }
})