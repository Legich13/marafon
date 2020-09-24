const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow){
   let str1 = (firstRow.split("а").length - 1);
   let str2 = (secondRow.split("а").length - 1);
 for (let index = 0; index < str1 ; index++) {
     if(str1 > str2) {
     return console.log(firstRow)
     } else {
     return console.log(secondRow)
     }
 }
}
getRow(firstRow, secondRow);
