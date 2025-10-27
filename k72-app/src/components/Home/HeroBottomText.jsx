import { Link } from "react-router";
function HeroBottom() {
  return (
    <div>
      <div className="flex  justify-center items-center lg:gap-4 p-4 gap-2 ">
        <p className="absolute lg:w-70 lg:text-[0.9rem] right-0 lg:bottom-36 font-[font1]
            w-68 bottom-20 text-[0.8rem]  
        ">
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </p>
        <Link
          className="lg:text-[7vw] text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase font-[font2] rounded-full border-3 lg:px-10 lg:pt-3 lg:leading-[6vw] px-3 pt-1 leading-7"
          to="/projets"
        >
          Projets
        </Link>
        <Link
          className="lg:text-[7vw] text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] uppercase font-[font2] rounded-full border-3 lg:px-10 lg:pt-3 lg:leading-[6vw] px-3 pt-1 leading-7"
          to="/agence"
        >
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HeroBottom;
