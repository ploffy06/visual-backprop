import React, { useState, useRef, useEffect } from "react";
import WeightSlider from "./WeightSlider";
import * as d3 from 'd3';
import Cartesian from "./Cartesian";
import functionPlot from "function-plot";

const Tanh = ({x, y}) => {
    const [weight, setWeight] = useState(1.000);
    const tanh = `tanh(${weight} * x)`
    useEffect(
        () => {
            const tanhFunction = functionPlot({
                target: ".functionCurve",
                width: "750",
                height: "500",
                yAxis: { domain: [-1.5, 1.5] },
                xAxis: { range: [ -5, 5] },
                grid: true,
                data: [
                    {
                        // x: `${x}`,
                        points: [[x, y]],
                        fnType: "points",
                        graphType: "scatter",
                        color: "red"
                    },
                    {
                        fn: `3(x - ${x}) * (x - ${x})+ 25(y - ${y}) * (y - ${y}) - 0.005`,
                        fnType: "implicit",
                        color: "red"
                    },
                    {
                        fn: tanh,
                        derivative: {
                            fn: `(${tanh} - ${y}) * (1 - ${tanh} * ${tanh}) * x`,
                            x0: x
                        },
                        color: "blue"
                    }

                ]
            })

        }, [weight])
    return (
        <div className="function">
            <div style={{paddingBottom: "20px"}}>
                Selected point ({x}, {y})
            </div>
            <div className="functionCurve"></div>
            <WeightSlider weight={weight} setWeight={setWeight}/>
        </div>
    )
}

export default Tanh;