
function Project({title, blurb, img, url}) {


    return(
        <div className="ProjectDiv">
            <div className="ImgShell">
                <img src={img} alt={title}></img>
            </div>
            <div className="InfoShell">
                <div className="TitleShell">
                    <a href={url}>{title}</a>
                </div>
                <div className="BlurbShell">
                    <h5>{blurb}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project;