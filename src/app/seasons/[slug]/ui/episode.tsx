import {Episode, EpisodeSource} from "@/data/contentful-fetch";

const EpisodeSourceComponent = ({ source }: { source: EpisodeSource }) => {
  return <a className="italic" href={source.url} rel="noopener noreferrer">
    {source.title}
  </a>
}

export const EpisodeComponent = ({ episode }: { episode: Episode }) => (
  <div className="flex flex-col gap-[8px]">
    <h3 className="font-bold">{episode.title}</h3>
    { episode.spotifyLink
      && <a className="italic" href={episode.spotifyLink} rel="noopener noreferrer">Spotify</a> }
    <p>{episode.description}</p>
    {episode.sourcesCollection.items.length > 0 && <p>
      Le fonti sono: {episode.sourcesCollection.items.map(
        (source, index) => (
          <span key={source.sys.id}>
            <EpisodeSourceComponent source={source} />
            {index < episode.sourcesCollection.items.length - 1 && ', '}
          </span>
        )
      )}
    </p>}
  </div>
)