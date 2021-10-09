import React from "react";
import { Button } from 'react-bootstrap'
import { ReactSketchCanvas } from "react-sketch-canvas";

function OCanvas () {
    const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.20rem",
    };

  return (
    <div>
    <ReactSketchCanvas
      style={styles}
      width="100"
      height="100"
      strokeWidth={4}
      strokeColor="red"
    />
    <Button>
    Save Image
    </Button>
    </div>
  );
};

export default OCanvas;