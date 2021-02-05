import { ILogging } from "../types/ILogging";

// eslint-disable-next-line @typescript-eslint/ban-types
const withLogging = <P extends object>(
  Component:
    | React.FunctionComponent<P & ILogging>
    | React.ComponentClass<P & ILogging>
): React.FunctionComponent<P> => {
  const LoggerComp = (props: P): React.ReactElement<P> => (
    <Component log={"This logging is injected"} {...props} />
  );

  return LoggerComp;
};

export default withLogging;
