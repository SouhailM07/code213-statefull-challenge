// components
import { Card } from "../../components";
// img
import spongebob from "../../assets/spongebob.jpg";
import patric from "../../assets/patrick.jpg";
import squidward from "../../assets/squidward.jpg";
import gary from "../../assets/garry.png";
import plankton from "../../assets/plankton.jpg";
import sandy from "../../assets/sandy.jpg";
import mrKrab from "../../assets/mrkrabs.jpg";
import larry from "../../assets/Larry.png";
export default function Container() {
  let images = [
    spongebob,
    patric,
    squidward,
    mrKrab,
    sandy,
    plankton,
    gary,
    larry,
  ];
  let descriptions = [
    "The cheerful and optimistic sea sponge who works at the Krusty Krab and lives in a pineapple under the sea.",
    " SpongeBob's best friend, a lovable but somewhat dim-witted pink starfish.",
    "SpongeBob's co-worker and neighbor who is an irritable and pretentious octopus.",
    " The money-loving owner of the Krusty Krab restaurant and SpongeBob and Squidward's employer.",
    "A thrill-seeking squirrel from Texas who lives underwater in a treedome and is one of SpongeBob's close friends.",
    " The main antagonist of the series, a small but highly intelligent and conniving copepod who constantly tries to steal the Krabby Patty formula.",
    " SpongeBob's beloved pet snail, who communicates with meows and has a mischievous streak.",
    " A muscular and athletic lobster who is often seen working out and participating in sports.",
  ];
  return (
    <>
      <div className=" flex flex-wrap justify-evenly">
        {images.map((e, i) => {
          return (
            <Card
              img={e}
              content={descriptions[i]}
              key={i}
              name={e.toString().slice(12, -4)}
            />
          );
        })}
      </div>
    </>
  );
}
