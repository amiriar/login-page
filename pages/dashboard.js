import React, { useEffect, useState } from 'react';
import { getSession,useSession } from 'next-auth/react';

const dashboard = () => {
    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [password,setPassword] = useState("");

    const submitHnadler = async ()=>{
        const res = await fetch("/api/updateInfo", {
            method: "POST",
            body: JSON.stringify({name,lastname,password}),
            headers: {"Content-Type" : "application/json"}
        })
        const userData =  await res.json();
        console.log(userData);
    }
    

    return (
        <div style={{width: "100%", display:"flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{color: "white"}}>You Successfully Logged In !</h1>
        </div>
    );
};

export default dashboard;

export async function getServerSideProps({req}) {
    const session = await getSession({ req });
    if(!session) return{
        redirect: {destination: '/signin', permenant: false}
    }
    return{
        props: {}
    }
}