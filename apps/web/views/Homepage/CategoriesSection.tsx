import { Skeleton } from "components/Skeleton/Skeleton"
import Image from "next/image"
import Link from "next/link"
import { obtenerCategorias } from "servicios/categoria"
import { Categoria } from "types/categoria";

export async function CategoriesSection() {
  const data = await obtenerCategorias();
  const categorias = data?.filter((categoria: Categoria) => categoria.mostrarHome);

  if (!categorias?.length) return null

  return (
    <div className="max-w-container-md mx-auto flex w-full flex-col gap-16 px-4 py-20 md:py-32 xl:px-0">
      <div className="basis-1/3 text-center text-5xl font-normal tracking-tighter sm:min-w-[280px] md:text-left md:text-6xl">
        <h2>Categorías</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria: Categoria, index: number) => (
          <Link className="group relative h-[260px] w-full overflow-hidden rounded-2xl" key={categoria.id} href={categoria.href}>
            <div className="bg-neutral-100 transition-all group-hover:bg-neutral-50 transition-opacity duration-300 ease-in-out group-hover:opacity-50">
              <Image fill className="object-cover w-auto h-auto" alt="" src={categoria.imagenEscritorio || ""} />
            </div>
            <div className="absolute flex items-center bottom-6 h-10 p-2 pr-6 bg-color-marca group-hover:bg-white text-white group-hover:text-color-marca rounded-tr-md">
              <h3 className="left-8 text-[29px]/[18px] tracking-tight">{categoria.titulo}</h3>
              { !!categoria.esOmbu && <Image className="ml-2" width={75} height={20} alt="" src={`/ombu-logo.png`} /> }
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function CategoriesSectionSkeleton() {
  return (
    <div className="max-w-container-md mx-auto flex flex-col gap-16 px-4 py-20 md:py-32 xl:px-0">
      <div className="basis-1/3 text-center text-5xl font-normal tracking-tighter sm:min-w-[280px] md:text-left md:text-6xl">
        <h2>Shop by Category</h2>
      </div>
      <div className="group mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="relative h-[260px] w-full overflow-hidden rounded-2xl" />
        ))}
      </div>
    </div>
  )
}
