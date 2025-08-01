import { NextResponse } from "next/server";

export function GET(){

    return NextResponse.json({

        name:"Akshat",
        
        email:"akshasingh@gmail.com"

    })

}