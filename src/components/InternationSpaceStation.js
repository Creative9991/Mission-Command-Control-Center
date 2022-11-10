import React,{useMemo} from 'react';
import '../App.css';
import '../styles/internationalSpaceStation.css';
// import { Card } from 'antd';
import {useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const InternationaSpaceStation = () =>{

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <GoogleMaps/>;




    // return (
    //   <>
    //     <Card className="international-space-station">The International Space Station (ISS) is the largest modular space station currently in low Earth orbit.
    //     It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia),
    //     JAXA (Japan), ESA (Europe), and CSA (Canada).[8][9] The ownership and use of the space station is established by intergovernmental
    //     treaties and agreements.[10] The station serves as a microgravity and space environment research laboratory in which scientific research
    //     is conducted in astrobiology, astronomy, meteorology, physics, and other fields.[11][12][13] The ISS is suited for testing the spacecraft
    //     systems and equipment required for possible future long-duration missions to the Moon and Mars</Card>
    //     <div className="grid-container">
    //       <Card>
    //         <p>This is a card </p>
    //       </Card>
    //     </div>

    //   </>
    // )

}
export default InternationaSpaceStation;


const GoogleMaps = () => {

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
console.log(center);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}