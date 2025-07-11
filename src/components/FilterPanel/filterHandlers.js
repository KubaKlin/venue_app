export const createAmenityHandler = (setAmenities) => (amenity) => (event) => {
  setAmenities((prev) => ({
    ...prev,
    [amenity]: event.target.checked,
  }));
};

export const createRoomAmenityHandler = (setRoomAmenities) => (amenity) => (event) => {
  setRoomAmenities((prev) => ({
    ...prev,
    [amenity]: event.target.checked,
  }));
};

export const createNeighbourhoodHandler = (setNeighbourhoods) => (neighbourhood) => (event) => {
  setNeighbourhoods((prev) => ({
    ...prev,
    [neighbourhood]: event.target.checked,
  }));
};

export const createHandicapAccessibilityHandler = (setHandicapAccessibility) => (accessibility) => (event) => {
  setHandicapAccessibility((prev) => ({
    ...prev,
    [accessibility]: event.target.checked,
  }));
};

export const createPriceHandler = (setPriceRange) => (event, newValue) => {
  setPriceRange(newValue);
}; 