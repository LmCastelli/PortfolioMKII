import "./styling/App.css"
import NavBar from "./NavBar";
import Project from "./Project";
import me from "./Me.jpeg"
import Wordie from "./WordleTest.png"
import Cargo from "./TruckTest.png"
import Dice from "./DiceTest.png"
import Basketball from "./BasketballTest.png"
import BlackJack from "./CardTest.png"
import Lever from "./LeverTest.png"


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
                        <h3>Hello I'm Lucas, a frontend developer. I strive to use each and every day to grow, learn, and continue my developing journey in any way I can. </h3>
                    </div>
                </div>
                <div className="MeShell">
                    <img className="Me" src={me} alt="A picture of me"/>
                </div>
            </div>
            <div className="ProjectShell">
                <Project title="Encounter Manager" img={Dice} url="testURL" blurb="Dungeons and Dragons encounter manager that allows the user to store data on monsters, characters, and story" />
                <Project title="Wordie" img={Wordie} url="https://projects-wordie.netlify.app/" blurb="A World clone I made from scratch, utilizing an API to grab just about any five-letter word, give it a try!" />
                <Project title="Pickup Basketball" img={Basketball} url="https://www.figma.com/file/8QRjSiFb47z7eZewHnvP7H/Bball-Project?type=design&node-id=0%3A1&mode=design&t=CByahQ5E0vr8oZ12-1" blurb="Mockup for a social app that allows users to schedule and find pickup basketball games" />
                <Project title="Cargo Planner" img={Cargo} url="https://cargo-layout.vercel.app/" blurb="Tool that allows users to input truck and cargo specs to calculate optimal truck layouts" />

                <Project title="BlackJack" img={BlackJack} url="testURL" blurb="Pretty standard blackjack game that calculates winning hand as well as keeps track of money and wagers" />

                <Project title="Heavy Lever" img={Lever} url="https://jsfiddle.net/LucasCastelli/ou23wqng/71/" blurb="Fun little animation project I did to learn some animation properties in css as well as play around with z layers" />

            </div>
        </div>
    )
}

export default App;