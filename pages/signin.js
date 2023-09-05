import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Signin = () => {
    const router = useRouter()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const { data, status } = useSession()

    useEffect(() => {
        if(status === "authenticated") router.replace('/dashboard')
    } , [])

    const clickHanlder = async (e) => {
        const res = await signIn("credentials", {email, password, redirect: false});
        if(!res.error) router.replace('/dashboard')
    }


    return (
        <div>
            {/* email: <input type='email' autoFocus value={email} onChange={e => setEmail(e.target.value)} />
            password: <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={clickHanlder}>Submit</button> */}

            <div>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form onSubmit={e=>e.preventDefault()}>
                    <h3>Register Your Account</h3>
                    
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Email or Username" id="username" value={email} onChange={e => setEmail(e.target.value)} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    
                    <button onClick={clickHanlder}>Sign Up</button>
                </form>
        </div>

        </div>
    );
};

export default Signin;