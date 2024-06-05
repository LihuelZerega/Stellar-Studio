export async function getGeolocation() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/geo');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Geolocation data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    throw error;
  }
}