import Image from "next/image";

import social1 from "@/assets/social1.jpeg";
import social2 from "@/assets/social2.jpeg";

export function Social() {
  return (
    <section>
      <div className="mx-6 mt-24 mb-24">
        <div className="h-[32.5rem]">
          <Image
            className="w-full h-full"
            sizes="100vw"
            src={social1}
            alt="Imagem de pessoas em um bar"
          />
        </div>
        <div className="h-[18rem] bg-slate-600">Carrosel</div>
        <div className="h-[18rem] relative flex justify-center items-center">
          <Image
            className="w-full h-full absolute -z-10 opacity-90"
            sizes="100vw"
            src={social2}
            alt="Imagem de um bartender fazendo um drink"
          />
          <h2 className="text-white font-serif font-bold text-2xl z-10">Peça para seu bar</h2>
        </div>
      </div>
    </section>
  );
}
