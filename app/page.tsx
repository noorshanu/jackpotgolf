import Hero from "./components/Hero";
import Newex from "./components/Newex";
import Perfectshot from "./components/Perfectshot";
import Precesion from "./components/Precesion";
import MasterApproch from "./components/MasterApproch";
import GolfLove from "./components/GolfLove";
import Membership from "./components/Membership";
import Contest from "./components/Contest";
import YourShot from "./components/YourShot";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Newex />
        <Perfectshot />
     
        <Precesion />
        <Contest />
        <YourShot />
        {/* <MasterApproch /> */}
        <GolfLove />
        <Membership />
      </main>
    </>
  );
}
