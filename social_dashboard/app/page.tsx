import { SidebarNav } from "@/components/sidebar-nav"
import { PostEditor } from "@/components/post-editor"
import { PreviewSidebar } from "@/components/preview-sidebar"

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <SidebarNav />
      <PostEditor />
      <PreviewSidebar />
    </div>
  )
}

