import { cn } from "utils/cn"

export function AnnouncementBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-[40px] w-full items-center justify-center text-nowrap bg-black text-center text-lg/[18px] text-white", className)}>
      12 años de experiencia en el sector
    </div>
  )
}
