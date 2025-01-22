import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PreviewSidebar() {
  return (
    <div className="w-80 border-l p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">Edit and preview posts per platform</h2>
        <p className="text-sm text-gray-500 mb-4">Select a platform to edit post</p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All selected platforms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All selected platforms</SelectItem>
            <SelectItem value="twitter">Twitter</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="p-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">🤔</div>
          <div>
            <h3 className="font-semibold mb-2">Did you know?</h3>
            <p className="text-sm text-gray-600 mb-4">
              You can do a lot more on this Preview area than just previewing your post!
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full" />
                Personalize content for each platform.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full" />
                Manage threads on Twitter and Threads.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full" />
                Rearrange media per platform.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-green-500 rounded-full" />
                Tag users in IG posts and Stories (images).
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 bg-orange-500 rounded-full" />
                Schedule at different times per platform (coming soon)
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

