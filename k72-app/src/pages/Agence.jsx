import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
function Agence() {
  // const sectionRef = useRef(null);
  // const panelsRef = useRef([]);
  const ImageDivRef = useRef(null);
  const ImageRef = useRef(null);
  const ImageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007",
    "https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e",
    "https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac",
    "https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MAXIME_480X640_2.jpg?w=480&h=640&fit=crop&s=fa729ef392c1761aa156d9aea9ab41e3",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        start: "top 25.4%",
        end: "top -150%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (e) => {
          let imageIndex;

          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * ImageArray.length);
          } else {
            imageIndex = ImageArray.length - 1;
          }
          ImageRef.current.src = ImageArray[imageIndex];
        },
      },
    });
  }, []);

  //   useGSAP(() => {
  //   const panels = panelsRef.current;

   
  //   // ✅ first panel animation (as you wrote)
  //   gsap.fromTo(
  //     panels[0],
  //     { yPercent: 100 },
  //     {
  //       yPercent: 0,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: 1,
  //       },
  //     }
  //   );

  
  //   gsap.fromTo(
  //     panels[1],
  //     { yPercent: 100 },
  //     {
  //       yPercent: 0,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 1,
  //       },
  //     }
  //   );
  // });

  return (
    <div>
      <div className="setion1 py-1">
        <div
          ref={ImageDivRef}
          className="absolute overflow-hidden lg:top-42  lg:left-[31vw] lg:w-50 lg:h-65 
          h-20 -top-20 left-30
          lg:rounded-4xl "
        >
          <img
            ref={ImageRef}
            className="w-full h-full object-cover "
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="image"
          />
        </div>
        <div className="relative font-[font2] ">
          <div className="lg:mt-[55vh] mt-[30vh] ">
            <h1 className="text-[16vw] lg:text-[20vw] text-center uppercase leading-[13vw] lg:leading-[18vw] ">
              Soixan7e <br /> Douze
            </h1>
          </div>
        </div>
        <div className="lg:pl-[40%] px-2 lg:mt-10 mt-36 ">
          <p className="lg:text-6xl font-[font2] ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre
            créativité. On reste humbles et on dit non aux gros egos, même le
            vôtre. Une marque est vivante. Elle a des valeurs, une personnalité,
            une histoire. Si on oublie ça, on peut faire de bons chiffres à
            court terme, mais on la tue à long terme. C’est pour ça qu’on
            s’engage à donner de la perspective, pour bâtir des marques
            influentes.
          </p>
        </div>
      </div>
      {/* <div
        className="section2 relative h-screen  mt-15 bg-black"
        ref={sectionRef}
      >
        <div
          ref={(el) => (panelsRef.current[0] = el)}
          className="panel absolute inset-0 flex items-center justify-center  "
        >
          <img
            src="https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"
            alt="Person 1"
            className="h-[100vh] w-[35vw] overflow-hidden rounded-3xl object-cover"
          />
        </div>

        <div
        ref={(el) => (panelsRef.current[1] = el)}
        className="panel absolute inset-0 flex items-center justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800"
          alt="Person 2"
          className="h-[100vh] w-[35vw] overflow-hidden rounded-3xl object-cover"
        />
      </div>
      </div>

      <div className="sectiom3 h-screen bg-red-500"></div> */}
    </div>
  );
}

export default Agence;
