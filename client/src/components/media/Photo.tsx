import { useState, useEffect } from 'react';
import axios from 'axios';

interface Photo {
  id: string;
  title: string;
  thumbnail: string;
  fullSizeUrl: string;
  carouselUrl: string;
  uploadDate: string;
}

interface Folder {
  id: string;
  name: string;
}

const PhotoGallery: React.FC = () => {
  const [carouselPhotos, setCarouselPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedYearId, setSelectedYearId] = useState<string>('');
  const [selectedFestivalId, setSelectedFestivalId] = useState<string>('');
  const [selectedEventYearId, setSelectedEventYearId] = useState<string>('');
  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [years, setYears] = useState<Folder[]>([]);
  const [festivals, setFestivals] = useState<Folder[]>([]);
  const [eventYears, setEventYears] = useState<Folder[]>([]);
  const [events, setEvents] = useState<Folder[]>([]);

  const DRIVE_FOLDER_ID = '1WuHda4jLf22CtxeN2nF5gZehHAI6nIkT';
  const DAILY_DARSHAN_FOLDER_ID = '1WuHda4jLf22CtxeN2nF5gZehHAI6nIkT'; // Replace with actual folder ID
  const EVENT_FOLDER_ID = '1WuHda4jLf22CtxeN2nF5gZehHAI6nIkT'; // Replace with actual folder ID for events
  const API_KEY = 'AIzaSyBcui8MRgK1jfcXuZrR5AEEBGWmGFgfVXo';

  const fetchDrivePhotos = async (folderId: string): Promise<Photo[]> => {
    try {
      console.log(`Fetching photos from folder: ${folderId}`);
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
    } catch (err: any) {
      console.error('Drive API error:', err);
      setError(`Failed to fetch photos from folder ${folderId}. Please check the folder ID or API key.`);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    const loadYears = async () => {
      try {
        console.log(`Fetching years from folder: ${DRIVE_FOLDER_ID}`);
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
      } catch (err) {
        console.error('Error fetching years:', err);
        setError('Failed to fetch years. Please check the DRIVE_FOLDER_ID or API key.');
      }
    };
    loadYears();
  }, []);

  useEffect(() => {
    const loadFestivals = async () => {
      if (!selectedYearId) return;
      try {
        console.log(`Fetching festivals from year folder: ${selectedYearId}`);
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
      } catch (err) {
        console.error('Error fetching festivals:', err);
        setError('Failed to fetch festivals. Please check the selected year or API key.');
      }
    };
    loadFestivals();
  }, [selectedYearId]);

  useEffect(() => {
    const loadEventYears = async () => {
      try {
        console.log(`Fetching event years from folder: ${EVENT_FOLDER_ID}`);
        const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
          params: {
            q: `'${EVENT_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder'`,
            key: API_KEY,
            fields: 'files(id, name)',
            supportsAllDrives: true,
            includeItemsFromAllDrives: true,
          },
        });
        setEventYears(res.data.files);
      } catch (err) {
        console.error('Error fetching event years:', err);
        setError('Failed to fetch event years. Please check the EVENT_FOLDER_ID or API key.');
      }
    };
    loadEventYears();
  }, []);

  useEffect(() => {
    const loadEvents = async () => {
      if (!selectedEventYearId) return;
      try {
        console.log(`Fetching events from year folder: ${selectedEventYearId}`);
        const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
          params: {
            q: `'${selectedEventYearId}' in parents and mimeType='application/vnd.google-apps.folder'`,
            key: API_KEY,
            fields: 'files(id, name)',
            supportsAllDrives: true,
            includeItemsFromAllDrives: true,
          },
        });
        setEvents(res.data.files);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events. Please check the selected event year or API key.');
      }
    };
    loadEvents();
  }, [selectedEventYearId]);

  useEffect(() => {
    const loadPhotos = async () => {
      if (!selectedFestivalId) return;
      setLoading(true);
      const photos = await fetchDrivePhotos(selectedFestivalId);
      setCarouselPhotos(photos);
      setCurrentSlide(0); // Reset to first slide
      setLoading(false);
    };
    loadPhotos();
  }, [selectedFestivalId]);

  useEffect(() => {
    const loadEventPhotos = async () => {
      if (!selectedEventId) return;
      setLoading(true);
      const photos = await fetchDrivePhotos(selectedEventId);
      setCarouselPhotos(photos);
      setCurrentSlide(0); // Reset to first slide
      setLoading(false);
    };
    loadEventPhotos();
  }, [selectedEventId]);

  useEffect(() => {
    const loadDailyDarshanPhotos = async () => {
      if (!selectedDate) return;
      setLoading(true);
      const formattedDate = selectedDate.split('-').join('/');
      try {
        console.log(`Fetching daily darshan photos for date: ${formattedDate}`);
        const res = await axios.get('https://www.googleapis.com/drive/v3/files', {
          params: {
            q: `'${DAILY_DARSHAN_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder' and name='${formattedDate}'`,
            key: API_KEY,
            fields: 'files(id, name)',
            supportsAllDrives: true,
            includeItemsFromAllDrives: true,
          },
        });

        if (res.data.files.length > 0) {
          const folderId = res.data.files[0].id;
          const photos = await fetchDrivePhotos(folderId);
          setCarouselPhotos(photos);
          setCurrentSlide(0); // Reset to first slide
        } else {
          setCarouselPhotos([]);
          setError(`No folder found for date ${formattedDate}.`);
        }
      } catch (err) {
        console.error('Error fetching daily darshan photos:', err);
        setError(`Failed to fetch daily darshan photos for ${formattedDate}. Please check the folder ID or API key.`);
      } finally {
        setLoading(false);
      }
    };
    loadDailyDarshanPhotos();
  }, [selectedDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselPhotos.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % carouselPhotos.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselPhotos]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const yearsForCalendar = Array.from({ length: 26 }, (_, i) => 2000 + i);
  const [calendarYear, setCalendarYear] = useState<number>(new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState<number>(new Date().getMonth());

  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, () => '');

  const handleDateClick = (day: number) => {
    const formattedDate = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(formattedDate);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-800">
      {/* Full-Screen Carousel */}
      {carouselPhotos.length > 0 ? (
        <div className="w-screen h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            {carouselPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={photo.carouselUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h2 className="text-2xl md:text-4xl font-bold">{photo.title}</h2>
                    <p className="text-base md:text-lg opacity-80">
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
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {carouselPhotos.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  index === currentSlide ? 'bg-gray-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
          <p className="text-lg text-gray-600">Select an option to view photos in the carousel.</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Filter Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Calendar for Daily Darshan */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Select Darshan Date
            </h3>
            <div className="flex justify-between mb-2 gap-2">
              <select
                value={calendarMonth}
                onChange={(e) => setCalendarMonth(parseInt(e.target.value))}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 text-sm"
              >
                {months.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
              <select
                value={calendarYear}
                onChange={(e) => setCalendarYear(parseInt(e.target.value))}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 text-sm"
              >
                {yearsForCalendar.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <div key={day} className="font-medium text-gray-600 text-xs p-1 bg-gray-100 rounded">{day}</div>
              ))}
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="p-1"></div>
              ))}
              {daysArray.map((day) => (
                <div
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`p-1 rounded-md cursor-pointer text-sm ${
                    selectedDate === `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                      ? 'bg-gray-600 text-white'
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Festival Filters */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Select Festival Darshan
            </h3>
            <div className="flex flex-col gap-2">
              <select
                id="year"
                value={selectedYearId}
                onChange={(e) => {
                  setSelectedYearId(e.target.value);
                  setSelectedFestivalId('');
                }}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              >
                <option value="">Select Year</option>
                {years.map((y) => (
                  <option key={y.id} value={y.id}>{y.name}</option>
                ))}
              </select>
              <select
                id="festival"
                value={selectedFestivalId}
                onChange={(e) => setSelectedFestivalId(e.target.value)}
                disabled={!selectedYearId}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 text-sm"
              >
                <option value="">Select Festival</option>
                {festivals.map((f) => (
                  <option key={f.id} value={f.id}>{f.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Event Filters */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Filter by Event
            </h3>
            <div className="flex flex-col gap-2">
              <select
                id="event-year"
                value={selectedEventYearId}
                onChange={(e) => {
                  setSelectedEventYearId(e.target.value);
                  setSelectedEventId('');
                }}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              >
                <option value="">Select Year</option>
                {eventYears.map((y) => (
                  <option key={y.id} value={y.id}>{y.name}</option>
                ))}
              </select>
              <select
                id="event"
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                disabled={!selectedEventYearId}
                className="p-2 rounded-md border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-100 text-sm"
              >
                <option value="">Select Event</option>
                {events.map((e) => (
                  <option key={e.id} value={e.id}>{e.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-center text-lg">{error}</p>}
      </div>
    </div>
  );
};

export default PhotoGallery;