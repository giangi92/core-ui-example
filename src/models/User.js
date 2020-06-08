
class User{

    constructor (
        _id,
        name,
        surname,
        email,
        password,
        createdAt,
        sessionToken,
        avatarUrl
    ){
       
            this._id = _id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.password = password;
            this.createdAt = createdAt;
            this.sessionToken = sessionToken;
            this.avatarUrl = '../../assets/img/avatars/100.png';     
        
    }

    
}

export default User;