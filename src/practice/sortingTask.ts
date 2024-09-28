interface IUserForm {
    name:string;
    age:number;
}
interface IUser extends IUserForm{
    id:number;
}

class UserServ {
    private static readonly _usersKey = 'users';
    private static _getAll():IUser[]{
        return JSON.parse(localStorage.getItem(this._usersKey)) || [];
    }
    static create(data:IUserForm):void{
        let users = this._getAll();
        let id = users.length?users.slice(-1)[0].id+1:1;
        users.push({id,...data});
        this._setToStorage(users);

    }
    private static _setToStorage(data:IUser[]):void{
        localStorage.setItem(this._usersKey,JSON.stringify(data));

    }
    private static _deleteById(id:number):void{
        const users = this._getAll();
        const index = users.findIndex(user =>user.id === id);
        users.splice(index,1);
        this._setToStorage(users);
    }
    static showHtml():void{
       let usersContainer = document.getElementById('userContainer') as HTMLDivElement;
       usersContainer.innerText = '';
       let users = this._getAll();
       const userHtmlContent = users.map(user =>{
           const userDiv = document.createElement('div');
           const userButton = document.createElement('button');
           userButton.innerText = 'Delete';
           userButton.style.marginLeft = '5px';
           userButton.onclick = () =>{
            this._deleteById(user.id);
            this.showHtml()
           }
           userDiv.innerHTML = `<b>ID:</b> ${user.id}--<b>Name:</b> ${user.name}--<b>Age:</b> ${user.age}`;
           userDiv.appendChild(userButton);
           return userDiv;
       });
       if(userHtmlContent.length){
           usersContainer.append(...userHtmlContent);
       }else{
           usersContainer.innerHTML = '<b>There is no users,add some</b>'
       }

    }
}
UserServ.showHtml();
 let form = document.forms['userForm'] as HTMLFormElement;
interface IInput{
    name:HTMLFormElement;
    age:HTMLFormElement;

}
form.onsubmit =(ev:SubmitEvent)=>{
    ev.preventDefault()
    const {name:inputName,age:inputAge} = form as any as IInput;
    UserServ.create({name:inputName.value,age:+inputAge.value})
    form.reset()
    UserServ.showHtml()
}