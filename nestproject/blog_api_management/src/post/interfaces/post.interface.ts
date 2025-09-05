import { User } from "src/user/entities/user.entity";
import { Comment } from "src/comment/entities/comment.entity";

export class PostResponseDto {
  id: number;
  title: string;
  contents: string;
  status: string;
  userId: number;
  user?: Partial<User>;
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}