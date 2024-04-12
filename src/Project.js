import "./styling/Project.css"
function Project({title, blurb, img, url}) {


    return(
        <div className="ProjectDiv">
            <div className="ProjectImg">
                <img className="Screenshot" src={img} alt={title}></img>
            </div>
            <div className="InfoShell">
                <div className="TitleShell">
                    <a href={url}>{title}</a>
                </div>
                <div className="ProjectBlurb">
                    <h5>{blurb}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project;