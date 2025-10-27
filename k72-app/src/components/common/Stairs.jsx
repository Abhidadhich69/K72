import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router";
function Stairs(props) {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  
  const stairDivRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    function () {
      const tl = gsap.timeline();
      tl.to(stairDivRef.current, {
        display: "block",
      });
      tl.from('.stair',{
        height:0,
        stagger:{
            amount:-0.25
        }
      })
      tl.to('.stair',{
        y:"100%",
        stagger:{
            amount:-0.25
        }
      })
      tl.to (stairDivRef.current, {
        display: "none",
      })
      tl.to('.stair',{
        y: '0%',
      })

      gsap.from(pageRef.current, {
        opacity:0,
        delay: 1.2,
        scale: 1.2
      })
    },
    [currentPath]
  );
  return (
    <div>
        <div ref={stairDivRef} className="h-screen w-full z-20 fixed top-0">
      <div className="h-full w-full flex">
        <div className="stair bg-black w-1/5 h-full"></div>
        <div className="stair bg-black w-1/5 h-full"></div>
        <div className="stair bg-black w-1/5 h-full"></div>
        <div className="stair bg-black w-1/5 h-full"></div>
        <div className="stair bg-black w-1/5 h-full"></div>
      </div>
    </div>
    <div ref={pageRef}>
        {props.children}
    </div>
    </div>  
  );
}

export default Stairs;
