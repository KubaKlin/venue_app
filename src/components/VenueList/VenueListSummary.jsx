import { StyledBox, StyledButton } from './VenueListSummary.styles';
import { VenuePerPageSelector } from './VenuePerPageSelector';

export const VenueListSummary = ({ itemsPerPage, onItemsPerPageChange }) => {
  return (
    <StyledBox>
      <VenuePerPageSelector
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
      />
      <StyledButton variant="text">Sort</StyledButton>
    </StyledBox>
  );
};
