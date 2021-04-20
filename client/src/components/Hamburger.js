export default function Hamburger() {
    function onHamburgerClick() {
        console.log("KLICK!");
    }

    return (
        <nav>
            <div id="hamburger-menu" onClick={onHamburgerClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
