// const userOne = {
//     username : "random",
//     email : "ramdom@site.com",
//     login(){
//         console.log("logged");
//     }
// }

// console.log(userOne.email);
// userOne.login();

// const userTwo = {
//     username : "random",
//     email : "ramdom@site.com",
//     login(){
//         console.log("logged");
//     }
// }

// console.log(userTwo.email);
// userTwo.login();


class User {
    constructor(userName,email){
        //Set Property
        this.userName = userName;
        this.userEmail = email;
        this.score = 0;
    }

    login(){
        console.log(`${this.userName} just logged in with ${this.userEmail}`);
        return this;
    }

    incscore(){
        this.score += 1;
        console.log(this.score);
        return this;
    }

    thanks(){
        console.log("Thanks For Playing..");
        
    }

}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.userName!=user.userName;
        })
    }

}


const userOne = new User("maria",'maria@secmail.com');
const userTwo = new User("larry",'larry@secmail.com');
userOne.login().incscore().incscore().thanks();
userTwo.login().incscore().incscore().thanks();
const userThree = new Admin("Legend", "Iamlegend@legendmail.com")

userThree.login().thanks();


let users = [userOne,userTwo,userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);
