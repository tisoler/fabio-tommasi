import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fabio Tommasi | Agro",
    short_name: "Fabio Tommasi | Agro",
    description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
