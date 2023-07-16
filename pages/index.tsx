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

  const data = [
    { path: '/icon/electron.svg' },
    { path: '/icon/c++.svg' },
    { path: '/icon/angular.svg' },
    { path: '/icon/html.svg' },
    { path: '/icon/javascript.svg' },
    { path: '/icon/nodejs.svg' },
    { path: '/icon/react-native.svg' },
    { path: '/icon/typescript.svg' },
  ];

  interface Position {
    x: number;
    y: number;
  }

  function getEvenlyDistributedPosition(
    numPositions: number,
    imageWidth: number,
    circleRadius: number
  ): { x: number; y: number }[] {
    // Initialize an empty array to store the positions
    let positions: { x: number; y: number }[] = [];

    // Calculate the angle increment for each position
    let angleIncrement = (2 * Math.PI) / numPositions;

    // Calculate the distance from the center of the circle for each position
    let distance = circleRadius - imageWidth / 2;

    // Loop through each position and calculate the x and y coordinates
    for (let i = 0; i < numPositions; i++) {
      let angle = i * angleIncrement;
      let x = Math.cos(angle) * distance;
      let y = Math.sin(angle) * distance;
      positions.push({ x, y });
    }

    // Return the array of positions
    return positions;
  }

  const imageWidth = 100;
  const circleRadius = 400;

  const positions = getEvenlyDistributedPosition(
    data.length,
    imageWidth,
    circleRadius
  );
  console.log(positions);
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
        {data.map((item, index) => (
          <ThisCantBeReached
            key={index}
            image={item.path}
            position={positions.length ? positions[index] : undefined} // Check if positions exist
          />
        ))}
      </div>
    </>
  );
}
