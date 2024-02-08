import { Text, Heading, HStack, Stack, Box, Badge, useBreakpointValue } from '@chakra-ui/react'
import { IdCard } from "@icon-park/react";

export function Title() {

    const headingWidth = useBreakpointValue({ base: "100%", md: "586px" });

    return (
        <Stack gap="4px">
            <HStack w="100%" h="auto" gap="8px" mb="8px">
                <IdCard size="22px"/>
                <Heading w="200px" h="29px" fontWeight="500" fontSize="24px" lineHeight="28.8px">Passeport QEEPS</Heading>
                <Badge bg="#D9DAFC" fontSize="8px" fontWeight="500" lineHeight="12px" p="1px 4px" borderRadius="4px" opacity="80%">BETA</Badge>
            </HStack>
            <Box w={headingWidth} h="auto" p="8px, 0px, 8px, 0px" gap="4px">
                <Text fontWeight="400" fontSize="12px" lineHeight="18px" textAlign="left">Bienvenue sur votre passeport. Retrouvez toutes les infos sur vous, vos co-candidats ainsi que vos garants.</Text>
            </Box>
        </Stack>
    )
}