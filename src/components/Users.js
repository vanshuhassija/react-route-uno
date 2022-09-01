import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    return (
        <div>
            {props.users.map(user=>{
                return <div key={user.id}>
                    <span>{user.name}</span>
                    <Link to={`/users/${user.id}`}> <button>Show Details</button></Link>
                </div>
            })}
        </div>
    );
};

export default Users;