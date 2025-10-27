import Video from "./Video";

function HeroTop() {
  return (
    <div className="flex flex-col justify-center items-center font-[font1] lg:mt-0 mt-80">
      <div className="lg:text-[9.5vw] text-[12vw] lg:p-7 p-4 lg:leading-[6vw] leading-[2vw] uppercase">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] p-3.5 lg:leading-[6vw] uppercase leading-[2vw]  flex items-center justify-center">
        qui
        <div className="w-[16vw] h-[7vw] -mt-4 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] p-3.5 lg:leading-[6vw] uppercase leading-[2vw] ">
        la créativité
      </div>
    </div>
  ); 
}

export default HeroTop;
