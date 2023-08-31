import Image from "next/image";

import lataGuarana from "@/assets/lataGuarana.png";

export function CTA() {
  return (
    <section className="bg-verde-600 flex flex-col items-center">
      <Image className="-mt-24 max-w-[200px] max-h-[300px]" src={lataGuarana} alt="Imagem de uma lata de guaraná." />
      <h2 className="font-serif text-2xl font-extrabold">Quer experimentar?</h2>
      <a className="w-48 h-14 mt-6 mb-16" href="#">
        <button className="bg-[#1B1F1C] w-full h-full rounded-3xl">
          <span className="text-white font-inter text-sm font-bold">
            Aqui um CTA
          </span>
        </button>
      </a>
    </section>
  );
}
