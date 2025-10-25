import {Episode, getEpisodes} from "@/data/contentful-fetch";

export default async function SeasonPage(
  { params }: { params: Promise<{ slug: string }>}
) {
  const { slug } = await params;
  const episodes = await getEpisodes(parseInt(slug));

  return <div className="flex flex-col gap-[32px] row-start-2 p-10 bg-white text-black">
    <h1>Season {slug}</h1>
    <ul>
      {episodes.map((episode: Episode) => (
        <li key={episode.sys.id}>{episode.title}</li>
      ))}
    </ul>
  </div>;
}