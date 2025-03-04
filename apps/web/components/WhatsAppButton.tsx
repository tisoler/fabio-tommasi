import { WHATSAPP_NUMBER } from "constants/index";
import Image from "next/image"

type WhatsAppButtonProps = {
  fijo?: boolean,
  mensaje?: string,
  dimension?: 'chico' | 'mediano' | 'grande',
}

const WhatsAppButton = ({ fijo = false, mensaje, dimension = 'grande' }: WhatsAppButtonProps) => {
  const message = encodeURIComponent(mensaje ?? 'Hola, quisiera que me contacten para hacer una consulta.');

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  const ancho = dimension === 'chico' ? 'md:w-[3rem]' : dimension === 'mediano' ? 'md:w-16' : 'md:w-[4rem]';
  const alto = dimension === 'chico' ? 'md:h-[3rem]' : dimension === 'mediano' ? 'md:h-16' : 'md:h-[4rem]';
  const padding = dimension === 'chico' ? 'p-[.6rem]' : dimension === 'mediano' ? 'p-2' : 'p-2.5';

  const anchoMobil = dimension === 'chico' ? 'w-[2.8rem]' : dimension === 'mediano' ? 'w-12' : 'w-[3.6rem]';
  const altoMobil = dimension === 'chico' ? 'h-[2.8rem]' : dimension === 'mediano' ? 'h-12' : 'h-[3.6rem]';

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className={`${fijo ? "fixed right-1 bottom-12 md:right-4 md:bottom-72" : "block"} ${anchoMobil} ${ancho} ${altoMobil} ${alto} ${padding} rounded-full bg-green-500 text-white hover:bg-green-600`}>
        <Image width={70} height={70} className="object-cover" alt="" src={`/whatsapp.svg`} />
      </button>
    </a>
  );
};

export default WhatsAppButton;
