const asd = function (names:string[]):string[] {
    let newArr: string[] = [];
    for (let i:number = 0; i < names.length; i++) {
        const name:string = names[i];
          let str:string =  name.toUpperCase()
        newArr.push(str)
    }
    return newArr

}
let newStr = asd(['gg','wer']);
console.log(newStr);
interface IReason {
    id:number,
    reason:string,
}
interface IUser {
    id:number,
    name:string,
    username:string,
    email:string,
    address:{
        street:string,
        suite:string,
        city:string,
        zipcode:string,
        geo:{
            lat:string,
            lng:string
        }
    },
    phone:string,
    website:string,
    company:{
        name:string,
        catchPhrase:string,
        bs:string
    }
}

let user:IUser = {
    id:1,
    name:'lenni',
    username:'',
    email:'oresto322@gmail.com',
    address:{
    street:'Bogdana Lepcogo 17',
        suite:'',
        city:'Lviv',
        zipcode:'ggg',
        geo:{
            lat:'',
            lng:''
        }
    },
phone:'123',
website:'hello',
company:{
    name:'Orest',
    catchPhrase:'take them all',
    bs:''
}};

let arrOfNum: number[] =[1,2,3,4,5,6,7,7,8,9,10];
 function count(array:number[]):number {
let counter:number = 0;
     for (const number of array) {
         counter += number;
     }
     return counter;
 }
 let countOne:number = count(arrOfNum);
console.log(countOne);
 function userPlaceHolder():Promise<IUser[]> {
  return    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users:IUser[]) => {
          console.log(users)
          for (const user of users) {
              let div:HTMLDivElement = document.createElement('div');
              div.innerText = `${user.id}`;
              document.body.append(div);
          }
          return users;
      });
 }
userPlaceHolder()
let buttonPlus:HTMLButtonElement = document.createElement('button');
buttonPlus.innerText = '+';
let buttonMinus:HTMLButtonElement = document.createElement('button');
buttonMinus.innerText = '-';
 buttonPlus.onclick = function () {
    let neCount:number = counter++;
     div.innerText = `${neCount}`;
 }
 buttonMinus.onclick = function (){
     let neCount:number = counter--;
     div.innerText = `${neCount}`;
 }
let counter:number = 0;
let div:HTMLDivElement = document.createElement('div');
div.innerText = `${counter}`;
 let hr1:HTMLElement = document.createElement('hr');
 let hr2:HTMLElement = document.createElement('hr');

 let reasonHolder = document.createElement('div');
 reasonHolder.setAttribute('id','reasonHolder');
for (let i = 0; i < 5; i++) {
    let childOfReasonHolder = document.createElement('button');
    childOfReasonHolder.classList.add('reason');
    reasonHolder.append(childOfReasonHolder);
}
 document.body.append(div,buttonPlus,buttonMinus,hr1,reasonHolder,hr2);

console.log(reasonHolder.children);
let reasonArr:{}[] =[];
console.log(reasonArr);
reasonHolder.children[0].innerHTML = 'Велика ціна послуги';
reasonHolder.children[1].innerHTML = 'Знайшли іншу платформу';
reasonHolder.children[2].innerHTML = 'Не має змоги переглядати';
reasonHolder.children[3].innerHTML = 'Нечайно нажав кнопку не бийте';
reasonHolder.children[4].innerHTML = 'Інше';
reasonHolder.children[0].addEventListener('click',()=>{
    let highPrice:IReason = {id:reasonArr.length+1,reason:reasonHolder.children[0].innerHTML};
    reasonArr.push(highPrice);

});
reasonHolder.children[1].addEventListener('click',()=>{
    let highPrice:IReason = {id:reasonArr.length+1,reason:reasonHolder.children[1].innerHTML};
    reasonArr.push(highPrice);

});
reasonHolder.children[2].addEventListener('click',()=>{
    let highPrice:IReason = {id:reasonArr.length+1,reason:reasonHolder.children[2].innerHTML};
    reasonArr.push(highPrice);

});
reasonHolder.children[3].addEventListener('click',()=>{
    let highPrice:IReason = {id:reasonArr.length+1,reason:reasonHolder.children[3].innerHTML};
    reasonArr.push(highPrice);
});


reasonHolder.children[4].addEventListener('click',():void=>{
    let highPrice:IReason = {id:reasonArr.length+1,reason:reasonHolder.children[4].innerHTML};
    reasonArr.push(highPrice);

});


console.log(Array.isArray(reasonHolder.children))
console.log(reasonHolder.children)

for (const reasonArrKey in reasonHolder.children) {
    if(typeof reasonHolder.children[reasonArrKey] === 'object'){
        console.log(reasonHolder.children[reasonArrKey]);
    }
}

