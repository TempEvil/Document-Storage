import { useEffect, useState, type ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Flex, Text, Strong, Button, Code } from "@chakra-ui/react";
// Icon
import { LuArrowLeft, LuCheck, LuCopy } from "react-icons/lu";
// Data
import { DocumentList } from "@/constants/documentData";

const renderWithHighlights = (text: string, highlights: string[] = []): ReactNode => {
  if (!highlights.length) return text;

  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");

  const parts = text.split(new RegExp(`(${escaped})`, "g"));

  return parts.map((part: string, i: number) => (highlights.includes(part) ? <Strong key={i}>{part}</Strong> : <span key={i}>{part}</span>));
};

const downloadFile = (url: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop() || "file";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const DocumentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => window.scrollTo(0, 0), []);

  const copyToClipboard = async (text: string) => {
    // Modern API
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  const documentData = (DocumentList as DocumentItem[]).find((doc) => doc.id === Number(id));

  if (!id) return <Text>Missing Document id.</Text>;
  if (!documentData) return <Text>No id found.</Text>;

  return (
    <Flex direction="column" paddingInline={{ base: "1rem", md: "2rem", lg: "10rem" }} paddingBlock="1rem">
      <Flex className="group" paddingBlock="0.5rem 1rem" cursor="pointer" onClick={() => navigate("/document")} alignItems="center" gap="0.5rem">
        <Flex alignItems="center" gap="0.5rem">
          <LuArrowLeft size="22px" />
          Back
        </Flex>
      </Flex>

      <Flex direction="column" gap="1rem">
        <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} fontWeight="bold">
          {documentData.name}
        </Text>

        <Flex direction="column" gap="0.75rem">
          {documentData.steps.map((step, index) => (
            <Flex key={index} direction="column" gap="0.75rem">
              {step.text !== "" && (
                <Text>
                  {index + 1}. {renderWithHighlights(step.text, step.highlights ?? [])}
                </Text>
              )}

              {/* Downloads */}
              {step.downloads?.length ? (
                <Flex gap="0.5rem" flexWrap="wrap">
                  {step.downloads.map((fileKey) => {
                    const fileUrl = documentData.files?.[fileKey];
                    if (!fileUrl) return null;

                    return (
                      <Button key={fileKey} size="sm" onClick={() => downloadFile(fileUrl)} paddingInline="0.75rem" colorPalette="blue">
                        Download {fileKey}
                      </Button>
                    );
                  })}
                </Flex>
              ) : null}

              {/* Code */}
              {step.code?.value ? (
                <Flex direction="column" width="100%" position="relative">
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={async () => {
                      const key = `${documentData.id}-${index}`;
                      await copyToClipboard(step.code!.value);
                      setCopiedKey(key);
                      window.setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 1200);
                    }}
                    _hover={{ bgColor: "gray.200" }}
                    _active={{ bgColor: "gray.200" }}
                    transition="all 0.15s ease"
                    position="absolute"
                    top="0"
                    right="0"
                    paddingInline="0.5rem"
                  >
                    {copiedKey === `${documentData.id}-${index}` ? <LuCheck /> : <LuCopy />}
                    {/* {copiedKey === `${documentData.id}-${index}` ? "Copied" : "Copy"} */}
                  </Button>

                  <Code padding="0.75rem" whiteSpace="pre" display="block" width="100%" fontSize="sm" lineHeight={1.4} overflow="auto">
                    {step.code.value}
                  </Code>
                </Flex>
              ) : null}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DocumentDetail;
