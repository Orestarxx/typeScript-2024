interface IUser {
    id:number;
    name:string
    age:number
}
interface IInput{
    name:HTMLFormElement;
    age:HTMLFormElement;
}
class UserService {
    private static readonly _userKey = 'users';
    private static _getAll():IUser[]{
        return JSON.parse(localStorage.getItem(this._userKey)) || [{id:1,name:'Orest',age:24}];

    }
     static showAll():void{
        let mainDiv = document.getElementById('userHolder') as HTMLDivElement;
        mainDiv.innerText = '';
        let users:IUser[] = this._getAll();
          let userHtmlContent:HTMLElement[] =  users.map((user,index) =>{
              let  userDiv = document.createElement('div') as HTMLDivElement;
                  userDiv.innerText = `${user.id} - ${user.age} - ${user.name}`;
              let buttonUser = document.createElement('button')
              buttonUser.innerText = 'delete';
              buttonUser.onclick = ()=>{
                 // UserService.deleteUser(user.id);

              }
              userDiv.append(buttonUser);

              return userDiv;
          });
          if(userHtmlContent.length){
              mainDiv.append(...userHtmlContent);
          }else{
              mainDiv.innerText = 'there is no users in';
          }


    }
    static createUser(data:IUser):IUser{
       let users = this._getAll();
       let userForm = document.forms[0] as HTMLFormElement;

        userForm.onsubmit = (ev:SubmitEvent)=>{
           ev.preventDefault()
            let {name:nameInput,age:ageInput} = userForm as any as IInput;
          let newUser:IUser = UserService.createUser({id:users?.length+1,name:nameInput.value,age:+ageInput.value})
            userForm.reset()
            users.push(newUser);
          localStorage.setItem('users',JSON.stringify(users));
            UserService.showAll()
       }
       return data
    }
    private static deleteUser(id){
    let users = UserService._getAll();
    let index = users.findIndex(user =>user.id === id);
    users.splice(index,1);
    localStorage.setItem(this._userKey,JSON.stringify(users));
    UserService.showAll()
    }
}
UserService.showAll()
UserService.createUser({id:1,age:1,name:'orest'})

