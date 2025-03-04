"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Share2, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function ArticleList({ articles, onEdit, onDeleteSuccess }) {
  const [deleteId, setDeleteId] = useState(null)
  const { toast } = useToast()

  const handleDelete = async () => {
    if (!deleteId) return

    try {
      const response = await fetch(`/api/articles/${deleteId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast({
          title: "Article deleted",
          description: "The article has been successfully deleted",
        })
        onDeleteSuccess(deleteId)
      } else {
        throw new Error("Failed to delete article")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the article",
        variant: "destructive",
      })
    } finally {
      setDeleteId(null)
    }
  }

  const shareOnSocialMedia = (platform, article) => {
    let url = ""
    const text = encodeURIComponent(`Check out this article: ${article.title}`)
    const articleUrl = encodeURIComponent(`${window.location.origin}/articles/${article.id}`)

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`
        break
      case "instagram":
        // Instagram doesn't have a direct share URL, but we can show a toast
        toast({
          title: "Instagram Sharing",
          description: "Copy the link and share it on Instagram",
        })
        navigator.clipboard.writeText(`${window.location.origin}/articles/${article.id}`)
        return
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`
        break
      case "threads":
        // Threads doesn't have a direct share URL either
        toast({
          title: "Threads Sharing",
          description: "Copy the link and share it on Threads",
        })
        navigator.clipboard.writeText(`${window.location.origin}/articles/${article.id}`)
        return
      default:
        return
    }

    window.open(url, "_blank", "width=600,height=400")
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-10 border rounded-lg bg-white">
        <p className="text-muted-foreground">No articles found. Create your first article!</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-md border bg-white overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>
                  <div className="relative h-12 w-12 rounded overflow-hidden">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>{format(new Date(article.createdAt), "MMM d, yyyy")}</TableCell>
                <TableCell>{format(new Date(article.updatedAt), "MMM d, yyyy")}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" onClick={() => onEdit(article)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setDeleteId(article.id)}
                      className="text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => shareOnSocialMedia("facebook", article)}>
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareOnSocialMedia("instagram", article)}>
                          <Instagram className="h-4 w-4 mr-2" />
                          Instagram
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareOnSocialMedia("linkedin", article)}>
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareOnSocialMedia("threads", article)}>
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Threads
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the article.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

