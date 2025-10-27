import HeroBottom from "../components/Home/HeroBottomText";
import HeroTop from "../components/Home/HeroTopText";
import Video from "../components/Home/Video";

function Home(){
    return(
        <div className="text-white">
        <div className="h-screen w-screen fixed">
            <Video/>            
        </div>
        <div className="h-screen w-screen relative flex flex-col justify-between">
            <HeroTop/>
            <HeroBottom/>
        </div>
        </div>
    )
}

export default Home;