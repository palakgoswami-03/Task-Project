// src/posts/posts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiResponse } from 'src/user/utills/Apiresponse';
import { ApiError } from 'src/user/utills/Apierror';
import { PaginatedResult } from 'src/user/interfaces/pagination.interface';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async createPost(data: CreatePostDto, userId: number, image?: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user || user.role !== 'Author') throw new ApiError(403, 'Only Authors can create posts');

    const post = this.postRepo.create({ ...data, user, image });
    await this.postRepo.save(post);

    return new ApiResponse(201, post, 'Post created successfully');
  }

  async updatePost(id: number, data: UpdatePostDto, userId: number, image?: string) {
    const post = await this.postRepo.findOne({ where: { id, deleted: false }, relations: ['user'] });
    if (!post) throw new ApiError(404, 'Post not found');
    if (post.user.id !== userId) throw new ApiError(403, 'You can only update your own posts');

    Object.assign(post, data);
    if (image) post.image = image;
    await this.postRepo.save(post);

    return new ApiResponse(200, post, 'Post updated successfully');
  }

  async getPosts(page = 1, limit = 10, search?: string, pagination = true) {
    let where: any = { deleted: false };
    if (search) where = [{ ...where, title: Like(`%${search}%`) }, { ...where, content: Like(`%${search}%`) }];

    const [data, total] = await this.postRepo.findAndCount({
      where,
      skip: pagination ? (page - 1) * limit : undefined,
      take: pagination ? limit : undefined,
      order: { createdAt: 'DESC' },
      relations: ['user'],
    });

    return new ApiResponse(
      200,
      {
        data,
        total,
        page: pagination ? page : 1,
        limit: pagination ? limit : total,
        totalPages: pagination ? Math.ceil(total / limit) : 1,
      },
      'Posts fetched successfully',
    );
  }

  async getPostById(id: number) {
    const post = await this.postRepo.findOne({ where: { id, deleted: false }, relations: ['user'] });
    if (!post) throw new ApiError(404, 'Post not found');
    return new ApiResponse(200, post, 'Post fetched successfully');
  }

  async deletePost(id: number, userId: number) {
    const post = await this.postRepo.findOne({ where: { id, deleted: false }, relations: ['user'] });
    if (!post) throw new ApiError(404, 'Post not found');

    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new ApiError(404, 'User not found');

    if (user.role !== 'Admin' && post.user.id !== userId) throw new ApiError(403, 'Only Admin or post owner can delete');

    post.deleted = true;
    await this.postRepo.save(post);

    return new ApiResponse(200, { deleted: true, message: 'Post deleted successfully' }, 'Post soft deleted');
  }
}
