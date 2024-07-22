import { gridItems } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "./bento-grid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
