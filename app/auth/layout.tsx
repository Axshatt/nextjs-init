/* eslint-disable @typescript-eslint/ban-ts-comment */
import Navbar from "../components/Navbar";

// @ts-expect-error
export default function AuthLayout({children}){
    return <div>
        <Navbar></Navbar>
        {children}
    </div>
}