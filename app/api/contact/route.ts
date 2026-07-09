import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required",
        },
        {
          status: 400,
        }
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        company: company || null,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        contact,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}