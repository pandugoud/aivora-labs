import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";


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


    // Temporary admin authentication
    // Later replace with Prisma database

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
          success: false,
          message: "Invalid credentials"
        },
        {
          status: 401
        }
      );

    }


    const token = jwt.sign(
      {
        email
      },
      process.env.JWT_SECRET || "aivora-secret",
      {
        expiresIn: "7d"
      }
    );


    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        token
      },
      {
        status: 200
      }
    );


  } catch(error) {

    console.error("Auth Error:", error);


    return NextResponse.json(
      {
        success: false,
        message: "Server error"
      },
      {
        status: 500
      }
    );

  }

}