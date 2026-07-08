import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Auth API is working"
  });
}


export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      email,
      password
    } = body;


    if (!email || !password) {

      return NextResponse.json(
        {
          success: false,
          message: "Email and password required"
        },
        {
          status: 400
        }
      );

    }


    const adminEmail =
      process.env.ADMIN_EMAIL || "admin@aivoralabs.com";


    const adminPassword =
      process.env.ADMIN_PASSWORD || "admin123";


    if (
      email !== adminEmail ||
      password !== adminPassword
    ) {

      return NextResponse.json(
        {
          success:false,
          message:"Invalid credentials"
        },
        {
          status:401
        }
      );

    }


    return NextResponse.json({
      success:true,
      message:"Login successful"
    });


  } catch(error) {

    return NextResponse.json(
      {
        success:false,
        message:"Server error"
      },
      {
        status:500
      }
    );

  }

}