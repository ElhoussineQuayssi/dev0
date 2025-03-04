"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import ArticleList from "@/components/admin/article-list"
import ArticleForm from "@/components/admin/article-form"
import AdminHeader from "@/components/admin/header"

export default function AdminDashboard({ articles: initialArticles }) {
  const [articles, setArticles] = useState(initialArticles)
  const [isCreating, setIsCreating] = useState(false)
  const [editingArticle, setEditingArticle] = useState(null)

  const handleCreateSuccess = (newArticle) => {
    setArticles([newArticle, ...articles])
    setIsCreating(false)
  }

  const handleUpdateSuccess = (updatedArticle) => {
    setArticles(articles.map((article) => (article.id === updatedArticle.id ? updatedArticle : article)))
    setEditingArticle(null)
  }

  const handleDeleteSuccess = (deletedId) => {
    setArticles(articles.filter((article) => article.id !== deletedId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" data-aos="fade-right">
            Article Management
          </h1>
          <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2" data-aos="fade-left">
            <PlusCircle className="h-4 w-4" />
            Create Article
          </Button>
        </div>

        {isCreating && (
          <div className="mb-8" data-aos="fade-down">
            <ArticleForm onSuccess={handleCreateSuccess} onCancel={() => setIsCreating(false)} />
          </div>
        )}

        {editingArticle && (
          <div className="mb-8" data-aos="fade-down">
            <ArticleForm
              article={editingArticle}
              onSuccess={handleUpdateSuccess}
              onCancel={() => setEditingArticle(null)}
            />
          </div>
        )}

        <div data-aos="fade-up">
          <ArticleList articles={articles} onEdit={setEditingArticle} onDeleteSuccess={handleDeleteSuccess} />
        </div>
      </main>
    </div>
  )
}

