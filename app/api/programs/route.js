import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get("slug")

    if (slug) {
      const program = await db.program.findUnique({
        where: {
          slug,
        },
      })

      if (!program) {
        return NextResponse.json({ error: "Program not found" }, { status: 404 })
      }

      return NextResponse.json(program)
    }

    const programs = await db.program.findMany({
      orderBy: {
        order: "asc",
      },
    })

    return NextResponse.json(programs)
  } catch (error) {
    console.error("Error fetching programs:", error)
    return NextResponse.json({ error: "Failed to fetch programs" }, { status: 500 })
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { slug, title, summary, content, imageUrl, order, isPublished } = body

    if (!slug || !title || !summary || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if slug already exists
    const existingProgram = await db.program.findUnique({
      where: {
        slug,
      },
    })

    if (existingProgram) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    const program = await db.program.create({
      data: {
        slug,
        title,
        summary,
        content,
        imageUrl: imageUrl || null,
        order: order || 0,
        isPublished: isPublished || false,
      },
    })

    return NextResponse.json(program, { status: 201 })
  } catch (error) {
    console.error("Error creating program:", error)
    return NextResponse.json({ error: "Failed to create program" }, { status: 500 })
  }
}

