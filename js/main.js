const firstRow = 'собака друг человека';
const secondRow = 'мама мыла раму';
const a = 'а';

function getRow(firstRow, secondRow) {
  function func () {
    let charCount = function( а, firstRow ) {
      for (let i = 0; i < firstRow.length; i++) {
       firstRow.charAt( i ) == а ? count++ : false; //проверяем содержится переданный символ по данному индексу, если да то инкрементируем переменную
     }
       console.log( count ); // выводим значение переменной
       count = 0; // присваиваем переменной значение 0; 
   }

  }
  function func2 () {
    let charCount1 = function( а, secondRow ) {
      for (let j = 0; j < secondRow.length; j++) {
        secondRow.charAt( j ) == а ? count++ : false; //проверяем содержится переданный символ по данному индексу, если да то инкрементируем переменную
     }
       console.log( count ); // выводим значение переменной
       count = 0; // присваиваем переменной значение 0
    }
  }
  if (func>func2) {
    console.log(firstRow);
  } else {
    console.log(secondRow);
  }
}


console.log(getRow(firstRow, secondRow)); // мама мыла раму
