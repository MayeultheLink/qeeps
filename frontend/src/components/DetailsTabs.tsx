import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Divider, Stack, Flex, Grid } from '@chakra-ui/react'
import { IdCardV, EveryUser, PeopleSafe, DocumentFolder, FileQuestion, PhoneTelephone, Mail, User } from "@icon-park/react";
import { ReactElement } from 'react';
import boxStyle from '../styles/boxStyle';
import CandidateModel from '../models/CandidateModel'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TabTitle({text, icon}: {text: string, icon: ReactElement<unknown, any>}) {

    return (
        <>
            <Box border="1px" borderColor="#F2F2F2" borderRadius="4px" p="2px">
                {icon}
            </Box>
            <Text fontSize="13px" align="center">
                {text}
            </Text>
        </>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Infos({icon, infoType, infoContent}: {icon: ReactElement<unknown, any>, infoType: string, infoContent: string}) {

    return (
<Grid templateColumns="1fr 1fr" gap="16px">
  <Flex align="center" gap="16px">
    {icon}
    <Text fontWeight="300" color="#666666" fontSize="14px" mb="2px">
      {infoType}
    </Text>
  </Flex>
  <Text display="flex" justifyContent="flex-start" fontWeight="500" fontSize="14px">
    {infoContent}
</Text>
</Grid>
    )
}

function InfosBox({candidate}: {candidate: CandidateModel}) {

    const iconProps = {
        fill: "#666666",
        size: "16px"
    }

    return (
        <>
            <Stack {...boxStyle} p="16px 32px" gap="10px" align="left">
                <Text fontSize="16px" fontWeight="500" w="full" align="left">
                    Informations personnelles
                </Text>
                <Divider mb="16px"/>
                <Stack gap="32px">
                    <Infos icon={<IdCardV {...iconProps} />} infoType="Dossier" infoContent="100%"/>
                    <Infos icon={<FileQuestion {...iconProps} />} infoType="Statut" infoContent="Reçue"/>
                    <Infos icon={<PhoneTelephone {...iconProps} />} infoType="Téléphone" infoContent="06 66 66 66 66"/>
                    <Infos icon={<Mail {...iconProps} />} infoType="Mail" infoContent={candidate.email}/>
                    <Infos icon={<User {...iconProps} />} infoType="Situation actuelle" infoContent="Célibataire"/>
                </Stack>
            </Stack>
        </>
    )
}

export function DetailsTabs({candidate}: {candidate: CandidateModel}) {

    const tabProps = {
        bg: "#FFFFFF",
        gap: "4px",
        borderBottom: "2px",
        borderColor: "#F2F2F2",
    }

    const selectedTabProps = {
        fontWeight: "bold",
        borderBottom: "2px",
    };

    const iconProps = {
        size: "12px"
    }

    return (
        <Tabs >
            <TabList borderColor="#F2F2F2" mb="16px">
                <Tab {...tabProps} _selected={selectedTabProps}>
                    <TabTitle text="Dossier" icon={<IdCardV {...iconProps} />} />
                </Tab>
                <Tab {...tabProps} _selected={selectedTabProps}>
                    <TabTitle text="Co-candidats" icon={<EveryUser {...iconProps} />} />
                </Tab>
                <Tab {...tabProps} _selected={selectedTabProps}>
                    <TabTitle text="Garants" icon={<PeopleSafe {...iconProps} />} />
                </Tab>
                <Tab {...tabProps} _selected={selectedTabProps}>
                    <TabTitle text="Documents" icon={<DocumentFolder {...iconProps} />} />
                </Tab>
            </TabList>
            <TabPanels ml="-16px">
                <TabPanel>
                    <Text fontSize="20px" fontWeight="500" align="left" mb="8px">Candidat Principal</Text>
                    <InfosBox candidate={candidate}/>
                </TabPanel>
                <TabPanel>
                    <Text fontSize="20px" fontWeight="500" align="left">Co-candidats</Text>
                </TabPanel>
                <TabPanel>
                    <Text fontSize="20px" fontWeight="500" align="left">Garants</Text>
                </TabPanel>
                <TabPanel>
                    <Text fontSize="20px" fontWeight="500" align="left">Documents</Text>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}