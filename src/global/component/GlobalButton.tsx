import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

interface Props {
  sx: any;
  variant?: "text" | "outlined" | "contained" | undefined;
  text: string;
}

const GlobalButton = (props: Props) => {
  return (
    <Button sx={props.sx} variant={props.variant}>
      {props.text}
    </Button>
  );
};

GlobalButton.propTypes = {
  sx: PropTypes.any,
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default GlobalButton;
