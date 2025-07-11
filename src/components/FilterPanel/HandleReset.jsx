export const HandleReset = ({
  setPriceRange,
  setAmenities,
  setRoomAmenities,
  setNeighbourhoods,
  setHandicapAccessibility,
}) => {
  return () => {
    setPriceRange([50, 500]);
    setAmenities({
      wifi: false,
      parking: false,
      pool: false,
      gym: false,
      kitchen: false,
    });
    setRoomAmenities({
      airConditioning: false,
      tv: false,
      minibar: false,
      balcony: false,
      bathtub: false,
    });
    setNeighbourhoods({
      downtown: false,
      suburb: false,
      beachfront: false,
      mountains: false,
      countryside: false,
    });
    setHandicapAccessibility({
      wheelchairAccessible: false,
      elevatorAccess: false,
      wideDoorways: false,
      accessibleBathroom: false,
    });
  };
};
