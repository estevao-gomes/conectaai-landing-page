import garrafaGuarana from "@/assets/garrafaGuarana.png";
import lataGuarana from "@/assets/lataGuarana.png";

import { Card } from "./Card";

export function Products() {
  const infoProdutos = [
    {
      image: garrafaGuarana,
      name: "Garrafa 350ml",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      image: lataGuarana,
      name: "Garrafa 100ml",
      description: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section className="text-center">
      <div className="flex flex-col items-center md:mt-[5.5rem]">
        <h2 className="font-serif font-extrabold text-2xl mt-7">Produtos</h2>
        <h3 className="mx-12 mt-4 mb-6 font-serif max-w-[458px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          semper, tortor sed vehicula.
        </h3>
      </div>
      <div className="md:flex md:justify-center xl:mx-80 md:mt-20 mt-5">
        {infoProdutos.map((produto, index) => {
          return (
            <Card
              image={produto.image}
              name={produto.name}
              description={produto.description}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
