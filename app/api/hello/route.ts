// import { NextResponse } from "next/server";

// export function GET() {
//   return NextResponse.json({
//     message: "Hello, world!",
//   });
// }
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' })
}
