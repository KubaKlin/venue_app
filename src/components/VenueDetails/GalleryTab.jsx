import { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { StyledCard, GalleryContainer, GalleryImage } from './GalleryTab.styles';

export const GalleryTab = ({ venue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (venue.galleryImages.length === 3) {
    return (
      <StyledCard elevation={3}>
        <Typography variant="h6">
          No images available
        </Typography>
      </StyledCard>
    );
  }

  const slides = venue.galleryImages.map((imageUrl) => ({
    src: imageUrl,
  }));

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <StyledCard elevation={3}>
        <GalleryContainer>
          <Grid container spacing={3}>
            {venue.galleryImages.map((imageUrl, index) => (
              <Grid item key={index}>
                <GalleryImage
                  component="img"
                  image={imageUrl}
                  alt={`${venue.name} - Image ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              </Grid>
            ))}
          </Grid>
        </GalleryContainer>
      </StyledCard>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </>
  );
};
