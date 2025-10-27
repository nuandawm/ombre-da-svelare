import Image from "next/image";
import {getSpecificBasicContent} from "@/data/contentful-fetch";
import {SpotifyWidget} from "@/app/ui/spotify-widget";
import {AppleWidget} from "@/app/ui/apple-widget";
import {Socials} from "@/app/ui/socials";

export default async function Home() {
  const podcastDescription = await getSpecificBasicContent("podcast-description");

  return (
    <>
      <div className="socials flex flex-row justify-end gap-[5px] p-2 bg-black text-white">
        <Socials />
      </div>
      <div className="logo flex flex-col items-center p-10 bg-wenge">
        <Image
          className="shadow-black shadow-2xl"
          src="/ombre_logo.webp"
          alt="Ombre da svelare logo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="flex flex-col gap-[32px] row-start-2 p-10 bg-white text-black">
        { podcastDescription?.content }
      </div>
      <div className="playerWidgets flex flex-col gap-5 p-5">
        <SpotifyWidget />

        <AppleWidget />
      </div>
    </>
  );
}