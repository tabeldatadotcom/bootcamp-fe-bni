import { User } from "../Model/User";

export class UserService{

    users : User[] = [
      new User('Fahmi Rachmadian', '23', 'Bandung'),
      new User('Felix Noviantoro', '24', 'Bandung')
    ]

    GetAllUser(){
      return this.users;
    }

    CreateUser(name : string, umur : string, alamat : string){
        let user = new User(name, umur, alamat);
        this.users.push(user)
    }

}
