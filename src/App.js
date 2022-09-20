import "./App.css";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainNews from "./component/MainNews";
import MainInsta from "./component/MainInsta";
import Footer from "./component/Footer";
import MainEnter from "./component/MainEnter";

function App() {
    return (
        <>
            <Header />
            <MainVisual />
            <MainEnter/>
            <MainNews />
            <MainInsta />
            <Footer />
        </>
    );
}

export default App;
