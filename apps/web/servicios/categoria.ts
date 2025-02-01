import { unstable_cache } from "next/cache";
import { Categoria } from "types/categoria";

type DataCategoria = { data: Categoria[] }

export const obtenerCategorias = // unstable_cache(async () => {
async () => {
  const res = await fetch('http://localhost:3000/api/categorias', {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Error obteniendo categorías');
  }

  const data = await res.json() as DataCategoria;
  return data.data as Categoria[];
};
