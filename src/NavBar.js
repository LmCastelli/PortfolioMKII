import "./styling/NavBar.css"

function NavBar() {
    
    return (
        <div className="NavShell">
            <div className="IconShell">
                <div className="ImgShell">
                    <a href="https://github.com/LmCastelli" target="_blank" rel="noreferrer noopener"> <img className="ci ci-github ci-2x" alt="GitHub Icon"/></a>
                </div>
                <div className="ImgShell">
                    <a href="https://www.linkedin.com/in/lucas-castell/" target="_blank" rel="noreferrer noopener"> <img className="ci ci-linkedin ci-2x" alt="LinkedIn Icon"/> </a> 
                </div>
                <div className="ImgShell">
                    <a href="mailto:lucasmcastelli@gmail.com" target="_blank" rel="noopener noreferrer"> <img className="ci ci-gmail ci-2x" alt="Gmail Icon"/> </a>
                </div>
            </div>
            <div className="LinkShell">
                <div className="SectionShell">
                    <h3>About</h3>
                </div>
                <div className="SectionShell">
                    <h3>Projects</h3>
                </div>
                <div className="SectionShell">
                    <h3>Contact</h3>
                </div>
            </div>
        </div>
    )

}
export default NavBar;
