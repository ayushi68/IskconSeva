import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyC4Q1zit5xk0N06yrjFAZs5lJhbCwxrpqM';
const CHANNEL_ID = 'UCBVm79Jk_kyWMlzR1NJskLg';

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
}

interface PlaylistItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
}

const Video: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: 'snippet',
            order: 'date',
            maxResults: 9,
            type: 'video',
          },
        });
        setVideos(res.data.items);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };

    const fetchPlaylists = async () => {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: 'snippet',
            maxResults: 9,
          },
        });
        setPlaylists(res.data.items);
      } catch (err) {
        console.error('Error fetching playlists:', err);
      }
    };

    fetchVideos();
    fetchPlaylists();
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-purple-800 drop-shadow-lg mb-12">
        Ayushi Samaddar’s YouTube
      </h1>

      {/* Embedded Video Player */}
      {selectedVideoId && (
        <div className="mb-14 flex justify-center">
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200 transform hover:scale-[1.01] transition duration-300">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Latest Videos</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer border border-pink-100"
              onClick={() => setSelectedVideoId(video.id.videoId)}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Playlists</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              href={`https://www.youtube.com/playlist?list=${playlist.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-purple-100"
            >
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-purple-700">{playlist.snippet.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Video;
