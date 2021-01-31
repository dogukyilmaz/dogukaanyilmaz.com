import { Box } from "@chakra-ui/react";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";
import { useEffect } from "react";
import { getAllApps } from "utils/getApps";

interface Props {}

const Apps = ({ apps }: any) => {
  const { t } = useLocale();
  useEffect(() => {
    console.log("effect", apps);
  }, []);
  return (
    <Layout pageTitle={t("apps")}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh"></Box>
    </Layout>
  );
};

export async function getStaticProps() {
  const apps = await getAllApps();
  return {
    props: {
      apps,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60 * 60 * 24, // In seconds
  };
}

export default Apps;
