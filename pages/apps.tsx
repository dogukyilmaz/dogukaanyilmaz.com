import { Box, Divider, Fade, Image, Kbd, Stack, StackDivider, VStack } from "@chakra-ui/react";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";
import Link from "next/link";
import React, { useEffect } from "react";
import { getAllApps, DouApp, DouApps } from "utils/getApps";
import { getRandomColor } from "utils/themeUtils";

interface AppsProps {
  apps: {
    done: DouApp[];
    undone: DouApp[] | [];
  };
}

const Apps = ({ apps }: AppsProps) => {
  const { t } = useLocale();

  return (
    <Layout pageTitle={t("apps")}>
      <Box d="flex" flexDir="column" justifyContent="center" alignItems="center" h="95vh">
        {apps.done.map((app: DouApp) => {
          // setTimeout(() => {
          const { bg, color } = getRandomColor();
          return (
            <Fade in key={app.name}>
              <Box
                d="flex"
                flexDir="row"
                px="10px"
                py="10px"
                mt="4"
                bg={bg}
                color={color}
                rounded="md"
                shadow="md"
                w={500}
              >
                <Box>
                  <Image
                    boxSize="140px"
                    objectFit="cover"
                    src={`/images/${app.name}.png`}
                    alt={app.url}
                    borderRadius="0.375em"
                  />
                </Box>
                <Stack direction="row" my="auto" h="8em" px={5}>
                  <Divider orientation="vertical" borderColor={color === "white" ? "gray.200" : "gray.700"} />
                </Stack>
                <Box my="auto">
                  <VStack
                    divider={<StackDivider borderColor={color === "white" ? "gray.200" : "gray.700"} />}
                    spacing={4}
                    align="baseline"
                  >
                    <Kbd color={color} bg={bg} borderColor={color === "white" ? "gray.200" : "gray.700"}>
                      {app.name}
                    </Kbd>
                    <Link href={`https://${app.url}/`}>
                      <a target="_blank" rel="noreferrer">
                        {app.url}
                      </a>
                    </Link>
                  </VStack>
                </Box>
              </Box>
            </Fade>
          );
          // }, 1000);
        })}
      </Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const apps = await getAllApps();

  // const apps {}
  return {
    props: {
      apps,
    },
    revalidate: 60 * 60 * 24, // In seconds
  };
}

export default Apps;
