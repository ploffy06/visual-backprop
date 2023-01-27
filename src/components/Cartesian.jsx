import React, { useRef, useEffect } from "react";
import * as d3 from 'd3';
/**
 *
 * The following is deprecated as we are now using function-plot
 */
const Cartesian = ({x, y}) => {
    const d3Container = useRef(null);

    const newX = ((x * 10) + 200);
    const newY = ((y * -10) + 200);
    useEffect(
        () => {
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

            // Point
            svg.append("circle")
                .attr("fill", "black")
                .attr("r", 3) // radius of the circle
                .attr("cx", newX)
                .attr("cy", newY)



            const C = 1;
            const xScale = d3.scaleLinear()
                .domain([0, 400])
                .range([0, 400]); // pixels

            const yScale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, 1000]);

            const line = d3.line()
                            .x(d => xScale(d))
                            .y(d => yScale(Math.log(C) + Math.log(d)));

            const values = [0, 50, 100];

            svg.selectAll("d3-componen")
                .datum(values)
                .attr("fill", "black")
                .attr("stroke", "steelblue")
                .attr("d", line);

        }, [d3Container.current])
    return (
        <svg
            ref={d3Container}
            className="d3-component"
            height="100%"
            width="100%"
        />
    )
}

export default Cartesian;