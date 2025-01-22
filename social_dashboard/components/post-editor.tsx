"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function PostEditor() {
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-500 rounded-full text-white flex items-center justify-center">R</div>
        <h1 className="text-xl font-semibold">Create a post</h1>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All platforms</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <textarea
          placeholder="Write once, publish everywhere"
          className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center gap-4 mt-4">
          <Button variant="outline" className="gap-2">
            <span>📎</span>
            Add media
          </Button>

          <div className="flex items-center gap-2">
            <Switch id="shorten" />
            <label htmlFor="shorten" className="text-sm">
              Shorten links
            </label>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Switch id="publish" defaultChecked />
            <label htmlFor="publish" className="text-sm">
              Publish now
            </label>
          </div>

          <Button variant="outline" className="gap-2">
            <span>📅</span>
            Schedule post
          </Button>

          <Button variant="outline" className="gap-2">
            <span>🔄</span>
            Set recurring post
          </Button>

          <Button variant="outline" className="gap-2">
            <span>📢</span>
            Campaign
          </Button>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <Button variant="outline">Save to drafts</Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Publish</Button>
        </div>
      </Card>
    </div>
  )
}

