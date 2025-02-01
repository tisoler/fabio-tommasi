export type Categoria = {
  id: number,
  titulo: string,
  descripcion: string,
  idCategoriaPadre?: number,
  imagenEscritorio?: string,
  imagenMovil?: string,
  tipoSubMenu?: string,
  href: string,
  mostrarHome: boolean,
  esOmbu?: boolean,
}
