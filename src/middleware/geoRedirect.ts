import { NextRequest, NextResponse } from 'next/server';
import { getGeolocation } from '../utils/geoHelper';

const countryMapping: { [key: string]: string } = {
  AR: '/ar',
  ES: '/es',
  MX: '/mx',
  US: '/us'
};

export async function geoRedirect(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/examples/onepage') ||
    pathname.startsWith('/admin/login') ||
    pathname.startsWith('/admin/dashboard/orders') ||
    pathname.startsWith('/admin/dashboard')
  ) {
    return NextResponse.next();
  }

  try {
    const geo = await getGeolocation();
    console.log('Fetched geolocation:', geo);
    const country = geo.country_code2 || 'US';
    const destination = countryMapping[country];

    console.log('Detected Country:', country);
    console.log('Destination:', destination);

    if (destination && pathname !== destination) {
      console.log(`Redirecting ${req.nextUrl} to ${destination} for country ${country}`);
      const url = new URL(destination, req.nextUrl.origin);
      return NextResponse.redirect(url);
    } else {
      console.log(`Country ${country} not in mapping or already redirected. Proceeding to ${req.nextUrl}`);
      return NextResponse.next();
    }
  } catch (error) {
    console.error('Error in geoRedirect:', error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/',
    '/ar',
    '/es',
    '/mx',
    '/us',
    '/ar/servicios/paginasweb',
    '/ar/servicios/dominios',
    '/ar/servicios/correosprofecionales',
    '/es/servicios/paginasweb',
    '/es/servicios/dominios',
    '/es/servicios/correosprofecionales',
    '/mx/servicios/paginasweb',
    '/mx/servicios/dominios',
    '/mx/servicios/correosprofecionales',
    '/us/servicios/paginasweb',
    '/us/servicios/dominios',
    '/us/servicios/correosprofecionales',
  ],
};