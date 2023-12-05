import Boat from "./boat/Boat";
import Camp from "./camp/Camp";
import Features from "./feature/Features";
import GetApp from "./getapp/GetApp";
import Guide from "./guide/Guide";
import Hero from "./hero/Hero";


export default function Home() {
  return (
    <>
      <Hero/>
      <Camp/>
      <Guide/>
      <Boat/>
      <Features/>
      <GetApp/>  
    </>
  )
}
