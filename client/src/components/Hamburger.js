export default function Hamburger({ onClick }) {
    return (
        <div id="hamburger-menu" onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
