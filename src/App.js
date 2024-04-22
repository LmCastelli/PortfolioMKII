import "./styling/App.css"
import NavBar from "./NavBar";
import Project from "./Project";
import me from "./MeTest.png"
import Wordie from "./Wordle.png"
import Cargo from "./Truck.png"
import Dice from "./D20.png"
import Basketball from "./Basketball.png"



function App() {
    return (
        <div className="MainShell">
            <NavBar />
            <div className="AboutShell">
                <div className="ProjectContainer">
                    <div className="ProjectHeader">
                        <h1 className="merriweather-regular title" ><span>{'< '}</span>Projects<span>{' />'}</span></h1>
                    </div>
                    <div className="ProjectShell">
                        <Project title="Encounter Manager" img={Dice} url="testURL" blurb="Created to organize and store info about Dungeons and Dragons monsters, battles, and stories for my friend who manages campaign sessions" />

                        <Project title="Wordie" img={Wordie} url="https://projects-wordie.netlify.app/" blurb="Built solely because I enjoy doing the Wordle and Connections daily, and wanted to see if I could make it from scratch!" />

                        <Project title="Pickup Basketball" img={Basketball} url="https://www.figma.com/file/8QRjSiFb47z7eZewHnvP7H/Bball-Project?type=design&node-id=0%3A1&mode=design&t=CByahQ5E0vr8oZ12-1" blurb="Designed for a friend who loves pickup basketball and wanted a way to organize games and connect with new friends who enjoy pickup games" />

                        <Project title="Cargo Planner" img={Cargo} url="https://cargo-layout.vercel.app/" blurb="Created this tool for my friend in transportation that wanted a way to caluclate the max amount of cargo that can fit in a truck" />
                    </div>
                </div>
                <div className="MeContainer">
                    <div className="NameShell">
                        <h1 className="merriweather-regular title" >Lucas Castelli</h1>
                    </div>
                    <div className="MeShell">
                        <img className="Me" src={me} alt="A picture of me"/>
                    </div>
                    <div className="BlurbShell" >
                        <h3 className="merriweather-regular" >Hello! I'm Lucas, a frontend-focused full-stack web developer with a strong proficiency in React and Node.js, seeking opportunities to leverage my technical skills and creativity to build innovative web applications!</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default App;