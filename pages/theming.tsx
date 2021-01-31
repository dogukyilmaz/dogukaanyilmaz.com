import { Box, Center, Divider, Fade, Image, Kbd, Stack } from "@chakra-ui/react";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";

interface Props {}

const colors = ["red", "teal", "green", "blue", "orange", "yellow", "cyan", "purple", "pink"];
const degrees = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRandomColor = () => {
  const c = Math.floor(Math.random() * colors.length);
  const d = Math.floor(Math.random() * degrees.length);

  const bg = `${colors[c]}.${degrees[d]}`;
  const color = d < degrees.indexOf(400) ? "black" : "white";
  console.log(bg, color, "ddsad");
  return { bg, color };
};

const theming = (props: Props) => {
  const { t } = useLocale();
  return (
    <Layout pageTitle={t("theming")}>
      <Box d="flex" flexDir="column" justifyContent="center" alignItems="center" h="95vh">
        {/* <Box w={200} h="15vh" bg="teal.500" boxShadow="md" rounded="lg" /> */}

        {["AAA", "BBB", "CCC"].map((i) => {
          // setTimeout(() => {
          const { bg, color } = getRandomColor();
          return (
            <Fade in key={i}>
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
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                    borderRadius="0.375em"
                  />
                </Box>
                <Stack direction="row" my="auto" h="8em" px={5}>
                  <Divider orientation="vertical" />
                </Stack>
                <Box my="auto">
                  <Kbd color={color} bg={bg}>
                    {i}
                  </Kbd>
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

export default theming;
