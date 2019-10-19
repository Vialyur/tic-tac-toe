class TicTacToe {
    constructor() {
        this._matrix = [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                                            ];
        this._playerLabel = "x";
        this._win = false;
        this._winner = null;
        
    } 

    getCurrentPlayerSymbol() {
        return this._playerLabel;
    }

    nextTurn(rowIndex, columnIndex) {
       
        let sameLabelInRow = 0;
        let sameLabelInColumn = 0;
        let sameLabelInDiagOne = 0;
        let sameLabelInDiagTwo = 0;
        

        if(this._matrix[rowIndex][columnIndex] !== null) {
            return false
        } else {this._matrix[rowIndex][columnIndex] = this._playerLabel;}

        for (let i = 0; i < this._matrix.length; i++) {
            for (let j = 0; j < this._matrix[i].length; j++) {
                if(this._matrix[i][j] == this._playerLabel) {
                    sameLabelInRow++;
                }
                if(this._matrix[j][i] == this._playerLabel) {
                    sameLabelInColumn++;
                }
                if(this._matrix[j][j] == this._playerLabel) {
                    sameLabelInDiagOne++;
                }
                if(this._matrix[j][(this._matrix.length - 1) - j] == this._playerLabel) {
                    sameLabelInDiagTwo++;
                }
                
            }
             
            if(sameLabelInRow == this._matrix.length || sameLabelInColumn == this._matrix.length || sameLabelInDiagOne == this._matrix.length || sameLabelInDiagTwo == this._matrix.length) {
                this._win = true;
                this._winner = this._playerLabel;
            }      
            
            sameLabelInRow = 0;
            sameLabelInColumn = 0;
            sameLabelInDiagOne = 0;
            sameLabelInDiagTwo = 0;


        }

        (this._playerLabel == "x") ? (this._playerLabel = "o") : (this._playerLabel = "x");
         
    }

    isFinished() {
        return (this._win || this.isDraw());
    }

    getWinner() {
        return this._winner;
    }

    noMoreTurns() {
        
        for (let i = 0; i < this._matrix.length; i++) {
            for (let j = 0; j < this._matrix[i].length; j++) {
                if(this._matrix[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && this._win === false); 
    }

    getFieldValue(rowIndex, colIndex) {
        return this._matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
