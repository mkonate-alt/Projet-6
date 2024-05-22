import React from "react";
import "./Banner.css"

function Banner({page,txt}) {
    const words = txt.split(",");
    const firstPart = words[0];
    const lastPart = words[words.length - 1];

    return(
        <section className={"banner banner--mobile banner--" + page}> 
            <div>
                <span className="banner__txt">{firstPart + ","}</span>
                <span className="banner__txt">{lastPart}</span>
            </div>
        </section>
    );
}

export default Banner;