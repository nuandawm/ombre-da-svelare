import Image from "next/image";

interface Episode {
  title: string;
  episodeNumber: number;
  sys: {
    id: string;
  };
}

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const query = `
  query {
    episodeCollection(where: { season: 1 }, order: episodeNumber_ASC) {
      items {
        sys {
          id
        }
        title
        episodeNumber
      }
    }
  }
`;

async function getEpisodes() {
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query })
  });
  const { data } = await res.json();
  return data.episodeCollection.items;
}

export default async function Home() {
  const episodes = await getEpisodes();

  return (
    <div className="font-sans">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h3>Ombre da svelare</h3>
        <Image
          src="/next.svg"
          alt="Ombre da svelare logo"
          width={180}
          height={38}
          priority
        />
        <ul>
          {episodes.map((episode: Episode) => (
            <li key={episode.sys.id}>{episode.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}