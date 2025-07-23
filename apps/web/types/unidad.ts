export interface ProductoUnidad {
  id: string
  titulo: string
  descripcion: string
  descripcionHtml: SVGStringList
  imagenDestacada: PlatformImage
  imagenes: PlatformImage[]
  seo: {
    descripcion?: string | null | undefined
    titulo?: string | null | undefined
  }
}

export interface PlatformImage {
  url: string
  altText?: string | undefined | null
  width?: number | undefined | null
  height?: number | undefined | null
}
