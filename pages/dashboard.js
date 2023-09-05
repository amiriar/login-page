import React from 'react';
import { getSession } from 'next-auth/react';

const dashboard = () => {

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