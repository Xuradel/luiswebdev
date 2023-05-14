import React from "react";


const LandingSection = () => {
    return (
        <div id="landingPage" className="container">
            <div className="text">
                <h1 className="greeting">Hello There! I'm</h1><br />
                <h1 className="greeting2">Luis<span className="name2"> Escobar</span></h1><br />
                <p className="bio">I am a <span className="popBold"> Front End Developer</span> specialised in <span className="gold"> React.</span></p>
                <p className="bio">Based in San Jose, <span className="gold"> Costa Rica.</span></p>
            </div>
                <img src={require("../images/avatarF.png")} alt="avatarLogo" className="avatar"></img>
        </div>
    )
}


export default LandingSection;
