import {Episode, getEpisodes} from "@/data/contentful-fetch";
import {Separator} from "@/app/ui/separator";
import {EpisodeComponent} from "@/app/seasons/[slug]/ui/episode";

export default async function SeasonPage(
  { params }: { params: Promise<{ slug: string }>}
) {
  const { slug } = await params;
  const episodes = await getEpisodes(parseInt(slug));

  return <div className="flex flex-col gap-[32px] row-start-2 p-10 bg-white text-black">
    <div>
      <h1 className="flex justify-center uppercase">
        Stagione {slug}
      </h1>
      <Separator />
    </div>
    <div className="flex flex-col gap-[16px]">
      {episodes.map((episode: Episode) => (
        <EpisodeComponent key={episode.sys.id} episode={episode} />
      ))}
    </div>
  </div>;
}