import { obtenerUnidadesParaCategoria } from "app/actions/categoria.actions"
import { getCollection } from "app/actions/collection.actions"
import { notFound } from "next/navigation"
import { SearchParamsType } from "types"
import { HeroSection } from "views/Category/HeroSection"
import { SearchView } from "views/Search/SearchView"

interface CategoryViewProps {
  params: { slug: string; page?: string }
  searchParams?: SearchParamsType
}

export async function CategoryView({ params, searchParams = {} }: CategoryViewProps) {
  const unidades = await obtenerUnidadesParaCategoria(params.slug);
  // const collection = await getCollection(params.slug);

  if (!unidades) return notFound()

  return (
    <SearchView
      searchParams={searchParams}
      params={params}
      collection={collection}
      intro={<HeroSection handle={collection.handle} title={collection.title} description={collection.description} image={collection.image} />}
      unidades={unidades}
    />
  )
}
