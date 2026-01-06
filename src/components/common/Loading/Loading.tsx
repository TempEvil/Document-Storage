import "./Loading.css";
import { Box, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex
      width="100%"
      height="100dvh"
      justifyContent="center"
      alignItems="center"
      // bg="#edf2f7"
    >
      <Flex className="loader" direction="column" alignItems="center" gap="1rem">
        <Box height={{ base: "90px", md: "100px", lg: "130px" }}>Loading...</Box>
      </Flex>
    </Flex>
  );
};

export default Loading;
