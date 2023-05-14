import React from 'react'

function SkillsSection() {
    return (
        <div className='skills' id='skills-section'>
            <div className="skills-section">
                <h1>My <span className='gold'>Skills</span></h1>
                <div class="logos">
                    <div class="logos-slide">
                        <img src={require("../logos/html.png")} />
                        <img src={require("../logos/css.png")} />
                        <img src={require("../logos/js.png")} />
                        <img src={require("../logos/react.png")} />
                        <img src={require("../logos/bootstrap.png")} />
                        <img src={require("../logos/git.png")} />
                        <img src={require("../logos/github.png")} />
                        <img src={require("../logos/vscode.png")} />
                        <img src={require("../logos/sketch.png")} />
                        <img src={require("../logos/figma.png")} />
                    </div>

                    <div class="logos-slide">
                        <img src={require("../logos/html.png")} />
                        <img src={require("../logos/css.png")} />
                        <img src={require("../logos/js.png")} />
                        <img src={require("../logos/react.png")} />
                        <img src={require("../logos/bootstrap.png")} />
                        <img src={require("../logos/git.png")} />
                        <img src={require("../logos/github.png")} />
                        <img src={require("../logos/vscode.png")} />
                        <img src={require("../logos/sketch.png")} />
                        <img src={require("../logos/figma.png")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
