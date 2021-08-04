const date = '2020-11-26';

const dateСhange = (date) => date.split('-').reverse().join('.');

console.log(dateСhange(date));

const arr = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const faindPlace = (placeName) => {
  let = result = '';
  const regexp = new RegExp(placeName, 'img');
  
  arr.forEach((placeInfo) => {
    if(regexp.test(placeInfo.country + placeInfo.city + placeInfo.hotel)) {
      result = `country: ${placeInfo.country}, city: ${placeInfo.city}, hotel: ${placeInfo.hotel}`;
    }
  });

  return result || 'info not found ';
}

console.log(faindPlace('Germany'));