import { User } from "src/user/entities/user.entity";
import { Post } from "src/post/entities/post.entity";

export interface CommentInterface {
  id: number;
  content: string;
  createdAt: Date;
  post: Post;
  user: User;
}