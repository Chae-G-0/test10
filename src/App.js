import "./App.css";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainNews from "./component/MainNews";
import MainInsta from "./component/MainInsta";
import Footer from "./component/Footer";
import MainEnter from "./component/MainEnter";
import MainVideo from "./component/MainVideo";
import Totop from "./component/Totop";
import Popup from "./component/Popup";
import Fimg from "./component/Fimg";

function App() {
    return (
        <>
            <Header />
            <MainVisual />
            <MainEnter />
            <MainNews />
            <MainInsta />
            <MainVideo />
            <Fimg/>
            <Footer />
            <Totop />
            <Popup />
        </>
    );
}

export default App;
