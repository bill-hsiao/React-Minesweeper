import Cell from './Cell';

class Board {
    constructor(w, l, m) {
        this.width = w;
        this.length = l;
        this.mines = m;
        this.cells = new Array(w).fill(null);
        let i, j, board = this.cells;
        for (i = 0; i < w; i ++) {
          board[i] = [];
          for (j = 0; j < l; j ++) {
            board[i].push(new Cell())
          }
        }
        for (i = 0; i < m; i++) {
          let loc = Math.floor(Math.random() * (w * l + 1));
          let cell = this.getCellByIndex(loc);
          if (cell.mine) {
            i --;
          } else {
            cell.mine = true;
            let neighbors = this.getCellNeighbors(loc)
            // this.addNum.apply(this, neighbors)
            neighbors.forEach((a) => {
              this.addNum(a)
            })
            console.log(loc);
            console.log(neighbors);
          }
          // cell.mine ? (i --) : (cell.mine = true)
        }
    }

    getCellByColRow(c, r) {
    //  console.log(this.cells[c][r]);

      return this.cells[c][r]
    }

    getCellByIndex(index) {
      let r, c;
      r = (index % this.width)
      c = (index - r) / this.width
      return this.getCellByColRow(c, r)
    }
    getCellNeighbors(id) {
      let r = id % this.width;
      let c = (id - r) / this.width;
      let top = id - this.width;
      let topRow = [top - 1, top, top + 1]
      let midRow = [id - 1, id + 1]
      let bot = id + this.width;
      let botRow = [bot - 1, bot, bot + 1]
      let arrs;
      if (c === 0 || c === this.length - 1 || r === 0 || r === this.width - 1) {
        if (c === 0) {
          if (r === 0) {
            arrs = [midRow[1], botRow[1], botRow[2]]
          } else if (r === this.width - 1) {
            arrs = [midRow[0], botRow[0], botRow[1]]
          } else {
            arrs = [...midRow, ...botRow]
          }
        } else if (r === 0) {
          arrs = [topRow[1], topRow[2], midRow[1], botRow[1], botRow[2]]
        } else if (r === this.width - 1) {
          arrs = [topRow[0], topRow[1], midRow[0], botRow[0], botRow[1]]
        } else if (c === this.length - 1) {
          if (r === 0) {
            arrs = [topRow[1], topRow[2], midRow[1]]
          } else if (r === this.width - 1) {
            arrs = [topRow[0], topRow[1], midRow[0]]
          } else {
            arrs = [...topRow, ...midRow]
          }
        }
      } else {
        arrs = [...topRow, ...midRow, ...botRow]
      }
      return arrs
    }
    setFlag(cell) {
      this.cell.flagged = true;
    }
    addNum(id) {
      let cell = this.getCellByIndex(id);
      cell.num = cell.num + 1;
    }
    // check(id) {
    //   let cell = this.getCellByIndex(id);
    //   if (cell.mine) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // }
    reveal(id) {
      console.log(id);
      //onsole.log(this);
      let cell = this.getCellByIndex(id);
      // console.log(cell);
      if (cell.num === 0 && !cell.revealed) {
        let neighbors = this.getCellNeighbors(id)
         this.reveal.apply(this, neighbors)

      }
      console.log(cell);
      if (cell.revealed || cell.flagged) {
        return cell
      }
      if (cell.mine) {
        cell.revealed = true;
        cell.display = "💣";
        //reveal board
        return cell//reveal board
      }
      if (!cell.mine && !cell.flagged && !cell.revealed && cell.num > 0) {
        cell.revealed = true;
        let neighbors = this.getCellNeighbors(id)
        // cell.num += (this.check.apply(this, neighbors))
        // console.log(this);
        // console.log(neighbors);

      //  this.reveal.apply(this, neighbors)
      }
      return cell
    }



}
export default Board;
