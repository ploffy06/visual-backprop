import React, { useState, useEffect } from "react";
import WeightSlider from "./WeightSlider";
import functionPlot from "function-plot";

const Sigmoid = ({x, y}) => {
    const [weight, setWeight] = useState(1.000);
    const sigmoid = `1 / (1 + exp(-${weight} * x))`
    useEffect(
        () => {
            const sigmoidFunction = functionPlot({
                target: ".functionCurve",
                width: "750",
                height: "500",
                yAxis: { domain: [-0.5, 1.5] },
                xAxis: { range: [ -5, 5] },
                grid: true,
                data: [
                    {
                        // x: `${x}`,
                        points: [[x, y], [x, y], [x, y]],
                        fnType: "points",
                        graphType: "scatter",
                        color: "red"
                    },
                    {
                        fn: `2(x - ${x}) * (x - ${x})+ 25(y - ${y}) * (y - ${y}) - 0.005`,
                        fnType: "implicit",
                        color: "red"
                    },
                    {
                        fn: sigmoid,
                        derivative: {
                            fn: `(${sigmoid} - ${y}) * ${sigmoid} * (1 - ${sigmoid}) * x`,
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

export default Sigmoid;