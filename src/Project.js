import "./styling/Project.css"

const handleOnClick = (url) => {
    const newTab = window.open(url, '_blank', 'noopener, noreferrer')
    if (newTab) newTab.opener = null
}

function Project({title, blurb, img, url}) {
    return(
        <div onClick={() =>handleOnClick(url)} className="ProjectDiv">
            <div className="ProjectImg">
                <img className="Screenshot" src={img} alt={title}></img>
            </div>
            <div className="InfoShell">
                <div className="TitleShell">
                    <a className="merriweather-regular" href={url} target="_blank" rel="noreferrer noopener" >{title}</a>
                </div>
                <div className="ProjectBlurb">
                    <h5 className="ubuntu-medium" >{blurb}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project;