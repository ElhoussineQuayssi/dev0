import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import AdminHeader from "@/components/admin/header"

export const metadata = {
  title: "Administration - Fondation As-Salam",
  description: "Panneau d'administration de la Fondation As-Salam",
}

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="container mx-auto py-6 px-4">{children}</div>
    </div>
  )
}

