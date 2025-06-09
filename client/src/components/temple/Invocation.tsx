import React, { useState, useMemo, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { motion, AnimatePresence } from 'framer-motion';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type PdfFile = {
  id: string;
  name: string;
  url: string;
  category: string; // Added for filtering
};

// Debounce utility
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Invocation: React.FC = () => {
  const [pdfs] = useState<PdfFile[]>([
    { id: '1', name: 'Brahma Samhita', url: '/pdfs/0001 Brahma Samhita_Eng.pdf', category: 'Stotram' },
    { id: '2', name: 'Purusa Sukta', url: '/pdfs/0001 Purusa_Sukta_Eng.pdf', category: 'Sukta' },
    { id: '3', name: 'Svasti Vacana', url: '/pdfs/0001 Svasti Vacana.pdf', category: 'Prayer' },
    { id: '4', name: 'Siksastaka Prayer', url: '/pdfs/001 Siksastaka Prayer_Eng.pdf', category: 'Prayer' },
    { id: '5', name: 'Brahma Samhita II', url: '/pdfs/002 Brahma Samhita_Eng.pdf', category: 'Stotram' },
    { id: '6', name: 'Devotional Service', url: '/pdfs/002 Devotional Service_Eng.pdf', category: 'Prayer' },
    { id: '7', name: 'Dhruva Maharaj Prayer', url: '/pdfs/003 Dhruva Maharaj Prayer_Eng.pdf', category: 'Prayer' },
    { id: '8', name: 'Gajendra Prayers', url: '/pdfs/003 Gajendra Prayers_Eng.pdf', category: 'Prayer' },
    { id: '9', name: 'Kunti Maharani Prayers', url: '/pdfs/004 Kunti Maharani Prayers_Eng.pdf', category: 'Prayer' },
    { id: '10', name: 'Sukadeva Gosvami Prayer', url: '/pdfs/004 Sukadeva Gosvami Prayer_Eng.pdf', category: 'Prayer' },
    { id: '11', name: 'Venkatesa Stotram', url: '/pdfs/005 Venkatesa Stotram_Eng.pdf', category: 'Stotram' },
    { id: '12', name: 'Venkatesa Suprabhatam', url: '/pdfs/005 Venkatesa Suprabhatam_Eng.pdf', category: 'Stotram' },
    { id: '13', name: 'Pingala’s Prayers', url: '/pdfs/006 Pingala_s Prayers_Eng.pdf', category: 'Prayer' },
    { id: '14', name: 'Prahlad Maharaj Prayer', url: '/pdfs/006 Prahlad Maharaj Prayer_Eng.pdf', category: 'Prayer' },
    { id: '15', name: 'Krishna Astottara Sata Nama', url: '/pdfs/007 Krishna Astottara Sata Nama_Eng.pdf', category: 'Nama' },
    { id: '16', name: 'Narasimha Kavacam', url: '/pdfs/007 Narasimha Kavacam_Eng.pdf', category: 'Kavacam' },
    { id: '17', name: 'BG Selected Slokas', url: '/pdfs/008 BG Selected Slokas_Eng.pdf', category: 'Sloka' },
    { id: '18', name: 'SB Selected Sloka', url: '/pdfs/008 SB Selected Sloka_Eng.pdf', category: 'Sloka' },
  ]);

  const [selectedPdf, setSelectedPdf] = useState<PdfFile | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handlePdfSelect = (pdf: PdfFile) => {
    setSelectedPdf(pdf);
    setPageNumber(1);
    setNumPages(null);
    setError(null);
    console.log('Selected PDF URL:', pdf.url);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    console.log('PDF loaded successfully:', selectedPdf?.name);
  };

  const onDocumentLoadError = (error: any) => {
    console.error('Error loading PDF:', error);
    setError(
      `Failed to load "${selectedPdf?.name}". Ensure the file exists in public/pdfs with the exact name.`
    );
  };

  const goToPrevPage = () => setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const goToNextPage = () =>
    setPageNumber((prev) => (numPages && prev < numPages ? prev + 1 : prev));

  // Filter and search PDFs
  const filteredPdfs = useMemo(() => {
    return pdfs.filter((pdf) => {
      const matchesSearch = pdf.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || pdf.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [pdfs, searchQuery, selectedCategory]);

  // Unique categories for filter dropdown
const categories = useMemo(() => {
  const uniqueCategories = Array.from(new Set(pdfs.map((pdf) => pdf.category))).sort();
  return ['All', ...uniqueCategories];
}, [pdfs]);

  // Debounced search handler
  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearchQuery(value);
      console.log('Search query:', value);
    }, 300),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white font-lora">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-merriweather font-bold mb-4">
            Invocation & Significance of Prayers
          </h1>
          <p className="text-lg md:text-xl italic">
            A devotional offering at the lotus feet of Śrī Kṛṣṇa
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className=" mx-auto px-6 py-12">
        {/* About Prayers */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <h2 className="text-2xl font-merriweather font-semibold text-indigo-700 mb-4">
              Purpose of Prayers
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Offered with love to Śrī Kṛṣṇa, the Supreme Personality.</li>
              <li>Known as Uttama-śloka, glorified by devotees’ prayers.</li>
              <li>Honor His divine forms in Goloka and Vaikuṇṭha.</li>
              <li>Awaken devotion and purify the heart.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <h2 className="text-2xl font-merriweather font-semibold text-indigo-700 mb-4">
              Benefits of Prayers
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Attract Kṛṣṇa’s mercy and achieve perfection.</li>
              <li>Assure return to Godhead through meditation.</li>
              <li>Provide deep spiritual knowledge.</li>
              <li>Please the Lord when chanted sincerely.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <h2 className="text-2xl font-merriweather font-semibold text-indigo-700 mb-4">
              Sincere Prayer
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Heartfelt expression of devotion to Kṛṣṇa.</li>
              <li>Must be truthful, not mechanical.</li>
              <li>Lord Caitanya’s Śikṣāṣṭaka emphasizes honesty.</li>
              <li>Accepted under a spiritual master’s guidance.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100">
            <h2 className="text-2xl font-merriweather font-semibold text-indigo-700 mb-4">
              Distinctive Devotion
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Personal prayers to Govinda, the Supreme.</li>
              <li>Unlike materialistic demigod worship.</li>
              <li>Śrīla Prabhupāda’s teachings emphasize surrender.</li>
              <li>Queen Kunti’s prayers exemplify humility.</li>
            </ul>
          </div>
        </motion.section>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-2xl text-indigo-900 font-merriweather italic animate-pulse">
            “Glorifying Kṛṣṇa through prayers purifies the heart and brings the soul closer to its eternal home.”
          </p>
        </motion.div>

        {/* PDF List Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-merriweather font-semibold text-indigo-700 mb-8 text-center animate-pulse">
            Sacred Prayers Collection
          </h2>

          {/* Filters and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Search prayers..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-3 rounded-full border border-indigo-200 focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="w-full sm:w-1/4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-full border border-indigo-200 focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* PDF Grid */}
          {error ? (
            <p className="text-center text-red-600 bg-red-50 p-4 rounded-lg">{error}</p>
          ) : filteredPdfs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 auto-rows-fr">
              {filteredPdfs.map((pdf, index) => (
                <motion.div
                  key={pdf.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gradient-to-b from-white to-indigo-50 rounded-2xl shadow-md cursor-pointer border-2 border-gold-300 flex flex-col items-start space-y-3"
                  onClick={() => handlePdfSelect(pdf)}
                >
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-gold-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-merriweather font-medium text-indigo-800 truncate">
                      {pdf.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">Category: {pdf.category}</p>
                  <p className="text-sm text-indigo-600 font-medium">View Prayer</p>
                  <a
                    href={pdf.url}
                    download
                    onClick={e => e.stopPropagation()}
                    className="mt-2 inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full hover:bg-indigo-700 transition"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-700 bg-gray-50 p-4 rounded-lg">No prayers found.</p>
          )}
        </motion.section>

        {/* PDF Viewer */}
        <AnimatePresence>
          {selectedPdf && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-merriweather font-semibold text-indigo-700 mb-6 text-center">
                Viewing: {selectedPdf.name}
              </h2>
              <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
                <div className="w-full max-w-3xl overflow-auto">
                  <Document
                    file={selectedPdf.url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    className="flex justify-center"
                    loading={<p className="text-gray-600">Loading prayer...</p>}
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(800, window.innerWidth - 40)}
                      renderAnnotationLayer={true}
                      renderTextLayer={true}
                      className="shadow-md"
                    />
                  </Document>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </motion.button>
                  <span className="text-gray-700">
                    Page {pageNumber} of {numPages || '...'}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={goToNextPage}
                    disabled={!numPages || pageNumber >= numPages}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedPdf(null)}
                    className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Invocation;