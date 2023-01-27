import React, { useState, useRef, useEffect } from "react";
import WeightSlider from "./WeightSlider";
import * as d3 from 'd3';
import Cartesian from "./Cartesian";

const Sigmoid = ({x, y}) => {
    const [weight, setWeight] = useState(0);
    const prac = useRef(null);
    useEffect(
        () => {
            const svg = d3.select(prac.current);


            // Point
            svg.append("circle")
                .attr("fill", "black")
                .attr("r", 10) // radius of the
                .attr("cx", (200))
                .attr("cy", (200))



        }, [prac.current])
    return (
        <div className="function">
            <div style={{paddingBottom: "20px"}}>
                Selected point ({x}, {y})
            </div>
            <div >
            </div>
            <svg ref={prac} width={400} height={400}>
                <Cartesian x={x} y={y}/>
            </svg>
            <WeightSlider weight={weight} setWeight={setWeight}/>
        </div>
    )
}

export default Sigmoid;