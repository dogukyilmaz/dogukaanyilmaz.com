import { Box, Button, Center, Divider, Heading } from "@chakra-ui/react";
import { Post } from "@prisma/client";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPosts } from "services/blog.service";

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: any) => {
  // const [posts, setPosts] = useState([]);
  const { t } = useLocale();

  return (
    <Layout pageTitle={t("blog")}>
      <Box h="95vh">
        <Box d="flex" justifyContent="center" alignItems="center" mt={200}>
          <h1>{t("blog")}</h1>
        </Box>
        <Box d="flex" justifyContent="center" alignItems="center">
          <Link href="/blog/new-post">
            <a>
              <Button>Create New Post</Button>
            </a>
          </Link>
        </Box>
        <Box d="block" mt={5} w="70%" mx="auto">
          <Divider />
          <Center>
            <Box d="block">
              <Heading mt={-5}>Posts</Heading>
              {posts.map((p: Post) => (
                <Box key={p.id}>
                  <Link href={`/blog/${encodeURIComponent(p.slug)}`}>
                    <a>title: {p.title}</a>
                  </Link>
                </Box>
              ))}
            </Box>
          </Center>
        </Box>
      </Box>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await getPosts();

  console.log(posts.data, "posts");
  return {
    props: {
      posts: posts.data,
    },
  };
};

// export async function getServerSideProps() {

// }

export default Blog;
