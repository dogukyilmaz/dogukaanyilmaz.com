import { Box, Button, FormControl, FormHelperText, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import Layout from "components/Layout";
import useLocale from "hooks/useLocale";
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";
import { createPost } from "services/blog.service";

const NewPost = () => {
  const { t } = useLocale();
  const router = useRouter();

  const toast = useToast();
  const [form, setForm] = useState({ title: "", content: "" });
  const [isSubmitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const res = await createPost({
      authorId: 1,
      title: form.title,
      content: form.content,
    });
    router.back();
    if (res.success) {
      toast({
        position: "top-right",
        title: "Success",
        description: res?.message,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top-right",
        title: "Error",
        description: res?.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout pageTitle={t("newpost")}>
      <Box d="flex" justifyContent="center" alignItems="center" h="95vh">
        <Box w={500}>
          <FormControl id="title" isRequired>
            <FormLabel>{t("title")}</FormLabel>
            <Input
              isInvalid={errors.find((item: any) => item.key === "title")}
              focusBorderColor="teal.500"
              value={form.title}
              placeholder={t("title")}
              disabled={isSubmitted}
              onChange={handleChange}
            />
            <FormHelperText color="red.300">{errors.find((item: any) => item.key === "title")?.content}</FormHelperText>
          </FormControl>

          <FormControl id="content" mt={4} isRequired>
            <FormLabel>{t("content")}</FormLabel>
            <Textarea
              isInvalid={errors.find((item: any) => item.key === "content")}
              focusBorderColor="teal.500"
              value={form.content}
              placeholder={t("content")}
              disabled={isSubmitted}
              size="sm"
              resize="none"
              onChange={handleChange}
            />
            <FormHelperText color="red.300">
              {errors.find((item: any) => item.key === "content")?.content}
            </FormHelperText>
          </FormControl>
          <Box d="flex" justifyContent="flex-end">
            <Button
              w={200}
              isLoading={isSubmitted}
              colorScheme="teal"
              variant={isSubmitted ? "solid" : "outline"}
              onClick={handleSubmit}
            >
              {t("send")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default NewPost;
