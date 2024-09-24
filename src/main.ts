const asd = function (names:string[]) {
    for (const name of names) {
        name.toUpperCase()
    }
}
asd(['lol','hello']);

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
