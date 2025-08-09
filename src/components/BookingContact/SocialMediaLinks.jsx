import facebookIcon from '../../assets/facebook_ico.svg';
import instagramIcon from '../../assets/insta_ico.svg';
import twitterIcon from '../../assets/twitter_ico.svg';
import globeIcon from '../../assets/globe_ico.svg';
import { SocialMediaContainer, SocialIconButton, SocialIcon } from './SocialMediaLinks.styles';

export const SocialMediaLinks = () => {
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <SocialMediaContainer>
      <SocialIconButton
        onClick={() => handleSocialMediaClick('https://www.facebook.com')}
        aria-label="Visit Facebook"
      >
        <SocialIcon src={facebookIcon} alt="Facebook" />
      </SocialIconButton>

      <SocialIconButton
        onClick={() => handleSocialMediaClick('https://www.instagram.com')}
        aria-label="Visit Instagram"
      >
        <SocialIcon src={instagramIcon} alt="Instagram" />
      </SocialIconButton>

      <SocialIconButton
        onClick={() => handleSocialMediaClick('https://www.twitter.com')}
        aria-label="Visit Twitter"
      >
        <SocialIcon src={twitterIcon} alt="Twitter" />
      </SocialIconButton>

      <SocialIconButton
        onClick={() => handleSocialMediaClick('https://www.google.com')}
        aria-label="Visit Website"
      >
        <SocialIcon src={globeIcon} alt="Website" />
      </SocialIconButton>
    </SocialMediaContainer>
  );
};
