import "./styling/App.css"
import NavBar from "./NavBar";
import Project from "./Project";
import me from "./Me.jpeg"
import Encounter from "./Encounter.png"
import Wordie from "./Wordie.png"
import WorkIP from "./UnderConstruction.jpg"
import Cargo from "./Cargo.png"
import Test1 from "./Test1.png"
import Test2 from "./Test2.png"
import Test3 from "./Test3.png"


import BlackJack from "./Blackjack.png"
import Lever from "./Heavy Lever.png"


function App() {
    return (
        <div className="MainShell">
            <NavBar />
            <div className="AboutShell">
                <div className="TextShell">
                    <div className="NameShell">
                        <h1> <span className="Tag">{'<'}</span> Lucas  </h1>
                        <h1 className="LastName"> Castelli  <span className="Tag">{'/>'}</span></h1>
                    </div>
                    <div className="BlurbShell">
                        <h3>This is a really succinct and maybe creative blurb about me wow so well written</h3>
                    </div>
                </div>
                <div className="MeShell">
                    <img className="Me" src={me} alt="A picture of me"/>
                </div>
            </div>
            <div className="ProjectShell">
                <Project title="Encounter Manager" img={Encounter} url="testURL" blurb="Dungeons and Dragons encounter manager that allows the user to store data on monsters, characters, and story" />
                <Project title="Wordie" img={Wordie} url="https://projects-wordie.netlify.app/" blurb="A World clone I made from scratch, utilizing an API to grab just about any five-letter word, give it a try!" />
                <Project title="Pickup Basketball" img={WorkIP} url="testURL" blurb="Mockup for a social app that allows users to schedule and find pickup basketball games" />
                <Project title="Cargo Planner" img={Test1} url="https://cargo-layout.vercel.app/" blurb="Tool that allows users to input truck and cargo specs to calculate optimal truck layouts" />

                <Project title="BlackJack" img={BlackJack} url="testURL" blurb="Pretty standard blackjack game that calculates winning hand as well as keeps track of money and wagers" />

                <Project title="Heavy Lever" img={Lever} url="https://jsfiddle.net/LucasCastelli/ou23wqng/71/" blurb="Fun little animation project I did to learn some animation properties in css as well as play around with z layers" />

            </div>
        </div>
    )
}

export default App;