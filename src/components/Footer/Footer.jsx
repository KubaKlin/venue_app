import {
  StyledFooterNav,
  StyledFooter,
  StyledFooterCopy,
  StyledFooterWrapper,
} from './Footer.styles';
import { Typography } from '@mui/material';
import { SocialMediaLinks } from '../BookingContact/SocialMediaLinks';

export const Footer = () => {
  return (
    <StyledFooter className="footer">
      <StyledFooterNav>
        <StyledFooterWrapper>
          <Typography>contact</Typography>
          <Typography>assistance</Typography>
          <Typography>about us</Typography>
        </StyledFooterWrapper>
      </StyledFooterNav>
      <StyledFooterCopy>
        Feel free to contact us in case of any problems and doubts. We are there
        for you.
      </StyledFooterCopy>
      <StyledFooterWrapper>
        <SocialMediaLinks />
      </StyledFooterWrapper>
    </StyledFooter>
  );
};
