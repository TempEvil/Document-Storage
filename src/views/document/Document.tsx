import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Badge, Box, Flex, GridItem, Heading, Input, InputGroup, SimpleGrid, Text } from "@chakra-ui/react";
// Styles
import { pressScaleStyle, PrimaryColor } from "@/constants/style";
// Icons
import { LuArrowUpRight, LuSearch } from "react-icons/lu";
// Data
import { DocumentList } from "@/constants/documentData";

const Document = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<string>("All");

  // Build section list from data (All + unique sections)
  const sections = useMemo(() => {
    const unique = Array.from(new Set(DocumentList.map((d) => d.section).filter(Boolean)));
    return ["All", ...unique];
  }, []);

  // Filter by section + search
  const filteredDocuments = useMemo(() => {
    const q = search.trim().toLowerCase();

    return DocumentList.filter((item) => {
      const matchSection = activeSection === "All" || item.section === activeSection;
      const matchSearch = !q || item.name.toLowerCase().includes(q) || item.section.toLowerCase().includes(q);

      return matchSection && matchSearch;
    });
  }, [search, activeSection]);

  useEffect(() => window.scrollTo(0, 0), []);

  const badgeStyle = (isActive: boolean) => ({
    padding: "0.5rem 1.5rem",
    rounded: "full",
    fontWeight: "semibold",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
    border: "2px solid",
    borderColor: isActive ? PrimaryColor : "#ccc",
    bg: isActive ? PrimaryColor : "#fff",
    color: isActive ? "#fff" : "gray.700",
    _hover: { bg: isActive ? PrimaryColor : "gray.100" },
    transition: "all 0.2s ease",
  });

  return (
    <Flex direction="column" paddingInline={{ base: "1rem", md: "2rem", lg: "10rem" }} paddingBlock="1rem" gap="1rem">
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

      {/* Filter */}
      <Flex gap="0.75rem" alignItems="center" overflowX="auto" paddingBlock="0.5rem 0.75rem">
        {sections.map((sec) => {
          const isActive = sec === activeSection;
          return (
            <Badge key={sec} {...badgeStyle(isActive)} onClick={() => setActiveSection(sec)}>
              {sec}
            </Badge>
          );
        })}
      </Flex>

      {/* List Document */}
      <SimpleGrid columns={12} gap="1rem">
        {filteredDocuments.length ? (
          filteredDocuments.map((item) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 3 }} key={item.id}>
              <Flex
                direction="column"
                width="100%"
                height="100%"
                rounded="md"
                gap="0.5rem"
                padding="0.75rem 1rem"
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
                  top="-8px"
                  left="-5px"
                  justifyContent="center"
                  alignItems="center"
                  bg="blue.100"
                  rounded="full"
                  _hover={{ bgColor: "blue.200", transform: "scale(1.09)" }}
                  transition="all 0.3s ease"
                  color={PrimaryColor}
                  border="1px solid #e5e5e5"
                  paddingInline="0.5rem"
                >
                  <Text fontSize="xs" fontWeight="semibold">
                    {item.section}
                  </Text>
                </Flex>
                <Flex
                  position="absolute"
                  top="-8px"
                  right="-5px"
                  justifyContent="center"
                  alignItems="center"
                  boxSize="20px"
                  bg="blue.100"
                  rounded="full"
                  _hover={{ bgColor: "blue.200", transform: "scale(1.09)" }}
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
