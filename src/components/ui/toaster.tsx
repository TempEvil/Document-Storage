/* eslint-disable react-refresh/only-export-components */
"use client";

import { createToaster, Toaster as ChakraToaster, Heading, Portal, Spinner, Stack, Text, Toast, Box } from "@chakra-ui/react";

// Create and export the toaster instance
export const toaster = createToaster({
  placement: "top",
  // placement: "bottom-start",
  // pauseOnPageIdle: true,
});

// Toaster UI component
const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }} boxShadow="md">
        {(toast) => (
          <Toast.Root width={{ md: "sm" }} position="relative" height="auto">
            <Box position="absolute" top="10px" left="12px">
              {toast.type === "loading" ? <Spinner size="sm" color="blue.solid" /> : <Toast.Indicator color="#eee" />}
            </Box>
            <Stack gap="0.5rem" flex="1" maxWidth="100%" paddingLeft="2.5rem" paddingBlock="0.75rem" paddingRight="0.85rem" rounded="md">
              {toast.title && (
                <Toast.Title>
                  <Heading lineHeight="1" fontSize="1rem">
                    {toast.title}
                  </Heading>
                </Toast.Title>
              )}
              {toast.description && (
                <Toast.Description>
                  <Text>{toast.description}</Text>
                </Toast.Description>
              )}
            </Stack>
            {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
            {toast.closable && <Toast.CloseTrigger top="10px" right="12px" cursor="pointer" />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};

export default Toaster;
