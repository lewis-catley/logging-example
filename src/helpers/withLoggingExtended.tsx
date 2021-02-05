import { ILogging } from "../types/ILogging";

// eslint-disable-next-line @typescript-eslint/ban-types
const withLoggingExtended = <P extends object>(
  Component: React.FunctionComponent<P> | React.ComponentClass<P>
): React.FunctionComponent<P & ILogging> => {
  const LoggerComp = (props: P): React.ReactElement<P & ILogging> => (
    <Component log={"This logging is injected"} {...props} />
  );

  return LoggerComp;
};

export default withLoggingExtended;
