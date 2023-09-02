import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Button";

interface props {
  image: StaticImageData;
  name: string;
  description: string;
}

export function Card({ image, name, description }: props) {
  return (
    <div className="flex flex-col items-center mx-6 rounded-2xl border shadow-card mb-16 md:flex-1">
      <Image
        className="h-[300px] w-[200px]"
        src={image}
        alt="Imagem do produto"
      />
      <h2 className="text-xl mt-4 font-bold font-serif">{name}</h2>
      <h3 className="font-roboto mt-3 mb-[2.8rem]">{description}</h3>
      <div className="w-[11.5rem] h-[3.5rem] -mb-[1.75rem]">
        <Button contentText="Aqui um CTA" link="#" />
      </div>
    </div>
  );
}
