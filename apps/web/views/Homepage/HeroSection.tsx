import { Button } from "components/Button/Button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "utils/cn"

export function HeroSection({ title, className }: { title: string; className?: string }) {
  return (
    <div className={cn("max-w-container-xl mx-auto flex w-full flex-col-reverse justify-between lg:flex-row", className)}>
      <div className="shrink-1 flex basis-1/2 items-center justify-center bg-neutral-100 p-20">
        <Image width={800} height={800} sizes="800px" alt="Homepage featured image" priority src={"/heroe.png"} />
      </div>
      <div className="flex basis-1/2 flex-col items-center justify-start gap-16 px-4 py-20 md:items-start md:p-36">
        <h1 className="text-center text-[32px]/[32px] tracking-tighter sm:text-[77px]/[79px] md:text-left">{title}</h1>
        <Link href="https://git.new/commerce" target="_blank" prefetch={false}>
          <Button size="xl" variant="secondary" className="py-[10px] text-[21px] md:py-[28px] md:text-[23px]">
            Usados seleccionados
          </Button>
        </Link>
      </div>
    </div>
  )
}
