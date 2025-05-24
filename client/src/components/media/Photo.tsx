import { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedYearId, setSelectedYearId] = useState('');
  const [selectedFestivalId, setSelectedFestivalId] = useState('');
  const [years, setYears] = useState<any[]>([]);
  const [festivals, setFestivals] = useState<any[]>([]);

  const DRIVE_FOLDER_ID = '1WuHda4jLf22CtxeN2nF5gZehHAI6nIkT';
  const API_KEY = 'AIzaSyBcui8MRgK1jfcXuZrR5AEEBGWmGFgfVXo';

  const fetchDrivePhotos = async (folderId: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/drive/v3/files', {
        params: {
          q: `'${folderId}' in parents and (mimeType contains 'image/')`,
          key: API_KEY,
          fields: 'files(id,name,createdTime,imageMediaMetadata)',
          supportsAllDrives: true,
          includeItemsFromAllDrives: true,
          orderBy: 'createdTime desc',
        },
      });

      return response.data.files.map((file: any) => ({
        id: file.id,
        title: file.name.split('.')[0].replace(/_/g, ' '),
        thumbnail: `https://lh3.googleusercontent.com/d/${file.id}=w300-h300-p-k-nu-iv1`,
        fullSizeUrl: `https://lh3.googleusercontent.com/d/${file.id}=w1200-h1200-p-k-nu-iv1`,
        carouselUrl: `https://lh3.googleusercontent.com/d/${file.id}=w1000-h400-p-k-nu-iv1`,
        uploadDate: file.createdTime,
      }));
    } catch (err) {
      console.error('Drive API error:', err);
      throw err;
    }
  };

  useEffect(() => {
    const loadYears = async () => {
      const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
        params: {
          q: `'${DRIVE_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder'`,
          key: API_KEY,
          fields: 'files(id, name)',
          supportsAllDrives: true,
          includeItemsFromAllDrives: true,
        },
      });
      setYears(res.data.files);
    };
    loadYears();
  }, []);

  useEffect(() => {
    const loadFestivals = async () => {
      if (!selectedYearId) return;
      const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
        params: {
          q: `'${selectedYearId}' in parents and mimeType='application/vnd.google-apps.folder'`,
          key: API_KEY,
          fields: 'files(id, name)',
          supportsAllDrives: true,
          includeItemsFromAllDrives: true,
        },
      });
      setFestivals(res.data.files);
    };
    loadFestivals();
  }, [selectedYearId]);

  useEffect(() => {
    const loadPhotos = async () => {
      if (!selectedFestivalId) return;
      setLoading(true);
      const photos = await fetchDrivePhotos(selectedFestivalId);
      setPhotos(photos);
      setLoading(false);
    };
    loadPhotos();
  }, [selectedFestivalId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(photos.length, 5));
    }, 5000);
    return () => clearInterval(timer);
  }, [photos]);

  const featuredPhotos = photos.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-yellow-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Carousel */}
        {featuredPhotos.length > 0 && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-300 transform transition duration-500 hover:scale-[1.01] hover:shadow-yellow-400/40">
            <div className="relative h-64 md:h-96 w-full perspective-1000">
              {featuredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transform-gpu scale-105 rotate-x-2 rotate-y-6`}
                >
                  <img
                    src={photo.carouselUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover rounded-3xl shadow-inner shadow-black/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 md:p-8">
                    <div className="text-white">
                      <h2 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">{photo.title}</h2>
                      <p className="text-sm md:text-base opacity-80">
                        {photo.uploadDate && new Date(photo.uploadDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
              {featuredPhotos.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-yellow-400 shadow-md shadow-yellow-300' : 'bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white border-2 border-yellow-200 rounded-3xl shadow-xl p-6 md:p-10 transform transition hover:scale-[1.01] hover:shadow-yellow-300/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-600 text-center">
            📅 Filter by Year & Festival
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="year" className="text-sm font-semibold text-gray-600 mb-2">
                Select Year
              </label>
              <select
                id="year"
                value={selectedYearId}
                onChange={(e) => {
                  setSelectedYearId(e.target.value);
                  setSelectedFestivalId('');
                }}
                className="p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">-- Choose Year --</option>
                {years.map((y) => (
                  <option key={y.id} value={y.id}>{y.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="festival" className="text-sm font-semibold text-gray-600 mb-2">
                Select Festival
              </label>
              <select
                id="festival"
                value={selectedFestivalId}
                onChange={(e) => setSelectedFestivalId(e.target.value)}
                disabled={!selectedYearId}
                className="p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:bg-gray-100"
              >
                <option value="">-- Choose Festival --</option>
                {festivals.map((f) => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default PhotoGallery;
