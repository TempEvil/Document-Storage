import { PrimaryColor } from "@/constants/style";
import "./Loading.css";
import { Box, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex gap="0.35rem" className="loading">
      <Box boxSize="10px" rounded="full" bgColor={PrimaryColor}></Box>
      <Box boxSize="10px" rounded="full" bgColor={PrimaryColor}></Box>
      <Box boxSize="10px" rounded="full" bgColor={PrimaryColor}></Box>
    </Flex>
  );
};

export default Loading;
