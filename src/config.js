// Configuration file for API keys and other environment variables
export const config = {
  apiKey: import.meta.env.VITE_API_KEY || '',
  // Add other configuration variables here as needed
};

// Helper function to get API key
export const getApiKey = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) {
    console.warn('API key not found in environment variables');
  }
  return apiKey;
}; 