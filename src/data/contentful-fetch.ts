const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export interface Episode {
  title: string;
  episodeNumber: number;
  sys: {
    id: string;
  };
}

export interface BasicContent {
  content: string;
}

async function fetchData(query: string, collectionName: string) {
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query })
  });
  const { data } = await res.json();

  return data[collectionName].items;
}

export async function getEpisodes(season: number): Promise<Episode[]> {
  return fetchData(`
    query {
      episodeCollection(where: { season: ${season}}, order: episodeNumber_ASC) {
        items {
          sys {
            id
          }
          title
          episodeNumber
        }
      }
    }
  `, 'episodeCollection');
}

export async function getSpecificBasicContent(slug: string): Promise<BasicContent | null> {
  const items: BasicContent[] = await fetchData(`
    query {
      basicContentCollection(where: { slug: "${slug}" }) {
        items {
          content
        }
      }
    }
  `, 'basicContentCollection')

  return items.length > 0 ? items[0] : null;
}