import Hamburger from "./Hamburger";

export default function App() {
    const testText = "hier steht was";
    return (
        <div>
            <header>
                <h1>Cycle</h1>
                <Hamburger />
            </header>

            <div>{testText}</div>

            <footer>2021</footer>
        </div>
    );
}
