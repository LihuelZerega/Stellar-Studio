export async function getGeolocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) {
        throw new Error('Failed to fetch geolocation');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      return { country: 'US' };
    }
  }
  