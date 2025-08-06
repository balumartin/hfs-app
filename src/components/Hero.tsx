export default function Hero() {
  return (
    <section className="z-0 mb-10 relative h-[700px] flexStart flex-col mx-container overflow-hidden p-10 bg-gradient-to-b from-secondary from-50% to-primary">
      <div className="absolute top-0 left-0 w-auto bg-opacity-50 -z-10 h-full">
        <img
          className="bg-cover w-full h-auto opacity-30"
          src="/paper.jpg"
          alt="paper"
        />
      </div>

      <h2 className="mb-10 text-xl font-bold">
        CONFERENCE IN DIALOGUE BETWEEN POST-DISCIPLINARY FIELDS
      </h2>
      <h5 className="text-sm font-semibold leading-none">KEYNOTE SPEAKERS</h5>
      <div className="flexBetween w-[90%] text-center list-none">
        <li className="mt-16 w-full">
          <p className="text-primary font-cormorant font-medium text-2xl">
            Patrick Devlieger
          </p>
          <p className="text-xs font-semibold">KU LEUVEN, BELGIUM</p>
        </li>
        <li className="w-full">
          <p className="text-primary font-cormorant text-2xl">
            Richard Shusterman
          </p>
          <p className="text-xs font-semibold">
            FLORIDA ATLANTIC UNIVERSITY, USA
          </p>
        </li>
        <li className="mt-16 w-full">
          <p className="text-primary font-cormorant text-2xl">Guy Julier</p>
          <p className="text-xs font-semibold">AALTO UNIVERSITY, FINLAND</p>
        </li>
      </div>
      <span className="block border-2 rotate-[30deg] w-52 text-center my-20 text-xl border-black border-solid font-cormorant text-primary bg-white px-4 py-2">
        6-8 May 2019
      </span>
      <div className="font-extrabold text-5xl text-center tracking-wider ">
        <h2>DESIGN CULTURE</h2>
        <h2>AND SOMAESTHETICS</h2>
        <h2>CONFERENCE</h2>
        <h2>BUDAPEST</h2>
      </div>
      <div className="absolute -right-40 bottom-[5%] -z-10 w-[700px]  h-auto">
        <img
          className="bg-cover w-full h-full"
          src="/hand_transparent.png"
          alt="hand"
        />
      </div>
    </section>
  );
}
