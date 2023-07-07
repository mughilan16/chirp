import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  console.log("Middleware runnning");
  return NextResponse.next();
})

export const config = {
  matcher : "/((?!_next/image|_next/static|favicon.ico).*)"
};
