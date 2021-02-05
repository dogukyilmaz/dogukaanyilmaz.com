import { Box, Button } from "@chakra-ui/react";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";
import Link from "next/link";

const Blog = () => {
  const { t } = useLocale();
  return (
    <Layout pageTitle={t("blog")}>
      <Box h="95vh">
        <Box d="flex" justifyContent="center" alignItems="center" mt={200}>
          <h1>{t("blog")}</h1>
        </Box>
        <Box d="flex" justifyContent="center" alignItems="center">
          <Link href="/blog/post/new">
            <a>
              <Button>Create New Post</Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Blog;
