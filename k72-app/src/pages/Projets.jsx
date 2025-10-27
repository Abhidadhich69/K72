import ProjetCard from "../components/Work/ProjetCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Projets() {
  const projets = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      image2:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.pimage',{
      height:'50px',
      stagger:{
        amount: 0.4
      },
      scrollTrigger:{
        trigger:".mujhe",
        start:'top 100%',
        end:"top -150%",
        scrub: true
      }
    })
  });
  return (
    <div className="lg:px-3">
      <div className=" pt-[42vh]">
        <h2 className=" font-[font2] lg:text-[14vw] text-[22vw] uppercase">Projets</h2>
      </div>
      <div className="lg:-mt-16 mujhe">
        {projets.map((e, index) => {
          return (
            <div key={index} className="pimage w-full lg:mb-2 lg:h-[400px] flex lg:flex-row flex-col gap-2">
              <ProjetCard image1={e.image1} image2={e.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projets;
