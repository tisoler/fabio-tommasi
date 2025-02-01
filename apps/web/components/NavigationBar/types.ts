export interface NavItem {
  id?: number,
  idCategoriaPadre?: number,
  text: string
  href?: string
  submenu?: Submenu
}

export type Variant = "menu-item" | "text-grid" | "image-grid" | "text-image-grid";
interface Submenu {
  variant: Variant
  items: SubmenuItem[]
}

export interface TextGridItem {
  id?: number,
  idCategoriaPadre?: number,
  text: string
  href?: string
  items: Array<{ text: string; href: string }>
}

export interface ImageGridItem {
  id?: number,
  idCategoriaPadre?: number,
  href: string
  image: string
  text: string
}

export interface TextImageGridItem {
  id?: number,
  idCategoriaPadre?: number,
  href?: string
  image?: string
  text?: string
}

export type SubmenuItem = NavItem | TextGridItem | ImageGridItem | TextImageGridItem
