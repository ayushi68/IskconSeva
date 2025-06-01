import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyDaYJwvob2yTL0QUZhKVTO0vF-UtdqR8jc';
const CHANNEL_ID = 'UCor-kmbz5UV7TYsva9WdK1Q';

interface VideoItem {
  snippet: {
    resourceId: { videoId: string };
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
  viewCount?: string;
  duration?: string;
}

interface PlaylistItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
  };
}

interface PlaylistVideoItem {
  snippet: {
    resourceId: { videoId: string };
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
  };
}

interface LiveItem {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { high: { url: string } };
    publishedAt: string;
    liveBroadcastContent: string;
  };
  statistics?: { viewCount: string };
}

interface ChannelResponse {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string;
      };
    };
  }>;
}

const Video: React.FC = () => {
  const [allVideos, setAllVideos] = useState<VideoItem[]>([]);
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);
  const [liveStreams, setLiveStreams] = useState<LiveItem[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
  const [playlistVideos, setPlaylistVideos] = useState<PlaylistVideoItem[]>([]);
  const [uploadsPlaylistId, setUploadsPlaylistId] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [playlistNextPageToken, setPlaylistNextPageToken] = useState<string | null>(null);
  const [hasMoreVideos, setHasMoreVideos] = useState<boolean>(true);
  const [hasMorePlaylistVideos, setHasMorePlaylistVideos] = useState<boolean>(true);
  const [isLoadingVideos, setIsLoadingVideos] = useState<boolean>(false);
  const [isLoadingPlaylistVideos, setIsLoadingPlaylistVideos] = useState<boolean>(false);
  const [videoFilter, setVideoFilter] = useState<'Old' | 'Popular' | 'Latest'>('Latest');
  const [shortsFilter, setShortsFilter] = useState<'Old' | 'Popular' | 'Latest'>('Latest');
  const [liveFilter, setLiveFilter] = useState<'Old' | 'Popular' | 'Latest'>('Latest');

  // Fetch uploads playlist ID
  useEffect(() => {
    const fetchUploadsPlaylistId = async () => {
      try {
        const res = await axios.get<ChannelResponse>('https://www.googleapis.com/youtube/v3/channels', {
          params: {
            key: API_KEY,
            id: CHANNEL_ID,
            part: 'contentDetails',
          },
        });
        const uploadsId = res.data.items[0]?.contentDetails.relatedPlaylists.uploads;
        setUploadsPlaylistId(uploadsId);
      } catch (err) {
        console.error('Error fetching uploads playlist ID:', err);
      }
    };
    fetchUploadsPlaylistId();
  }, []);

  // Fetch all videos from uploads playlist
  useEffect(() => {
    if (!uploadsPlaylistId) return;

    const fetchVideos = async (pageToken: string | null = null) => {
      setIsLoadingVideos(true);
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            key: API_KEY,
            playlistId: uploadsPlaylistId,
            part: 'snippet',
            maxResults: 50,
            pageToken: pageToken || undefined,
          },
        });
        const newVideos = res.data.items as VideoItem[];

        // Fetch additional details (duration, viewCount) for sorting and Shorts detection
        const videoIds = newVideos.map((video) => video.snippet.resourceId.videoId).join(',');
        const videoDetailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: API_KEY,
            id: videoIds,
            part: 'contentDetails,statistics',
          },
        });

        const detailedVideos = newVideos.map((video) => {
          const details = videoDetailsRes.data.items.find(
            (item: any) => item.id === video.snippet.resourceId.videoId
          );
          return {
            ...video,
            viewCount: details?.statistics?.viewCount,
            duration: details?.contentDetails?.duration,
          };
        });

        setAllVideos((prev) => (pageToken ? [...prev, ...detailedVideos] : detailedVideos));
        setNextPageToken(res.data.nextPageToken || null);
        setHasMoreVideos(!!res.data.nextPageToken);
      } catch (err) {
        console.error('Error fetching videos:', err);
      } finally {
        setIsLoadingVideos(false);
      }
    };

    fetchVideos();
  }, [uploadsPlaylistId]);

  // Fetch playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: 'snippet',
            maxResults: 50,
          },
        });
        setPlaylists(res.data.items);
      } catch (err) {
        console.error('Error fetching playlists:', err);
      }
    };
    fetchPlaylists();
  }, []);

  // Fetch live streams
  useEffect(() => {
    const fetchLiveStreams = async () => {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            channelId: CHANNEL_ID,
            part: 'snippet',
            eventType: 'live',
            type: 'video',
            maxResults: 50,
          },
        });
        const liveVideos = res.data.items as LiveItem[];

        // Fetch view counts for sorting
        const videoIds = liveVideos.map((video) => video.id.videoId).join(',');
        if (videoIds) {
          const videoDetailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              key: API_KEY,
              id: videoIds,
              part: 'statistics',
            },
          });
          const detailedLiveVideos = liveVideos.map((video) => {
            const details = videoDetailsRes.data.items.find(
              (item: any) => item.id === video.id.videoId
            );
            return {
              ...video,
              statistics: details?.statistics,
            };
          });
          setLiveStreams(detailedLiveVideos);
        } else {
          setLiveStreams(liveVideos);
        }
      } catch (err) {
        console.error('Error fetching live streams:', err);
        setLiveStreams([]);
      }
    };
    fetchLiveStreams();
  }, []);

  // Fetch videos from a selected playlist
  useEffect(() => {
    if (selectedPlaylistId) {
      const fetchPlaylistVideos = async (pageToken: string | null = null) => {
        setIsLoadingPlaylistVideos(true);
        try {
          const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              key: API_KEY,
              playlistId: selectedPlaylistId,
              part: 'snippet',
              maxResults: 50,
              pageToken: pageToken || undefined,
            },
          });
          const newVideos = res.data.items as PlaylistVideoItem[];
          setPlaylistVideos((prev) => (pageToken ? [...prev, ...newVideos] : newVideos));
          setPlaylistNextPageToken(res.data.nextPageToken || null);
          setHasMorePlaylistVideos(!!res.data.nextPageToken);
        } catch (err) {
          console.error('Error fetching playlist videos:', err);
          setPlaylistVideos([]);
        } finally {
          setIsLoadingPlaylistVideos(false);
        }
      };
      fetchPlaylistVideos();
    } else {
      setPlaylistVideos([]);
      setPlaylistNextPageToken(null);
      setHasMorePlaylistVideos(true);
    }
  }, [selectedPlaylistId]);

  // Load more videos for uploads playlist
  const loadMoreVideos = () => {
    if (nextPageToken && uploadsPlaylistId) {
      const fetchVideos = async () => {
        setIsLoadingVideos(true);
        try {
          const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              key: API_KEY,
              playlistId: uploadsPlaylistId,
              part: 'snippet',
              maxResults: 50,
              pageToken: nextPageToken,
            },
          });
          const newVideos = res.data.items as VideoItem[];

          const videoIds = newVideos.map((video) => video.snippet.resourceId.videoId).join(',');
          const videoDetailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              key: API_KEY,
              id: videoIds,
              part: 'contentDetails,statistics',
            },
          });

          const detailedVideos = newVideos.map((video) => {
            const details = videoDetailsRes.data.items.find(
              (item: any) => item.id === video.snippet.resourceId.videoId
            );
            return {
              ...video,
              viewCount: details?.statistics?.viewCount,
              duration: details?.contentDetails?.duration,
            };
          });

          setAllVideos((prev) => [...prev, ...detailedVideos]);
          setNextPageToken(res.data.nextPageToken || null);
          setHasMoreVideos(!!res.data.nextPageToken);
        } catch (err) {
          console.error('Error fetching more videos:', err);
        } finally {
          setIsLoadingVideos(false);
        }
      };
      fetchVideos();
    }
  };

  // Load more videos for selected playlist
  const loadMorePlaylistVideos = () => {
    if (playlistNextPageToken && selectedPlaylistId) {
      const fetchPlaylistVideos = async () => {
        setIsLoadingPlaylistVideos(true);
        try {
          const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
              key: API_KEY,
              playlistId: selectedPlaylistId,
              part: 'snippet',
              maxResults: 50,
              pageToken: playlistNextPageToken,
            },
          });
          setPlaylistVideos((prev) => [...prev, ...(res.data.items as PlaylistVideoItem[])]);
          setPlaylistNextPageToken(res.data.nextPageToken || null);
          setHasMorePlaylistVideos(!!res.data.nextPageToken);
        } catch (err) {
          console.error('Error fetching more playlist videos:', err);
        } finally {
          setIsLoadingPlaylistVideos(false);
        }
      };
      fetchPlaylistVideos();
    }
  };

  // Helper to parse ISO 8601 duration (e.g., PT1M30S)
  const parseDuration = (duration: string): number => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = parseInt(match?.[1] || '0');
    const minutes = parseInt(match?.[2] || '0');
    const seconds = parseInt(match?.[3] || '0');
    return hours * 3600 + minutes * 60 + seconds;
  };

  // Filter and sort videos
  const filteredVideos = allVideos
    .filter((video) => {
      const duration = video.duration ? parseDuration(video.duration) : 0;
      return duration >= 60; // Exclude Shorts
    })
    .filter((video) => !liveStreams.some((live) => live.id.videoId === video.snippet.resourceId.videoId))
    .sort((a, b) => {
      if (videoFilter === 'Old') {
        return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
      } else if (videoFilter === 'Popular') {
        return (parseInt(b.viewCount || '0') || 0) - (parseInt(a.viewCount || '0') || 0);
      } else {
        return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime();
      }
    });

  // Filter and sort Shorts
  const shorts = allVideos
    .filter((video) => {
      const duration = video.duration ? parseDuration(video.duration) : 0;
      return duration < 60 && duration > 0; // Shorts are typically < 60s
    })
    .sort((a, b) => {
      if (shortsFilter === 'Old') {
        return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
      } else if (shortsFilter === 'Popular') {
        return (parseInt(b.viewCount || '0') || 0) - (parseInt(a.viewCount || '0') || 0);
      } else {
        return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime();
      }
    });

  // Sort live streams
  const sortedLiveStreams = [...liveStreams].sort((a, b) => {
    if (liveFilter === 'Old') {
      return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
    } else if (liveFilter === 'Popular') {
      return (parseInt(b.statistics?.viewCount || '0') || 0) - (parseInt(a.statistics?.viewCount || '0') || 0);
    } else {
      return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime();
    }
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      {/* Embedded Video Player */}
      {selectedVideoId && (
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-300">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Videos</h2>
          <div className="space-x-2">
            {['Latest', 'Popular', 'Old'].map((filter) => (
              <button
                key={filter}
                onClick={() => setVideoFilter(filter as 'Old' | 'Popular' | 'Latest')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  videoFilter === filter
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition duration-200`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredVideos.map((video) => (
            <div
              key={video.snippet.resourceId.videoId}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-200"
              onClick={() => setSelectedVideoId(video.snippet.resourceId.videoId)}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-40 object-cover rounded-t-lg"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Video+Thumbnail';
                  }
                }}
              />
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 line-clamp-2">{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {hasMoreVideos && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMoreVideos}
              disabled={isLoadingVideos}
              className={`px-6 py-2 rounded-lg text-sm font-medium text-white ${
                isLoadingVideos ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'
              } transition duration-200`}
            >
              {isLoadingVideos ? 'Loading...' : 'Load More Videos'}
            </button>
          </div>
        )}
      </section>

      {/* Shorts Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Shorts</h2>
          <div className="space-x-2">
            {['Latest', 'Popular', 'Old'].map((filter) => (
              <button
                key={filter}
                onClick={() => setShortsFilter(filter as 'Old' | 'Popular' | 'Latest')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  shortsFilter === filter
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition duration-200`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shorts.map((video) => (
            <div
              key={video.snippet.resourceId.videoId}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-200 relative"
              onClick={() => setSelectedVideoId(video.snippet.resourceId.videoId)}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-56 object-cover rounded-t-lg"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Short+Thumbnail';
                  }
                }}
              />
              <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                Shorts
              </span>
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 line-clamp-2">{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Live</h2>
          <div className="space-x-2">
            {['Latest', 'Popular', 'Old'].map((filter) => (
              <button
                key={filter}
                onClick={() => setLiveFilter(filter as 'Old' | 'Popular' | 'Latest')}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  liveFilter === filter
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition duration-200`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sortedLiveStreams.map((video) => (
            <div
              key={video.id.videoId}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-200 relative"
              onClick={() => setSelectedVideoId(video.id.videoId)}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-40 object-cover rounded-t-lg"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Live+Thumbnail';
                  }
                }}
              />
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Live
              </span>
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 line-clamp-2">{video.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Playlists</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-200"
              onClick={() => setSelectedPlaylistId(playlist.id === selectedPlaylistId ? null : playlist.id)}
            >
              <img
                src={playlist.snippet.thumbnails.high.url}
                alt={playlist.snippet.title}
                className="w-full h-40 object-cover rounded-t-lg"
                onError={(e) => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Playlist+Thumbnail';
                  }
                }}
              />
              <div className="p-4">
                <h3 className="text-base font-medium text-gray-800 line-clamp-2">{playlist.snippet.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlist Videos Section */}
      {selectedPlaylistId && playlistVideos.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Videos in {playlists.find((p) => p.id === selectedPlaylistId)?.snippet.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {playlistVideos.map((video) => (
              <div
                key={video.snippet.resourceId.videoId}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer border border-gray-200"
                onClick={() => setSelectedVideoId(video.snippet.resourceId.videoId)}
              >
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                  onError={(e) => {
                    if (e.target instanceof HTMLImageElement) {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Video+Thumbnail';
                    }
                  }}
                />
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-800 line-clamp-2">{video.snippet.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {hasMorePlaylistVideos && (
            <div className="mt-6 text-center">
              <button
                onClick={loadMorePlaylistVideos}
                disabled={isLoadingPlaylistVideos}
                className={`px-6 py-2 rounded-lg text-sm font-medium text-white ${
                  isLoadingPlaylistVideos ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'
                } transition duration-200`}
              >
                {isLoadingPlaylistVideos ? 'Loading...' : 'Load More Playlist Videos'}
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Video;