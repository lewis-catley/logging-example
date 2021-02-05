import React from "react";
import { withLoggingExtended } from "../helpers";
import { ICompProps } from "../types/ICompProps";
import { ILogging } from "../types/ILogging";
import "./Comp.css";

type Props = ICompProps & ILogging;

const CompExtendedLogging: React.FC<Props> = (props: Props) => {
  return (
    <div className="Comp">
      <h5>{props.title}</h5>
      <p>Injected log prop: {props.log}</p>
    </div>
  );
};

export default withLoggingExtended(CompExtendedLogging);
