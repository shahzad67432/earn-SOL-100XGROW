import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async () => {
    //@ts-ignore
    const session = await getServerSession(authOptions);
    // @ts-ignore
    if (session.user) {
        return NextResponse.json({
            // @ts-ignore
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}