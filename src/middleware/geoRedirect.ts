import { NextRequest, NextResponse } from 'next/server';
import { getGeolocation } from '../utils/geoHelper';

const countryMapping: { [key: string]: string } = {
  AR: '/ar',
  ES: '/es',
  MX: '/mx',
  US: '/us'
};

export async function geoRedirect(req: NextRequest) {
  try {
    const geo = await getGeolocation();
    const country = geo.country || 'US';
    const destination = countryMapping[country];

    console.log('Detected Country:', country);
    console.log('Destination:', destination);

    if (destination && !req.nextUrl.pathname.startsWith(destination)) {
      console.log(`Redirecting ${req.nextUrl} to ${destination} for country ${country}`);
      const url = new URL(destination, req.nextUrl.origin);
      return NextResponse.redirect(url);
    } else {
      console.log(`Country ${country} not in mapping or already redirected. Proceeding to ${req.nextUrl}`);
      return NextResponse.next();
    }
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/',         
  ],
};
