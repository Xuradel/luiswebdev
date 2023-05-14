const Footer = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    return (
        <div className="footerContainer">
            <a href="/" onClick={handleClick("hero")} className="footer-logo">
                <img src={require("../images/webdev.png")} ></img>
            </a>
            <div className="socials">
                <a href="https://www.linkedin.com/in/luis-escobar-martinez-281953244/" target="_blank"><img src={require("../images/linkedin.png")} ></img></a>
                <a href="https://github.com/Xuradel" target="_blank"><img src={require("../images/github.png")} ></img></a>
                <a href="https://www.instagram.com/xura.coding/" target="_blank"><img src={require("../images/instagram.png")} ></img></a>
            </div>
            <h1 className="footerHeading">© 2023 Luis Escobar Portfolio</h1>
        </div>
    )
}


export default Footer;