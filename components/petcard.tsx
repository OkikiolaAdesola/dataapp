import Image from "next/image";
import type { AnimalType } from "@/lib/pets";

interface Props {
  animal: AnimalType;
}
export default function Petcard({ animal }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold">
        {animal.animalName}
      </h2>

        <Image
          src={animal.animalPic}
          alt={animal.animalName}
          width={150}
          height={150}
        />
  <p>Age: {animal.animalAge}</p>
      <p>Type: {animal.animalType}</p>

    </div>
  );
}
