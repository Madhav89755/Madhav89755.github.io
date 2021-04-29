var flag=0;
var elemId;
var position;
var totalMoves = 0;

function checkWinner(){
    var c1=document.getElementById('cell1').innerText;
    var c2=document.getElementById('cell2').innerText;
    var c3=document.getElementById('cell3').innerText;
    var c4=document.getElementById('cell4').innerText;
    var c5=document.getElementById('cell5').innerText;
    var c6=document.getElementById('cell6').innerText;
    var c7=document.getElementById('cell7').innerText;
    var c8=document.getElementById('cell8').innerText;
    var c9=document.getElementById('cell9').innerText;

    if(c1==c2 && c2==c3 && (c1=='X' || c1=='O')){
        console.log('the symbol @ c1, c2, c3 is: ', c1);
        position = c1;
    }
    else{
        if(c4==c5 && c5==c6 && (c4=='X' || c4=='O')){
            console.log('the symbol @ c4, c5, c6 is: ', c4);
            position = c4;
        }
        else{
            if(c7==c8 && c8==c9 && (c7=='X' || c7=='O')){
                console.log('the symbol @ c7, c7, c9 is: ', c7);
                position = c7;
            }
            else{
                if(c1==c4 && c4==c7 && (c1=='X' || c1=='O')){
                    console.log('the symbol @ c1, c4, c7 is: ', c1);
                    position = c1;
                }
                else{
                    if(c2==c5 && c5==c8 && (c2=='X' || c2=='O')){
                        console.log('the symbol @ c2, c5, c8 is: ', c2);
                        position = c2;
                    }
                    else{
                        if(c3==c6 && c6==c9 && (c3=='X' || c3=='O')){
                            console.log('the symbol @ c3, c6, c9 is: ', c3);
                            position = c3;
                        }
                        else{
                            if(c1==c5 && c5==c9 && (c1=='X' || c1=='O')){
                                console.log('the symbol @ c1, c5, c9 is: ', c1);
                                position = c1;
                            }
                            else{
                                if(c3==c5 && c5==c7 && (c3=='X' || c3=='O')){
                                    console.log('the symbol @ c3, c5, c7 is: ', c3);
                                    position = c3;
                                }
                                else{
                                    position = 'tie';
                                }    
                            }   
                        }                       
                    }   
                }
            }                       
        }   
    }
    
    if(position == 'X'){
        window.alert('X Wons the game!!!!!');
        cellDisable();
        document.getElementById('secret').style.display='block';
    }
    else{
        if(position == 'O'){
            window.alert('O Wons the game!!!!!');
            cellDisable();
            document.getElementById('secret').style.display='block';
        }
        else{
            if(totalMoves==9 && position!='X' && position!='O'){
                window.alert('Its a draw!!!!!!!')
                document.getElementById('secret').style.display='block';
            }
            else{
                return false;
            }
        }
    }
}

function cellDisable(){

    for (let i = 1; i< 10; i++) {
        var temp='cell';
        temp=temp.concat(i);
        document.getElementById(temp).onclick=null;
        document.getElementById(temp).style.cursor='not-allowed';
    }
}


function addSymbolInDiv(elemId){
    if(flag == '0'){
        document.getElementById(elemId).innerText='X';
        flag++;
    }
    else{
        document.getElementById(elemId).innerText='O';
        flag--;
    }
    document.getElementById(elemId).onclick=null;
    document.getElementById(elemId).style.cursor='not-allowed';
    console.log('total moves made are:-', totalMoves);
    console.log('last move was made in cell:-', elemId);
    totalMoves=totalMoves+1;
    checkWinner();
}

function showSymbol(elemId){
    document.getElementById(elemId).style.color='gray';
    if(flag == '0'){
        document.getElementById(elemId).innerText='X';
        flag++;
    }
    else{
        document.getElementById(elemId).innerText='O';
        flag--;
    }
}

function resetGame(){
    // totalMoves=0;
    // var str ='cell';
    // var res;
    // for (let index = 1; index <=9; index++){
    //     res=str.concat(index);
    //     document.getElementById(res).innerHTML=' ';
    // }

    //instead of resetting the values to original just refresh the webpage
    //it will also do the same thingii

    location.reload();
    return false;
}