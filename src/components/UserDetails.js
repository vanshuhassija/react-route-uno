import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = (props) => {
    const [userDetails,setUserDetails]=useState(null);
    //When you have dynamic parameters in the url
    //The things that start with : in url are called params
    const params=useParams();


    useEffect(()=>{
        //Find Returns the First Occurence of the element
        const matchingUser=props.users.find(user=>user.id==params.userId);
        setUserDetails(matchingUser)
    },[])

    if(!userDetails){
        return <></>
    }

    return (
        <div>
            <h1>User Details:</h1>
            <div>Id is {userDetails.id}</div>
            <div>Name is {userDetails.name}</div>
        </div>
    );
};

export default UserDetails;