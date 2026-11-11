import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";
import { headers } from "next/headers";

export async function  proxy(request) {
const data=await auth.api.getSession({
   headers: await headers()
})

const user=data?.user
  if(!user){
  return NextResponse.redirect(new URL('/signIn', request.url))}
  
  return NextResponse.next()

}

export const config = {
  matcher: '/course/:path*',
}