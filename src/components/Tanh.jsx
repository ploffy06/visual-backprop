import React, { useState, useRef, useEffect } from "react";
import WeightSlider from "./WeightSlider";
import * as d3 from 'd3';

const Tanh = ({x, y}) => {
    const [weight, setWeight] = useState(0);
    const d3Container = useRef(null);

    const newX = ((x * 10) + 200);
    const newY = ((y * -10) + 200);
    useEffect(
        () => {
            const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 1000]); // pixels

            const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, 1000]);

            const line = d3.line()
                       .x(d => xScale(d))
                       .y(d => yScale(Math.log(10) + Math.log(d)));

            const values = [0, 50, 100];
            const svg = d3.select(d3Container.current);
            svg.append("line")
                .style("stroke", "black")
                .attr("x1", 200)     // x position of the first end of the line
                .attr("y1", 0)      // y position of the first end of the line
                .attr("x2", 200)     // x position of the second end of the line
                .attr("y2", 400);

            svg.append("line")
                .style("stroke", "black")
                .attr("x1", 0)     // x position of the first end of the line
                .attr("y1", 200)      // y position of the first end of the line
                .attr("x2", 400)     // x position of the second end of the line
                .attr("y2", 200);

            svg.append("circle")
                .attr("fill", "black")
                .attr("r", 3) // radius of the
                .attr("cx", newX)
                .attr("cy", newY)

            svg.append("line")
                .datum(values)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("d", line);

        }, [weight, d3Container.current])
    return (
        <div className="function">
            <div style={{paddingBottom: "20px"}}>
                Selected point ({x}, {y})
            </div>
            <svg
                ref={d3Container}
                className="d3-component"
                height={400}
                width={400}
            />
            <WeightSlider weight={weight} setWeight={setWeight}/>
        </div>
    )
}

export default Tanh;