import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, imageUrl } = body

    if (!title || !content || !imageUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const article = await db.article.create({
      data: {
        title,
        content,
        imageUrl,
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}

