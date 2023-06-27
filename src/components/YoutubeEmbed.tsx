
export default function YoutubeEmbed({embedID}: {embedID: string;}) {
    const source: string = 'https://www.youtube.com/embed/' + embedID
    return (
        <iframe
            width="100%"
            height='75%'
            src={source}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    )
}