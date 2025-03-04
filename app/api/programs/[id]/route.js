import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request, { params }) {
  try {
    const program = await db.program.findUnique({
      where: {
        id: params.id,
      },
    })

    if (!program) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 })
    }

    return NextResponse.json(program)
  } catch (error) {
    console.error("Error fetching program:", error)
    return NextResponse.json({ error: "Failed to fetch program" }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
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

    // Check if slug already exists and belongs to another program
    const existingProgram = await db.program.findUnique({
      where: {
        slug,
      },
    })

    if (existingProgram && existingProgram.id !== params.id) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 })
    }

    const program = await db.program.update({
      where: {
        id: params.id,
      },
      data: {
        slug,
        title,
        summary,
        content,
        imageUrl,
        order,
        isPublished,
      },
    })

    return NextResponse.json(program)
  } catch (error) {
    console.error("Error updating program:", error)
    return NextResponse.json({ error: "Failed to update program" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await db.program.delete({
      where: {
        id: params.id,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting program:", error)
    return NextResponse.json({ error: "Failed to delete program" }, { status: 500 })
  }
}

