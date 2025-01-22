import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  hasSubmenu?: boolean
  isNew?: boolean
}

function NavItem({ icon, label, hasSubmenu, isNew }: NavItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-between px-4 py-2 h-auto font-normal hover:bg-gray-100">
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
        {isNew && <span className="px-1.5 py-0.5 text-xs bg-green-100 text-green-700 rounded">new</span>}
      </div>
      {hasSubmenu && <ChevronDown className="h-4 w-4" />}
    </Button>
  )
}

export function SidebarNav() {
  return (
    <nav className="w-64 border-r h-screen p-2 flex flex-col">
      <div className="space-y-1">
        <Button className="w-full justify-between bg-blue-500 hover:bg-blue-600 text-white">
          <span>Create a post</span>
          <ChevronDown className="h-4 w-4" />
        </Button>

        <div className="text-sm font-medium text-gray-500 px-4 py-2">Posts</div>
        <NavItem icon={<span>📝</span>} label="Create a post" />
        <NavItem icon={<span>🤖</span>} label="Create from AI" />
        <NavItem icon={<span>📦</span>} label="Create bulk post" />
        <NavItem icon={<span>📊</span>} label="Create a poll" />

        <div className="text-sm font-medium text-gray-500 px-4 py-2">Tools</div>
        <NavItem icon={<span>📱</span>} label="Manage posts" hasSubmenu />
        <NavItem icon={<span>🖼️</span>} label="Media library" hasSubmenu />
        <NavItem icon={<span>📅</span>} label="Calendar" hasSubmenu />
        <NavItem icon={<span>⚡</span>} label="Automations" hasSubmenu />

        <div className="text-sm font-medium text-gray-500 px-4 py-2">Settings</div>
        <NavItem icon={<span>🔗</span>} label="Social Accounts" />
        <NavItem icon={<span>🏢</span>} label="Organization" hasSubmenu />

        <div className="text-sm font-medium text-gray-500 px-4 py-2">Tools</div>
        <NavItem icon={<span>🤖</span>} label="AI" hasSubmenu />
        <NavItem icon={<span>📥</span>} label="Social inbox" isNew hasSubmenu />
        <NavItem icon={<span>📊</span>} label="Analytics" hasSubmenu />
        <NavItem icon={<span>🔗</span>} label="Link tools" hasSubmenu />
      </div>

      <div className="mt-auto space-y-1">
        <NavItem icon={<span>👤</span>} label="My profile" />
        <NavItem icon={<span>💳</span>} label="Plans & billing" />
      </div>
    </nav>
  )
}

