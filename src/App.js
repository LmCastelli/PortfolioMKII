import "./styling/App.css"
import NavBar from "./NavBar";
import me from "./Me.jpeg"

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
        </div>
    )
}

export default App;