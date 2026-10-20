export interface AnimalType {
    animalID: number;
    animalName: string;
    animalPic: string;
    animalAge: string;
    animalType: string;
    animalBreed: string;
}

export async function getAnimals(): Promise<AnimalType[]> {
    const res = await fetch(
        "https://fi67.github.io/JsonData/apiAnimals.json",
        {
            cache: "force-cache",
            next: { revalidate: false }
            // change to just the below to refresh every hour
            // next: { revalidate: 3600 }
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }

    const animals: AnimalType[] = await res.json();
    return animals;
}


export async function getRandomAnimal():
  Promise<AnimalType | undefined> {

  const animals = await getAnimals();

  if (animals.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(
    Math.random() * animals.length
  );

  return animals[randomIndex];
}

