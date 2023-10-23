class User {
   static id = 1;
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.id = User.id++
    }
}

class Config {
    static dbUser = "username";
    static dbPassword = "******";
    static apiToken = "pwd_mktoken:kjsdfkj1234DdFFG"
}

console.log(Config.dbUser)