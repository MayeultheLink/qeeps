import { Box, Flex, HStack, Text, Stack } from "@chakra-ui/react";
import { QeepsTag } from "../assets/Icons.tsx"
import { Briefcase, DocumentFolder, PeoplesTwo, PeopleSafe, CheckOne, FormOne, EveryUser, ListNumbers } from "@icon-park/react";
import { ReactElement } from "react";
import boxStyle from "../styles/boxStyle.tsx";
import CandidateModel from '../models/CandidateModel.tsx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OverviewTitle({icon, title}: {icon: ReactElement<unknown, any>, title: string}) {

    return (
        <HStack gap="8px" pb="16px">
            {icon}
            <Text fontWeight="500" fontSize="16px" lineHeight="19.2px">{title}</Text>
        </HStack>
    )
}

function Presentation({candidate}: {candidate: CandidateModel}) {

    const overviewTagsStyle = {
        border: "1px",
        borderRadius: "8px",
        borderColor: "#F2F2F2",
        p: "0px 8px"
    }

    const overviewTagsIconStyle = {
        size: "12px"
    }

    const overviewTagsTextStyle = {
        fontWeight: "500",
        fontSize: "12px"
    }

    return (
        <Flex pt="16px" pb="16px" {...boxStyle}>
            <QeepsTag/>
            <Stack ml="32px">
                <Stack gap="0px" w="324px">
                    <Text fontWeight="300" fontSize="12px" align="left">
                        @fabien.bricard
                    </Text>
                    <Stack border="1px dashed #9747FF" borderRadius="5px" w="171px" h="104px" justify="space-around">
                        <Text>
                            Fabien Bricard
                        </Text>
                        <Text>
                            Fabien Bricard
                        </Text>
                    </Stack>
                    <Flex mt="8px" gap="2px" flexWrap="wrap">
                        <HStack {...overviewTagsStyle} >
                            <Briefcase {...overviewTagsIconStyle} />
                            <Text {...overviewTagsTextStyle}>{candidate.job}</Text>
                        </HStack>
                        <HStack {...overviewTagsStyle} >
                            <DocumentFolder {...overviewTagsIconStyle} />
                            <Text {...overviewTagsTextStyle} >{candidate.situation}</Text>
                        </HStack>
                        <HStack {...overviewTagsStyle} >
                            <PeoplesTwo {...overviewTagsIconStyle} />
                            <Text {...overviewTagsTextStyle} >Colocation</Text>
                        </HStack>
                        <HStack {...overviewTagsStyle} >
                            <PeopleSafe fill="#6FB482" {...overviewTagsIconStyle} />
                            <Text {...overviewTagsTextStyle} color="#6FB482">Garants</Text>
                        </HStack>
                    </Flex>
                </Stack>
            </Stack>
        </Flex>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OverviewElement({icon, type, info}: {icon: ReactElement<unknown, any>, type: string, info: string}) {

    const bg = type === "DOCUMENTS" ? "#F5FAF6" : "#D3F8F8"

    return (
        <Flex direction="column" gap="10px" {...boxStyle} >
            <Flex bg={bg} borderRadius="6px" p="4px 16px" h="32px" gap="8px" align="center">
                {icon}
                {info &&
                    <Text fontWeight="600" fontSize="20px">
                        {info}
                    </Text>
                }
            </Flex>
            <Flex gap="8px" align="center">
                <Text fontWeight="300" fontSize="10px">
                    {type}
                </Text>
                { type === "DOCUMENTS" &&
                    <CheckOne size="10px" fill="#6FB482" />
                }
            </Flex>
        </Flex>
    )
}

function KPIElement({main, info1, info2}: {main: string, info1: string, info2: string}) {

    return (
        <Flex direction="column" {...boxStyle} >
            <Text fontWeight="700" fontSize="20px" pt="24px" >{main}</Text>
            <Text fontWeight="300" fontSize="8px" >{info1}</Text>
            <Text fontWeight="300" fontSize="8px" pb="24px">{info2}</Text>
        </Flex>
    )
}

export function Overview({candidate}: {candidate: CandidateModel}) {

    return (
        <>
            <Box>
                <OverviewTitle icon={<FormOne />} title="Vue d'ensemble"/>
                <Flex direction={{base: "column", md: "row"}} gap="8px" h="auto">
                    <Presentation candidate={candidate}/>
                    <Flex gap="8px" w="full">
                        <OverviewElement icon={<EveryUser />} type="CO-CANDIDATS" info="2" />
                        <OverviewElement icon={<PeopleSafe />} type="GARANTS" info="2"/>
                        <OverviewElement icon={<DocumentFolder fill="#6FB482"/>} type="DOCUMENTS" info="" />
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <OverviewTitle icon={<ListNumbers />} title="KPI du dossier"/>
                <Flex gap="8px">
                    <KPIElement main={`${candidate.monthlyRevenues}€`} info1="NET MENSUEL" info2="(avant impots)"/>
                    <KPIElement main={candidate.situation} info1="PRISE DE FONCTION" info2="le 17/03/2018"/>
                    <KPIElement main="1750€" info1="NET MENSUEL GARANT" info2="(avant impots)"/>
                </Flex>
            </Box>
        </>
    )
}