import Link from "next/link"
import Image from "next/image"
import { ProfileMenu } from "../ProfileMenu/ProfileMenu"

export async function TopBar() {
  return (
    <header className="hidden w-full bg-color-marca py-4 md:block">
      <div className="ml-[5.8rem] lg:ml-[7.8rem] flex w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] items-center justify-between px-0 lg:px-4">
        <Link prefetch={false} href="/" className="flex items-center text-2xl lg:text-3xl text-slate-50">
          <div className="flex justify-center items-center mr-[0.4rem]">
            <Image width={35} height={35} alt="Fabio Tommasi Agro" src={"/logo.svg"} />
          </div>
          <span className="font-bold">
            Fabio Tommasi
          </span>
          <span>
            &nbsp;Agro
          </span>
        </Link>

        { /* <ProfileMenu /> */}
        <div className="hidden md:flex justify-around items-center gap-2">
          <Image width={160} height={75} className="border border-black h-[52.5px] lg:h-[63.5px] w-[120px] lg:w-[140px] p-0.5" alt="PNC remolques" src={"/pnc_logo_remolques.png"} />
          <Image width={160} height={75} className="h-[52.5px] lg:h-[63.5px] w-[134.6px] lg:w-[163.46px]" alt="Maquinarias agrícolas y remolques Ombú" src={"/ombu-logo.png"} />
          <Image width={160} height={75} className="border border-black h-[52.5px] lg:h-[63.5px] w-[120px] lg:w-[140px] p-0.5" alt="PNC remolques" src={"/pnc_logo_agro.png"} />
        </div>
      </div>
    </header>
  )
}
