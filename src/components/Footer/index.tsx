import Image from "next/image";

import conectaLogo from "@/assets/marca-conecta.png";

export function Footer() {
  return (
    <footer className="bg-preto-500 text-white text-center pb-12 xl:flex xl:justify-between xl:px-40">
      <p className="text-xs opacity-30 mb-10 font-inter">
        Todos os direitos reservados © 2020 Conecta
      </p>
      <p className="flex text-sm items-center justify-center font-inter">
        Projetado por <Image src={conectaLogo} alt="Conecta logo" />
      </p>
    </footer>
  );
}
