import { Post } from "@prisma/client";
import axios from "axios";

export interface IPost {
  authorId: number;
  title: string;
  content?: string;
}

export const getPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`);
  const data = await res.json();
  return data;
};

export const createPost = async (post: IPost) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/new`, post);
  return data;
};
