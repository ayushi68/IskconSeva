import axios from 'axios';

// Function to fetch recent donations from the API
export async function fetchRecentDonations() {
  const response = await axios.get('/api/recent-donations');
  return response.data; // Assuming the API returns an array of donations
}