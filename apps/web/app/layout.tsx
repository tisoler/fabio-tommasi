import "./globals.css"

import nextDynamic from "next/dynamic"
import Script from "next/script"
import Image from "next/image"
import { Suspense, useMemo } from "react"
import { Toaster } from "sonner"
import { CallToAction } from "components/CallToAction/CallToAction"
import { Footer } from "components/Footer/Footer"
import { Modals } from "components/Modals/Modals"
import { mobileInlineScript } from "components/NavigationBar/mobileInlineScript"
import { NavigationBar } from "components/NavigationBar/NavigationBar"
import { NavItem, SubmenuItem, Variant } from "components/NavigationBar/types"
import { TopBar } from "components/TopBar/TopBar"
import { FlagValues } from "views/FlagValues"
import { ThirdParties } from "views/ThirdParties"
import { env } from "env.mjs"
import { Metadata } from "next"
import { EsquinaGris } from "views/EsquinaGris"
import { CartView } from "views/Cart/CartView"
import WhatsAppButton from "components/WhatsAppButton"
import { Categoria } from "types/categoria"
import { obtenerCategorias } from "servicios/categoria"

const DraftToolbar = nextDynamic(() => import("views/DraftToolbar"), { ssr: false })

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Fabio Tommasi | Agro",
  description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
  metadataBase: new URL(env.LIVE_URL!),
  openGraph: {
    title: "Fabio Tommasi | Agro",
    description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Tommasi | Agro",
    description: "Concesionario agrícola: maquinaria nueva y usada, camiones, pick-ups, autos.",
    creator: "@tisoler",
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  generator: "Next.js",
  applicationName: "fabioTommasiAgro",
}

const agregarEnSubmenuDelPadre = (itemsNavegacion: NavItem[] | SubmenuItem[], nuevoItem: NavItem) => {
  for (const item of itemsNavegacion) {
    if ('submenu' in item) {
      if (item.id === nuevoItem.idCategoriaPadre) {
        item.submenu?.items?.push(nuevoItem);
        break;
      } else if (item.submenu?.items?.length) {
        agregarEnSubmenuDelPadre(item.submenu?.items, nuevoItem);
      }
    }
  };
};

const generarItemsNavegacion = (categorias: Categoria[]): NavItem[] => {
  const itemsNavegacion: NavItem[] = [];
  categorias?.forEach((categoria) => {
    const cat = {
      id: categoria.id,
      ...(categoria.idCategoriaPadre && { idCategoriaPadre: categoria.idCategoriaPadre }),
      text: categoria.titulo,
      href: categoria.href,
      ...(categoria.tipoSubMenu && {
        submenu: {
          variant: categoria.tipoSubMenu as Variant,
          items: [],
        }
      }),
    }
    if (categoria.idCategoriaPadre) {
      agregarEnSubmenuDelPadre(itemsNavegacion, cat);
    } else {
      itemsNavegacion.push(cat);
    }
  });
  return itemsNavegacion;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categorias = await obtenerCategorias();
  const itemsNavegacion: NavItem[] = generarItemsNavegacion(categorias);
  
  return (
    <html lang="en">
      <body>
        <Script id="mobileMegaMenuLogic" strategy="lazyOnload">{`${mobileInlineScript}`}</Script>

        <TopBar />
        <NavigationBar items={itemsNavegacion} />
        <div className="flex md:hidden justify-around items-center bg-white border-b border-b-[0.1rem] py-0.5">
          <Image width={160} height={75} className="h-[52.5px] w-[130px] max-[400px]:w-[107px] px-2 max-[400px]:p-0.5 bg-color-marca" alt="PNC remolques" src={"/pnc_logo_remolques.png"} />
          <Image width={160} height={75} className="border border-black h-[52.5px] w-[134.6px] max-[400px]:w-[130px]" alt="Maquinarias agrícolas y remolques Ombú" src={"/ombu-logo.png"} />
          <Image width={160} height={75} className="h-[52.5px] w-[130px] max-[400px]:w-[107px] px-2 max-[400px]:p-0.5 bg-color-marca" alt="PNC remolques" src={"/pnc_logo_agro.png"} />
        </div>

        {children}

        <CallToAction />
        <Footer />
        <Modals />

        <CartView />

        <Toaster position="bottom-left" />

        <DraftToolbar />

        <Suspense>
          <FlagValues />
        </Suspense>

        <Suspense>
          <ThirdParties />
        </Suspense>

        <EsquinaGris />

        <WhatsAppButton fijo />
      </body>
    </html>
  )
}
