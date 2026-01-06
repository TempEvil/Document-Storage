import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Box, Flex, GridItem, Heading, Input, InputGroup, SimpleGrid, Text } from "@chakra-ui/react";
// Styles
import { pressScaleStyle, PrimaryColor } from "@/constants/style";
// Icons
import { LuArrowUpRight, LuSearch } from "react-icons/lu";
// Data
import { DocumentList } from "@/constants/documentData";

const Document = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDocuments = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return DocumentList;

    return DocumentList.filter((item) => item.name.toLowerCase().includes(q));
  }, [search]);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Flex direction="column" paddingInline={{ base: "1rem", md: "2rem", lg: "10rem" }} paddingBlock="1rem" gap="2rem">
      {/* Header */}
      <Flex direction={{ base: "column", md: "row" }} alignItems={{ base: "initial", md: "center" }} gap="0.5rem">
        <Heading flex={{ md: 2 }} fontSize="2xl">
          Document
        </Heading>

        <Box flex={{ md: 1 }}>
          <InputGroup
            startElement={
              <Flex boxSize="40px" justifyContent="center" alignItems="center">
                <LuSearch />
              </Flex>
            }
          >
            <Input type="text" placeholder="Search document" value={search} onChange={(e) => setSearch(e.target.value)} />
          </InputGroup>
        </Box>
      </Flex>

      {/* List Document */}
      <SimpleGrid columns={12} gap="1rem">
        {filteredDocuments.length ? (
          filteredDocuments.map((item) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={item.id}>
              <Flex
                width="100%"
                height="100%"
                rounded="md"
                gap="0.5rem"
                padding="0.5rem 1rem"
                color="#fff"
                alignItems="flex-start"
                bgColor={PrimaryColor}
                {...pressScaleStyle}
                cursor="pointer"
                onClick={() => navigate(`/document/${item.id}`)}
                position="relative"
              >
                <Text fontWeight="semibold">{item.name}</Text>
                <Flex
                  position="absolute"
                  top="-5px"
                  right="-5px"
                  justifyContent="center"
                  alignItems="center"
                  boxSize="20px"
                  bg="blue.100"
                  rounded="full"
                  _hover={{ bgColor: "blue.200", scale: 1.09 }}
                  transition="all 0.3s ease"
                  color={PrimaryColor}
                  border="1px solid #eee"
                >
                  <LuArrowUpRight />
                </Flex>
              </Flex>
            </GridItem>
          ))
        ) : (
          <GridItem colSpan={12}>
            <Text color="gray.500">No documents found.</Text>
          </GridItem>
        )}
      </SimpleGrid>
    </Flex>
  );
};

export default Document;
