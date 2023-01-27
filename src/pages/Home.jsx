import React, {useState} from "react";
import NavBar from "../components/NavBar";
import '../App.css';
import Tanh from "../components/Tanh";
import Sigmoid from "../components/Sigmoid";

const Home = () => {
    const [chosen, setChosen] = useState({
        "activation": false,
        "point": false,
    });

    const [activation, setActivation] = useState("");
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function setDefault() {
        setChosen({"activation": false, "point": false});
        setActivation("");
        setX(0);
        setY(0);
    }

    function handleSelectedActivation(activation) {
        setChosen({"activation": true, "point": false})

        setActivation(activation)
    }

    function handleSelectedPoint() {
        if (isNaN(x) || isNaN(y)) {
            console.log("Need to input a number")
            return false;
        }
        if (x > 20 || x < -20 || y > 20 || y < -20) {
            console.log("not within range and/or domain")
            return false;
        } else {
            setChosen({"activation": true, "point": true});
        }
    }

    if (!chosen.activation && !chosen.point) {
        return (
            <div className="Home">
                <NavBar />
                <header>Choose an activation function</header>
                <div className="selectors">
                    <div className="rectangle" onClick={() => handleSelectedActivation("tanh")}>Tanh</div>
                    <div className="rectangle" onClick={() => handleSelectedActivation("sigmoid")}>Sigmoid</div>
                </div>
            </div>
        )
    } else if (chosen.activation && !chosen.point) {
        return (
            <div className="Home">
                <NavBar />
                <header>Choose an activation function</header>
                <div className="selectors">
                    <div className="rectangle" onClick={() => setActivation("tanh")}
                    style={{ backgroundColor: activation === "tanh"? 'black': 'white', color: activation === "tanh"? 'white': 'black'}}>
                        Tanh
                    </div>
                    <div className="rectangle" onClick={() => setActivation("sigmoid")}
                    style={{ backgroundColor: activation === "sigmoid"? 'black': 'white', color: activation === "sigmoid"? 'white': 'black'}}>
                        Sigmoid
                    </div>
                </div>
                <header>Set target point</header>
                <div style={{fontSize: "15px", textAlign: "center", color: "red"}}>Points must be within the domain and range of -20 to 20</div>
                <form className="selectors">
                    <input
                        placeholder="X"
                        className="pointInput"
                        type="text"
                        onChange={(e) => setX(e.target.value)}
                    />
                    <input
                        placeholder="Y"
                        className="pointInput"
                        type="text"
                        onChange={(e) => setY(e.target.value)}
                    />
                </form>
                <div className="selectors" style={{padding: "40px"}}>
                    <div className="button" onClick={() => handleSelectedPoint()}>
                        Start
                    </div>
                </div>
            </div>
        )
    } else if (activation === "tanh") {
        return (
            <div className="Home">
                <NavBar />
                <header>Tanh</header>
                <Tanh x={x} y={y}/>
                <div className="selectors" style={{padding: "40px"}}>
                    <div className="button" onClick={() => setDefault()}>
                        Restart
                    </div>
                </div>
            </div>
        )
    } else if (activation === "sigmoid") {
        return (
            <div className="Home">
                <NavBar />
                <header>Sigmoid</header>
                <Sigmoid x={x} y={y}/>
                <div className="selectors" style={{padding: "40px"}}>
                    <div className="button" onClick={() => setDefault()}>
                        Restart
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Home">
                <NavBar />
                <header>Sorry an error occurred, please reload the page.</header>
            </div>
        )
    }
}

export default Home;