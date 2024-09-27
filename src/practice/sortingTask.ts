interface IUser {
    name:string;
    age:number;
}
class UserServ {
    constructor(private name:string,private age:number,private id?:number) {
    }
        getName(){
        return this.name;
        }
         setName(newName:string){
         this.name = newName;
        }
        showAllUsers(){
        let users:string|IUser[] = JSON.parse(localStorage.getItem('users'))||[{name:'Halina',age:22}];
        localStorage.setItem('users',JSON.stringify(users));
        }
        setUser(newUser){
        let users = JSON.parse(localStorage.getItem('users'));
        let id = users.length+1;
            users.push({id,...newUser})
            localStorage.setItem('users',JSON.stringify(users));

        }

}
let user = new UserServ('Orest',23,);
 user.setName('Suzanna');
 console.log(user.getName());
user.showAllUsers();
user.setUser({name:'Orest',age:24});
let user1 = new UserServ('Namw',24);
user1.setUser({name:'gg',age:23});
