import Link from "next/link"
import { NavItem, TextGridItem } from "../types"

interface TextGridVariantProps {
  menuItem: NavItem
  items: TextGridItem[]
}

export function TextGridVariant({ menuItem, items }: TextGridVariantProps) {
  if (!items?.length) return null

  return (
    <ul className="flex flex-col mb-10 mt-20 md:my-0">
      <li
        className="submenu__inner flex w-full flex-col text-black hover:bg-color-marca hover:text-white active:bg-color-marca active:text-white md:active:bg-white md:active:text-black"
        key={menuItem.text}
      >
        <Link href={menuItem.href || "#"}>
          <h4 className="submenu__title text-[20px] md:text-[18px]">Ver todos</h4>
        </Link>
      </li>
      {items.map((singleCategory) => (
        <li
          className="submenu__inner flex w-full flex-col text-black hover:bg-color-marca hover:text-white active:bg-color-marca active:text-white md:active:bg-white md:active:text-black"
          key={singleCategory.text}
        >
          {singleCategory.href ? (
            <Link href={singleCategory.href}>
              <h4 className="submenu__title text-[20px] md:text-[18px]">{singleCategory.text}</h4>
            </Link>
          ) : (
            <h4 className="submenu__title text-[20px] md:text-[18px]">{singleCategory.text}</h4>
          )}
          {
            singleCategory.items?.length && (
              <ul className="submenu__list flex flex-col items-start justify-start gap-2 text-left">
                {singleCategory?.items?.map((item) => (
                  <li key={item.text}>
                    <Link href={item.href} prefetch={false}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          }
        </li>
      ))}
    </ul>
  )
}
