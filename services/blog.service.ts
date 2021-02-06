import { Post } from "@prisma/client";
import axios from "axios";

export interface IPost {
  authorId: number;
  title: string;
  content?: string;
}

export const getPosts = async () => {
  const res = await fetch("http:localhost:3000/posts");
};

export const createPost = async (post: IPost) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/new`, post);
    console.log(res, "res");
  } catch (error) {
    console.log(error, "eeeeee");
  }
};
