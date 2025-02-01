import { ChevronIcon } from "components/Icons/ChevronIcon"
import Image from "next/image"

import { cn } from "utils/cn"
import { Autocomplete } from "./Autocomplete"
import { ImageGridItem, NavItem, TextGridItem, TextImageGridItem } from "./types"
import { ImageGridVariant } from "./variants/ImageGridVariant"
import { TextGridVariant } from "./variants/TextGridVariant"
import { TextImageGridVariant } from "./variants/TextImageGridVariant"
import { CloseIcon } from "components/Icons/CloseIcon"
import { ProfileMenu } from "components/ProfileMenu/ProfileMenu"
import { SearchButton } from "./SearchButton"
import { NavigationItem } from "./NavigationItem"
import Link from "next/link"

interface NavigationBarProps {
  items: NavItem[]
}

function VariantGrid({ menuItem }: { menuItem: NavItem }) {
  if (!menuItem?.submenu) return null
  const { submenu: { items, variant } } = menuItem
  if (!items?.length || !variant) return null

  switch (variant) {
    case "text-grid":
      return <TextGridVariant menuItem={menuItem} items={items as TextGridItem[]} />
    case "image-grid":
      return <ImageGridVariant items={items as ImageGridItem[]} />
    case "text-image-grid":
      return <TextImageGridVariant items={items as TextImageGridItem[]} />
    default:
      return null
  }
}

const NavigationOption = ({ singleMenuItem }: { singleMenuItem: NavItem }) => {
  return (
    <li
      className={cn("menu__item text-black hover:bg-color-marca hover:text-white active:bg-color-marca active:text-white md:active:bg-white md:active:text-black", { menu__dropdown: !!singleMenuItem.submenu })}
      key={singleMenuItem.text}
    >
      <NavigationItem key={singleMenuItem.text} singleMenuItem={singleMenuItem} />

      <div className="submenu megamenu__text w-full border-b border-black shadow-sm">
        {
          singleMenuItem.submenu?.variant === "menu-item"
          ? (
            <ul className="mt-16 flex flex-col w-full md:flex-row md:mt-0 md:w-auto md:flex-row md:items-center md:justify-start xl:px-0">
              <li
                className={cn("menu__item text-black hover:bg-color-marca hover:text-white active:bg-color-marca active:text-white md:active:bg-white md:active:text-black", { menu__dropdown: !!singleMenuItem.submenu })}
                key={singleMenuItem.text}
              >
                <Link href={singleMenuItem.href || "#"} className="menu__link text-[20px] md:text-[18px]" prefetch={false}>
                  Ver todos
                </Link>
              </li>
              {
                singleMenuItem.submenu.items?.map((subMenuItem) => (
                  <NavigationOption key={subMenuItem.text} singleMenuItem={subMenuItem as NavItem} />
                ))
              }
            </ul>
          ) : (
            <VariantGrid menuItem={singleMenuItem} />
          ) 
        }
      </div>
    </li>
  )
}

export function NavigationBar({ items }: NavigationBarProps) {
  const itemsMarkup = items.map((singleMenuItem) => (
    <NavigationOption key={singleMenuItem.text} singleMenuItem={singleMenuItem} />
  ))

  return (
    <nav className="mega-navbar sticky top-0 z-50 mx-auto my-0 py-3 flex w-full flex-wrap content-center items-center justify-between border-b border-b-color-sec-marca bg-color-marca md:bg-white md:py-0">
      <div className="flex items-center min-h-[34px] flex justify-start pl-1 pr-4 md:mr-auto w-full md:px-0">
        <section className="navbar__left flex w-full justify-between md:hidden">
          <button className="burger" id="burger" aria-label="open menu" aria-controls="menu">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
          <a href="/" className="brand flex items-center text-xl sm:text-2xl text-white">
            <div className="flex justify-center items-center mr-[0.4rem]">
              <Image className="w-[33px] h-[33px] sm:w-[40px] sm:h-[40px]" width={30} height={30} alt="Fabio Tommasi Agro" src={"/logo.svg"} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold leading-[17px] sm:leading-[20px]">
                Fabio Tommasi
              </span>
              <span className="leading-[17px] sm:leading-[20px]">
                Agro
              </span>
            </div>
          </a>
          <div className="menu-actions right-4 flex items-center justify-center gap-2">
            <SearchButton />
          </div>
        </section>
        <section className="absolute top-0 right-3 hidden md:block h-full">
          <div className="flex justify-center items-center bg-color-marca h-full w-14">
            <Image className="fill-white" width={30} height={30} alt="Fabio Tommasi Agro" src={"/logo-blanco.svg"} />
          </div>
        </section>
        <section className="navbar__center md:justify-center lg:w-full">
          <span className="overlay"></span>
          <div className="menu w-full" id="menu">
            <div className="menu__header">
              <span className="menu__arrow">
                <i className="rotate-90">
                  <ChevronIcon />
                </i>
              </span>
              <span className="menu__title text-[20px]"></span>
            </div>
            <div className="menu__inner flex w-full justify-between">
              <ul className="mt-10 flex flex-col w-full md:flex-row md:mt-0 md:w-auto md:flex-row md:items-center md:justify-start">
                {itemsMarkup}

                <li className="mt-auto flex w-full justify-center pb-10 hidden">
                  <ProfileMenu />
                </li>
              </ul>
              <div className="relative ml-auto flex items-center">
                <button className="menu-close-button absolute right-3 top-0 bg-transparent md:hidden" aria-label="close menu" aria-controls="menu">
                  <CloseIcon className="size-5" />
                </button>
                <Autocomplete className="xl:mr-44 mr-20" />
                <div className="flex gap-2">
                  { /* <Favorites className="hidden md:flex" /> */ }
                  { /* <Cart className="hidden md:flex" /> */ }
                  { /* <ProductAddedAlert className="hidden md:block" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}
