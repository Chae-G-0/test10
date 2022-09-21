import "./App.css";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainNews from "./component/MainNews";
import MainInsta from "./component/MainInsta";
import Footer from "./component/Footer";
import MainEnter from "./component/MainEnter";
import MainVideo from "./component/MainVideo";

function App() {
    return (
        <>
            <Header />
            <MainVisual />
            <MainEnter/>
            <MainNews />
            <MainVideo/>
            <MainInsta />
            <Footer />
        </>
    );
}

export default App;
