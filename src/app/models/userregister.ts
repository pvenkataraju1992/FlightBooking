export class Userregister {
    userName:string;
    password:string;
    email:string;
    contactNumber:string;
    constructor(username:string,password:string,email:string,contactnumber:string){
        this.userName=username;
        this.password=password;
        this.email = email
        this.contactNumber=contactnumber;
    }
}
