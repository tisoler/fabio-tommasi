import type { Metadata } from "next"
import { SearchParamsType } from "types"
import { CategoryView } from "views/Category/CategoryView"

export const runtime = "nodejs"

export const revalidate = 3600

interface ProductListingPageProps {
  searchParams: SearchParamsType
  params: { slug: string }
}

export async function generateMetadata({ params }: ProductListingPageProps): Promise<Metadata> {
  return {
    title: `${params.slug} | Fabio Tommasi Agro`,
    description: `Unidades de la categoría ${params.slug} | Fabio Tommasi Agro`,
  }
}

export default async function ProductListingPage({ searchParams, params }: ProductListingPageProps) {
  return <CategoryView params={params} searchParams={searchParams} />
}
