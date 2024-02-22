import iconClock from "/images/icon-clock.svg";
import iconethereum from "/images/icon-ethereum.svg";
import iconview from "/images/icon-view.svg";
import imageAvatar from "/images/image-avatar.png";
import imageequilibrium from "/images/image-equilibrium.jpg";

export default function App() {

  return (
    <main className="min-h-screen flex justify-center items-center bg-Verydarkblue">
      <section
        className="max-w-sm bg-Very-darkblue p-6 rounded-lg flex flex-col gap-4 relative"

      >
        <div className="relative group">
          <img
            src={imageequilibrium}
            alt=""
            className="rounded-lg w-full cursor-pointer"
          />
          <div id="bgImage" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <img src={iconview} alt="View Icon" className="text-white" />
          </div>
        </div>
        <h1 className="font-semibold text-White hover:text-Cyan cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-gray-500">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between items-center">
          <span className="flex flex-row gap-2">
            <img src={iconethereum} alt="Ethereum Icon" />
            <p className="text-Cyan">0.041 ETH</p>
          </span>
          <span className="flex flex-row gap-2 text-gray-500">
            <img src={iconClock} alt="Clock Icon" />
            <p>3 days left</p>
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex flex-row gap-2">
          <img
            src={imageAvatar}
            alt="Avatar"
            className="w-8 h-8 p-.5 bg-White rounded-full"
          />
          <span className="inline-flex gap-2 text-gray-500">
            Creation of{" "}
            <h1 className="text-White hover:text-Cyan cursor-pointer">
              Jules Wyvern
            </h1>
          </span>
        </div>
      </section>
    </main>
  );
}
