import { Tooltip as ChakraTooltip, Float, Portal, Span } from "@chakra-ui/react";
import * as React from "react";

export interface TooltipProps extends ChakraTooltip.RootProps {
  showArrow?: boolean;
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  contentProps?: ChakraTooltip.ContentProps;
  disabled?: boolean;
  padding?: string | number;
  fontSize?: string;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
  const {
    showArrow,
    children,
    disabled,
    portalled = true,
    content,
    contentProps,
    portalRef,
    padding = "0.5rem",
    fontSize = "14px",
    ...rest
  } = props;

  if (disabled) return children;

  return (
    <ChakraTooltip.Root {...rest} openDelay={0} closeDelay={50} unstyled>
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>

      <Portal disabled={!portalled} container={portalRef}>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content
            ref={ref}
            {...contentProps}
            padding={padding}
            zIndex={9999}
            bg="#fcfcfc"
            fontSize="0.875rem"
            boxShadow="lg"
            rounded="sm"
            color="black"
            flexWrap="wrap"
            maxW="500px"
          >
            {showArrow && (
              <Float right="110%" top="-20%">
                <ChakraTooltip.Arrow>
                  <ChakraTooltip.ArrowTip
                    borderWidth="5px"
                    borderRightColor="transparent"
                    borderBottomColor="transparent"
                    borderLeftColor="#fcfcfc"
                    borderTopColor="#fcfcfc"
                  />
                </ChakraTooltip.Arrow>
              </Float>
            )}
            <Span fontSize={fontSize}>{content}</Span>
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    </ChakraTooltip.Root>
  );
});
