import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { YouTubeKey } from '../../components/YouTubeKey';

const Videos = () => {
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

    useEffect(() => {
        (async () => {
            axios({
                method: 'GET',
                url: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTgiTSvhYlJGwd820Y8ftOVrA&key=${YouTubeKey}`
            })
            .then(result => {
                setData1(result.data.items)
            })
            .catch(error => console.log(error));
            axios({
                method: 'GET',
                url: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTggkmM5fzYdzubMMFGqZEoiC&key=${YouTubeKey}`
            })
            .then(result => {
                setData2(result.data.items)
            })
            .catch(error => console.log(error));
            axios({
                method: 'GET',
                url: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTgjeDH9pxI4_gyLxQ-Z5itht&key=${YouTubeKey}`
            })
            .then(result => {
                setData3(result.data.items)
            })
            .catch(error => console.log(error));
            axios({
                method: 'GET',
                url: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTghUFl7kkO0p5zuE-0fzCbQ4&key=${YouTubeKey}`
            })
            .then(result => {
                setData4(result.data.items)
            })
            .catch(error => console.log(error));
            axios({
                method: 'GET',
                url: `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLUgjWZknLTghOXTGDqzhcqEUoHL5vQP2F&key=${YouTubeKey}`
            })
            .then(result => {
                setData5(result.data.items)
            })
            .catch(error => console.log(error));
        })();
    }, [])

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <h1 className="display-2 text-center text-black">My YouTube Videos</h1>
                <div className="container shadow p-3 my-5 bg-body rounded">
                    <div className="row mx-0 justify-content-center">
                        <h3 className="text-black">Collections</h3>
                        {data1.map(({ id, snippet = {} }) => {
                            const { resourceId = {} } = snippet;
                            return (
                                <div className="col-4 py-2" key={id}>
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <div className="row mx-0 justify-content-center">
                        <h3 className="text-black">Just For Fun</h3>
                        {data2.map(({ id, snippet = {} }) => {
                            const { resourceId = {} } = snippet;
                            return (
                                <div className="col-4 py-2" key={id}>
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <div className="row mx-0 justify-content-center">
                        <h3 className="text-black">Crafty Things</h3>
                        {data3.map(({ id, snippet = {} }) => {
                            const { resourceId = {} } = snippet;
                            return (
                                <div className="col-4 py-2" key={id}>
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <div className="row mx-0 justify-content-center">
                        <h3 className="text-black">Sculptures</h3>
                        {data4.map(({ id, snippet = {} }) => {
                            const { resourceId = {} } = snippet;
                            return (
                                <div className="col-4 py-2" key={id}>
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <div className="row mx-0 justify-content-center">
                        <h3 className="text-black">Journals</h3>
                        {data5.map(({ id, snippet = {} }) => {
                            const { resourceId = {} } = snippet;
                            return (
                                <div className="col-4 py-2" key={id}>
                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${resourceId.videoId}`} width="90%" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos;
