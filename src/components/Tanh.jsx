import React, { useState, useRef, useEffect } from "react";
import WeightSlider from "./WeightSlider";
import * as d3 from 'd3';
import Cartesian from "./Cartesian";

const Tanh = ({x, y}) => {
    const [weight, setWeight] = useState(0);
    const prac = useRef(null);
    useEffect(
        () => {
            const svg = d3.select(prac.current);

            const C = 1;
            const xScale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, 1000]); // pixels

            const yScale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, 1000]);

            const line = d3.line()
                        .x(d => xScale(d))
                        .y(d => yScale(Math.log(C) + Math.log(d)));

            const values = [0, 50, 100];

            svg.append("g")
                .datum(values)
                .attr("fill", "black")
                .attr("stroke", "steelblue")
                .attr("d", line);



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

export default Tanh;