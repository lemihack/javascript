//Constructor Function

function User(username,email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} logged in`);
    }

}

const userOne = new User("Larry","fake@gmail.com")
console.log(userOne);
userOne.login();