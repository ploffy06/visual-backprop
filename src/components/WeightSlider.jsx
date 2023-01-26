import React from "react";
import Slider from '@mui/material/Slider';

const WeightSlider = ({weight, setWeight}) => {
    return (
        <div className="weightSlider">
            <Slider
                aria-label="Small steps"
                defaultValue={0}
                step={0.01}
                min={-20}
                max={20}
                valueLabelDisplay="auto"
                style={{width: "500px"}}
                value={weight}
                onChange={e => setWeight(e.target.value)}
                />
            <div style={{fontSize: "15px"}}>
                Weight = {weight}
            </div>
        </div>
    )
}

export default WeightSlider;