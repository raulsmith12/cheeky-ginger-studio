import ReactPlayer from 'react-player';

const Videos = ({ data1, data2, data3, data4, data5 }) => {
    return (
        <>
            <h1 className="display-2 text-center">My YouTube Videos</h1>
            <div className="container shadow p-3 my-5 bg-body rounded">
                <div className="row justify-content-center">
                    <h3>Collections</h3>
                    {data1.items.map(({ id, snippet = {} }) => {
                        const { resourceId = {} } = snippet;

                        return (
                            <div className="col-4 py-2" key={id}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                            </div>
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <h3>Just For Fun</h3>
                    {data2.items.map(({ id, snippet = {} }) => {
                        const { resourceId = {} } = snippet;

                        return (
                            <div className="col-4 py-2" key={id}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                            </div>
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <h3>Crafty Things</h3>
                    {data3.items.map(({ id, snippet = {} }) => {
                        const { resourceId = {} } = snippet;

                        return (
                            <div className="col-4 py-2" key={id}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                            </div>
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <h3>Sculptures</h3>
                    {data4.items.map(({ id, snippet = {} }) => {
                        const { resourceId = {} } = snippet;

                        return (
                            <div className="col-4 py-2" key={id}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                            </div>
                        )
                    })}
                </div>
                <div className="row justify-content-center">
                    <h3>Journals</h3>
                    {data5.items.map(({ id, snippet = {} }) => {
                        const { resourceId = {} } = snippet;

                        return (
                            <div className="col-4 py-2" key={id}>
                                <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Videos;

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res1 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTgiTSvhYlJGwd820Y8ftOVrA&key=${process.env.YOUTUBE_API_KEY}`)
  const data1 = await res1.json();
  const res2 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTggkmM5fzYdzubMMFGqZEoiC&key=${process.env.YOUTUBE_API_KEY}`)
  const data2 = await res2.json();
  const res3 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTgjeDH9pxI4_gyLxQ-Z5itht&key=${process.env.YOUTUBE_API_KEY}`)
  const data3 = await res3.json();
  const res4 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTghUFl7kkO0p5zuE-0fzCbQ4&key=${process.env.YOUTUBE_API_KEY}`)
  const data4 = await res4.json();
  const res5 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTghOXTGDqzhcqEUoHL5vQP2F&key=${process.env.YOUTUBE_API_KEY}`)
  const data5 = await res5.json();
  return {
    props: {
      data1,
      data2,
      data3,
      data4,
      data5
    }
  }
}
