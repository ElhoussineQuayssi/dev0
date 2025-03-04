import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import HomePage from "@/components/home/home-page"

export default async function Home() {
  const session = await getServerSession(authOptions)

  // If user is logged in, they can access admin page
  if (session) {
    return <HomePage isAdmin={true} />
  }

  // Otherwise show the public homepage
  return <HomePage isAdmin={false} />
}

