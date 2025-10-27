import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
function FullNav() {
  const { NavbarState, setNavbarState } = useContext(NavbarContext);
  const FullScreenRef = useRef(null);
  const FullNavLinkRef = useRef(null);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(FullScreenRef.current, { display: "block" });
    tl.to(".stairs", {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".link", {
      opacity: 1,
      stagger: {
        amount: 0.25,
      },
      rotateX: 0,
    });

    tl.to(".navlink", {
      opacity: 1,
    })
  }

   function gsapAnimationRev() {
    const tl = gsap.timeline();

    tl.to(".stairs", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".link", {
      opacity: 0,
      stagger: {
        amount: 0.1,
      },
      rotateX: 90,
    });

    tl.to(".navlink", {
      opacity: 0,
    })

    tl.to(FullScreenRef.current, { display: "none",  });
  }
  useGSAP(
    function () {
      if (NavbarState) {
        
        gsapAnimation();
      } else {
        gsapAnimationRev();
      }
    },
    [NavbarState]
  );

  return (
    <div
      ref={FullScreenRef}
      id="fullnav"
      className="z-50 absolute overflow-hidden h-screen w-full text-white"
    >
      <div className="h-screen w-full  fixed ">
        <div className="h-full w-full flex">
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
          <div className="stairs bg-black w-1/5 h-full"></div>
        </div>
      </div>
      <div ref={FullNavLinkRef} className="relative">
        <div className="navlink flex w-full  justify-between items-start p-3.5">
          <div className=" w-28 ">
            <svg
              className="w-full text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavbarState(false);
            }}
            className="w-40 h-40 absolute top-0 right-0 "
          >
            <svg
              className="w-full h-full block m-0 p-0 cursor-pointer hover:text-[#D3FD50] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 5 19 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
        <div className="lg:py-12 py-30">
          <div className="link origin-top border-t-1 relative ">
            <h1 className="lg:text-[8vw] lg:leading-[0.8] lg:pt-5 text-[15vw] leading-16 pt-2   text-center uppercase font-[font2]">
              Projets
            </h1>
            <div className=" movelink absolute flex gap-[12%] top-0 text-black bg-[#D3FD50]">
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t-1 relative ">
            <h1 className="lg:text-[8vw] lg:leading-[0.8] lg:pt-5 text-[15vw] leading-16 pt-2  text-center uppercase font-[font2]">
              Agence
            </h1>
            <div className=" movelink absolute flex gap-[10.5%] top-0 text-black bg-[#D3FD50]">
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout savoir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout savoir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2"
                  alt=""
                />
              </div>
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout savoir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour tout savoir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t-1 relative ">
            <h1 className="lg:text-[8vw] lg:leading-[0.8] lg:pt-5 text-[15vw] leading-16 pt-2  text-center uppercase font-[font2]">
              Contact
            </h1>
            <div className=" movelink absolute flex gap-[9%] top-0 text-black bg-[#D3FD50]">
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  pour envoyer un fax
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y-1 relative ">
            <h1 className="lg:text-[8vw] lg:leading-[0.8] lg:pt-5 text-[15vw] leading-16 pt-2  text-center uppercase font-[font2]">
              Blogue
            </h1>
            <div className=" movelink absolute flex gap-[12%] top-0 text-black bg-[#D3FD50]">
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  lir les articles
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  lir les articles
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                  alt=""
                />
              </div>
              <div className="movex flex items-center ">
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  lir les articles
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                  alt=""
                />
                <h2 className="whitespace-nowrap text-[8vw] leading-[0.8] pt-5 text-center uppercase font-[font2]">
                  lir les articles
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullNav;
