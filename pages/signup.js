import { useRouter } from 'next/router';
import { useState } from 'react';

const Signup = () => {
    const router = useRouter()

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signuphandler = async () => {
        const response = await fetch("/api/auth/signup" , {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {"Content-Type":"application/json"}
        });
        const data = await response.json()
        console.log(data);
        if(data.status === "success") router.replace('/signin')
    };



    return (
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
                    
                    <button onClick={signuphandler}>Sign Up</button>
                </form>
        </div>
    );
};

export default Signup;