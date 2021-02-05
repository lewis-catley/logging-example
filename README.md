# Example Application to demonstrate logging injection

In this demo app I've create two helper functions that attempt to inject logging into a component.
- withLoggingExtended (Follows the current `withLogger` example)
- withLogging (The approach to what I think the fix should be)

Along with these 2 functions I've also created two components that are each wrapped by the above functions.

You can see in the `App.tsx` file that `CompLogging` does not require the prop `log` to be passed in.
This makes sense as the log prop is injected in the `withLogging` function.

Where-as in `App.tsx` you can see that `CompExtendedLogging` does require the `log` prop to be passed in.
This doesn't make sense as it is still injected in `withLoggingExtended` however, `withLoggingExtended` has a different
return type that requires calling components to pass in this value.
