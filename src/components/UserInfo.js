import React from 'react';

const UserInfo = (user) => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={'../../assets/img/avatars/100.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </div>
                    <div className="col-6">
                        <p>Informazioni sull'utente</p>
                        <h3>{user.info.name} {user.info.surname}</h3>
                        <div className="row">>
                            <p>Email: {user.info.email} </p><button>Modifica</button>
                        </div>
                        <div className="row">>
                            <p>Password: {user.info.password} </p><button>Modifica</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserInfo;