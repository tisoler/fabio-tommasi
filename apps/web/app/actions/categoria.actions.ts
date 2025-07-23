"use server"

import { Categoria } from "types/categoria";
import { ProductoUnidad } from "types/unidad";

type DataCategoria = { data: Categoria[] }
type DataUnidadesCategoria = { data: ProductoUnidad[] }

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

export const obtenerUnidadesParaCategoria = // unstable_cache(async () => {
  async (slug: string) => {
    const res = await fetch(`http://localhost:3000/api/categoriaUnidades?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error('Error obteniendo unidades para categoría');
    }

    const data = await res.json() as DataUnidadesCategoria;
    return data.data as ProductoUnidad[];
};
