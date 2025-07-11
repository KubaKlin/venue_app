export const filterSections = [
  {
    id: 'price-range',
    title: 'price range',
    type: 'slider',
  },
  {
    id: 'amenities',
    title: 'amenities',
    type: 'checkbox',
    options: [
      { key: 'wifi', label: 'Wi-Fi' },
      { key: 'parking', label: 'Parking' },
      { key: 'pool', label: 'Pool' },
      { key: 'gym', label: 'Gym' },
      { key: 'kitchen', label: 'Kitchen' },
    ],
  },
  {
    id: 'room-amenities',
    title: 'room amenities',
    type: 'checkbox',
    options: [
      { key: 'airConditioning', label: 'Air Conditioning' },
      { key: 'tv', label: 'TV' },
      { key: 'minibar', label: 'Minibar' },
      { key: 'balcony', label: 'Balcony' },
      { key: 'bathtub', label: 'Bathtub' },
    ],
  },
  {
    id: 'neighbourhoods',
    title: 'neighbourhoods',
    type: 'checkbox',
    options: [
      { key: 'downtown', label: 'Downtown' },
      { key: 'suburb', label: 'Suburb' },
      { key: 'beachfront', label: 'Beachfront' },
      { key: 'mountains', label: 'Mountains' },
      { key: 'countryside', label: 'Countryside' },
    ],
  },
  {
    id: 'handicap-accessibility',
    title: 'handicap accessibility',
    type: 'checkbox',
    options: [
      { key: 'wheelchairAccessible', label: 'Wheelchair Accessible' },
      { key: 'elevatorAccess', label: 'Elevator Access' },
      { key: 'wideDoorways', label: 'Wide Doorways' },
      { key: 'accessibleBathroom', label: 'Accessible Bathroom' },
    ],
  },
];
