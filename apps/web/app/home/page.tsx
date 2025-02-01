import { Suspense } from "react"
import { BestOffersSection } from "views/Homepage/BestOffersSection"
import { CarouselSectionSkeleton } from "views/Homepage/CarouselSection"
import { CategoriesSection, CategoriesSectionSkeleton } from "views/Homepage/CategoriesSection"
import { EverythingUnderSection } from "views/Homepage/EverythingUnderSection"
import { AnnouncementBar } from "components/AnnouncementBar/AnnouncementBar"
import { HeroSection } from "views/Homepage/HeroSection"

export const revalidate = 3600

export const dynamic = "force-static"

export const dynamicParams = true

export default function Homepage() {
  const heroTitle = "Atención y respuesta siempre en todo lugar.";

  return (
    <div className="flex w-full flex-col">
      <HeroSection className="-order-1 md:-order-2" title={heroTitle} />
      <AnnouncementBar className="-order-1" />

      <Suspense fallback={<CategoriesSectionSkeleton />}>
        <CategoriesSection />
      </Suspense>

      <Suspense fallback={<CarouselSectionSkeleton />}>
        <BestOffersSection />
      </Suspense>

      <Suspense fallback={<CarouselSectionSkeleton />}>
        <EverythingUnderSection />
      </Suspense>
    </div>
  )
}
