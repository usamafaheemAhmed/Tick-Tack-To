let Player = 1;
let Game = [["", "", ""],
            ["", "", ""],
            ["", "", ""],];

document.getElementById("PlayersTurn").innerHTML = "O";
let flag = true;

// alert("joana");

function check(number) {
    if (flag) {
        Play(number);
    }
}

function Play(TickId) {
  let id = "Tick" + TickId;
  let input = document.getElementById(id);
  // console.log(input);
  if (!input.checked && !input.disabled) {
    // alert(id)
    if (Player == 1) {
      document.getElementById(id + "O").innerHTML = "O";
      document.getElementById(id + "O").style.fontSize = "55px";
      if (TickId >= 1 && TickId <= 3) {
        // alert(TickId);
        Game[0][TickId-1] = "O";
      }
      else if (TickId >= 4 && TickId <= 6) {
        // alert(TickId);
        Game[1][TickId-4] = "O";
      }
      else if (TickId >= 7 && TickId <= 9) {
        // alert(TickId);
        Game[2][TickId-7] = "O";
      }
      
      Player = 2;
    document.getElementById("PlayersTurn").innerHTML = "X";
      
    } else {
        document.getElementById(id + "O").innerHTML = "X";
        document.getElementById(id + "O").style.fontSize = "55px";
        if (TickId >= 1 && TickId <= 3) {
            // alert(TickId);
            Game[0][TickId-1] = "X";
          }
          else if (TickId >= 4 && TickId <= 6) {
            // alert(TickId);
            Game[1][TickId-4] = "X";
          }
          else if (TickId >= 7 && TickId <= 9) {
            // alert(TickId);
            Game[2][TickId-7] = "X";
          }
        Player = 1;
        document.getElementById("PlayersTurn").innerHTML = "O";
    }
      
    // document.getElementById("PlayersTurn").innerHTML = Player;
    document.getElementById(id).disabled = true;
    document.getElementById(id).checked = true;
    //   console.log(Game);
      
    const winner = isWinner(Game);
    if (winner) {
        alert(`Player ${winner} is the winner!`);
        document.getElementById("PlayersTurn").innerHTML = winner + " is the winner!"
      // You can perform any further actions here, e.g., reset the game.
        flag = false;
    }

  }
}
function animation(loc) {
    let WinBar = document.getElementById("WinBar");
    switch (loc) {
       case "row1":
        WinBar.style.left = "30%";
        WinBar.style.top = "25%";
        WinBar.style.width = "40%";
        WinBar.style.height = "15px";
        break;
      case "row2":
        WinBar.style.left = "30%";
        WinBar.style.top = "39.3%";
        WinBar.style.width = "40%";
        WinBar.style.height = "15px";
        break;
      case "row3":
        WinBar.style.left = "30%";
        WinBar.style.top = "54%";
        WinBar.style.width = "40%";
        WinBar.style.height = "15px";
        break;
      case "col1":
        WinBar.style.left = "35.5%";
        WinBar.style.top = "19%";
        WinBar.style.height = "46%";
        WinBar.style.width = "15px";
        break;
      case "col2":
        WinBar.style.left = "49.4%";
        WinBar.style.top = "19%";
        WinBar.style.height = "46%";
        WinBar.style.width = "15px";
        break;
      case "col3":
        WinBar.style.left = "63.4%";
        WinBar.style.top = "19%";
        WinBar.style.height = "46%";
        WinBar.style.width = "15px";
        break;
      case "Dig1":
        WinBar.style.left = "50%";
        WinBar.style.top = "2px";
        WinBar.style.height = "85%";
        WinBar.style.width = "15px";
        WinBar.style.transform = "rotate(-62deg)";
        break;
      case "Dig2":
        WinBar.style.left = "50%";
        WinBar.style.top = "-10px";
        WinBar.style.height = "85%";
        WinBar.style.width = "15px";
        WinBar.style.transform = "rotate(63deg)";
        break;
    }
  }
  
  function isWinner(board) {
    // Check rows
    for (let row of board) {
      if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
        animation("row" + (board.indexOf(row) + 1));
        return row[0];
      }
    }
  
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] !== ""
      ) {
        animation("col" + (col + 1));
        return board[0][col];
      }
    }
  
    // Check diagonals
    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== ""
    ) {
      animation("Dig1");
      return board[0][0];
    }
    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== ""
    ) {
      animation("Dig2");
      return board[0][2];
    }
  
    return null;
  }
  

function reset() {
    // window.reset(true);
    location.reload(true);
  }