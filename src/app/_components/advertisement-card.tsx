"use client";
// import Image from "next/image";
import { Box, Flex, Heading } from "@radix-ui/themes";

interface AdCardProps {
  title: string;
  description: string;
  icon: React.FC; // Type for the icon component
}

const AdCard: React.FC<AdCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Box className="rounded-lg border border-primary/20 bg-primary-foreground p-4">
      <Flex className="mb-2 " align="center" gap="2">
        <Icon /> {/* Use the passed component */}
        <Heading className="font-optiker">{title}</Heading>
      </Flex>
      {description}
    </Box>
  );
};

export default AdCard;
