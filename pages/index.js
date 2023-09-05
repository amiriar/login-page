import Link from "next/link";
import { signOut, useSession } from "next-auth/react";


export default function Home() {
  const {status} = useSession()
  const logoutHandler = () => {signOut();}
  console.log(status);
  return (
    <div>
      {status === 'authenticated' ? (<>
        <button><Link href={'/dashboard'} style={{textDecoration: "none", color:"black"}}>dashboard</Link></button>
        <button onClick={logoutHandler}>Logout</button>
        </>) : 
        <>
          <div align="center" style={{marginTop:"25px"}}>
            <h1 style={{color: "white"}}>Login or Make an Account.</h1>
            <p style={{color: "red"}}>if you wanna so the errors please check the console !</p>
          </div>

          <Link href={'/signup'} style={{textDecoration: "none", color:"black"}}><button>Register</button></Link>
          <Link href={'/signin'} style={{textDecoration: "none", color:"black"}}><button>Login</button></Link>
        </>}
      </div>
  )
}
