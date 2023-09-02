import Image from "next/image";

import social1 from "@/assets/social1.jpeg";
import social2 from "@/assets/social2.jpeg";

export function Social() {
  return (
    <section>
      <div className="mx-6 mt-24 mb-24 md:grid md:grid-cols-2 xl:mx-40">
        <div className="h-[32.5rem] md:h-[51rem]">
          <Image
            className="w-full h-full"
            sizes="100vw"
            src={social1}
            alt="Imagem de pessoas em um bar"
          />
        </div>
        <div className="md:h-full md:flex md:flex-col">
          <div className="flex flex-col md:flex-1 justify-center items-center h-[18rem] md:h-auto bg-preto-500">
            <p className="text-white font-serif text-center mx-9 md:mx-14 xl:mx-24">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              commodo hendrerit.”
            </p>
            <p className="font-roboto text-white text-sm mt-2 2xl:mt-6">
              @danielmaciel
            </p>
          </div>
          <div className="md:flex-1 h-[18rem] md:h-auto relative flex justify-center items-center">
            <Image
              className="w-full h-full absolute -z-10 opacity-90"
              sizes="100vw"
              src={social2}
              alt="Imagem de um bartender fazendo um drink"
            />
            <h2 className="text-white font-serif font-bold text-2xl z-10">
              Peça para seu bar
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
