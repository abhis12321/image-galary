import { NextResponse } from "next/server";


export async function GET() {
    try {
        return NextResponse.json({success:true, message:"Successful"});
    } catch(error) {
        return NextResponse.json({success:false, message:error.message});
    }
}