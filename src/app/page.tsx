import Image from "next/image";
import {Social} from "@/app/ui/social";
import {getSpecificBasicContent} from "@/data/contentful-fetch";
import {MenuButton} from "@/app/ui/MenuButton";

export default async function Home() {
  // const episodes = await getEpisodes();
  const podcastDescription = await getSpecificBasicContent("podcast-description");

  return (
    <div className="font-sans">
      <div className={"socials flex flex-row justify-end gap-[5px] p-2 bg-black"}>
        <Social iconName={"facebook"} />
        <Social iconName={"instagram"} />
        <Social iconName={"email"} />
      </div>
      <header className="flex flex-row justify-between p-5 bg-indigo-950">
        <h1>Ombre da svelare</h1>
        <MenuButton />
      </header>
      <div className="logo flex flex-col items-center p-10 bg-black">
        <Image
          src="/ombre_logo.webp"
          alt="Ombre da svelare logo"
          width={300}
          height={300}
          priority
        />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 p-10 bg-white text-black">
        { podcastDescription?.content }
        {/*
         <ul>
          {episodes.map((episode: Episode) => (
            <li key={episode.sys.id}>{episode.title}</li>
          ))}
        </ul>
         */}
      </main>
    </div>
  );
}