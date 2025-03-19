'use client';

import HomePageFeatures from './Submodules/HomePageFeatures';
import HomePageHeroImage from './Submodules/HomePageHeroImage';
import HomePageHowItWorks from './Submodules/HomePageHowItWorks';
import HomePageNewsLetter from './Submodules/HomePageNewsLetter';
import HomePageSupports from './Submodules/HomePageSupports';
import HomePageTakeSurvey from './Submodules/HomePageTakeSurvey';

const HomePage = () => {
  return (
    <>
      <HomePageHeroImage />
      <HomePageFeatures />
      <HomePageHowItWorks />
      <HomePageSupports />
      <HomePageTakeSurvey />
      <HomePageNewsLetter />
    </>
  );
};

export default HomePage;
