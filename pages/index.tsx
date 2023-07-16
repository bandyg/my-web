import Header from '../components/Header/Header';
import Startup from '../components/Header/StartupLogo/Startup';
import MyName from '../components/Home/MyName/MyName';
import { useContext, useEffect, useState, useRef } from 'react';
import SocialMediaArround from '../components/Home/SocialMediaArround/SocialMediaArround';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import ThisCantBeReached from '../components/Home/ThisSiteCantBeReached/ThisCantBeReached';
import WhereIHaveWorked from '../components/Home/WhereIHaveWorked/WhereIHaveWorked';
import SomethingIveBuilt from '../components/Home/SomethingIveBuilt/SomethingIveBuilt';
import GetInTouch from '../components/Home/GetInTouch/GetInTouch';
import Footer from '../components/Footer/Footer';
import AppContext from '../components/AppContextFolder/AppContext';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
export default function Home() {
  interface Position {
    x: number;
    y: number;
  }

  function getRandomPosition(
    numPositions: number,
    imageWidth: number,
    circleRadius: number
  ): Position[] {
    const positions: Position[] = [];
    const minDistance = 2 * circleRadius; // Minimum distance between circles

    while (positions.length < numPositions) {
      const x = Math.random() * (imageWidth - circleRadius * 2) + circleRadius;
      const y = Math.random() * (imageWidth - circleRadius * 2) + circleRadius;
      const newPosition: Position = { x, y };

      // Check if the new position overlaps with existing positions
      const isOverlapping = positions.some((position) => {
        const distance = Math.sqrt(
          (newPosition.x - position.x) ** 2 + (newPosition.y - position.y) ** 2
        );
        return distance < minDistance;
      });

      if (!isOverlapping) {
        positions.push(newPosition);
      }
    }

    return positions;
  }
  const numPositions = 10;
  const imageWidth = 500;
  const circleRadius = 50;

  const positions = getRandomPosition(numPositions, imageWidth, circleRadius);

  console.log('Portfolio Rendered...');
  const meta = {
    title: 'Abdellatif Anaflous - Software Engineer',
    description: `I've been working on Software development for 5 years straight. Get in touch with me to know more.`,
    image: '/titofCercle.png',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="relative h-screen">
        <ThisCantBeReached imgPath="/img/titof.jpg" />
        <ThisCantBeReached imgPath="/titof.jpg" />
        <ThisCantBeReached imgPath="/titof.jpg" />
        <ThisCantBeReached imgPath="/titof.jpg" />
        <ThisCantBeReached imgPath="/titof.jpg" />
        <ThisCantBeReached imgPath="/titof.jpg" />
        {/* {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
        {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
        {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
        {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
        {context.sharedState.finishedLoading ? (
          <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
        ) : (
          <></>
        )} */}
      </div>
    </>
  );
}
