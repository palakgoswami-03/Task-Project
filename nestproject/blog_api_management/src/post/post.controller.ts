// src/posts/posts.controller.ts
import {
  Controller,
  Post as HttpPost,
  Put,
  Delete,
  Get,
  Param,
  Query,
  Req,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import type { MulterFile } from 'src/types/multer-file';
import { PostService } from './post.service';
import { Jwtguard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.metadata';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiConsumes, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ApiResponse } from 'src/user/utills/Apiresponse';
import { Post as Posts } from './entities/post.entity';
import { PaginatedResult } from './interfaces/pagination.interface';

@ApiTags('Posts')
@ApiBearerAuth()
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost('/create')
  @UseGuards(Jwtguard, RolesGuard)
  @Roles('Author')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/posts',
        filename: (req, file, cb) =>
          cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`),
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'My First Post' },
        content: { type: 'string', example: 'This is the post content' },
        status: { type: 'string', example: 'draft' },
        image: { type: 'string', format: 'binary' }, // File input
      },
      required: ['title', 'content'],
    },
  })
  @ApiOperation({ summary: 'Create a new post (Author) with optional image' })
  async createPost(
    @Body() body: CreatePostDto,
    @Req() req: any,
    @UploadedFile() file?: MulterFile,
  ): Promise<ApiResponse<Posts>> {
    const fileName = file ? file.filename : undefined;
    return this.postService.createPost(body, req.user.id, fileName);
  }

  @Put(':id')
  @UseGuards(Jwtguard, RolesGuard)
  @Roles('Author')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/posts',
        filename: (req, file, cb) =>
          cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${extname(file.originalname)}`),
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        status: { type: 'string' },
        image: { type: 'string', format: 'binary' },
      },
    },
  })
  @ApiOperation({ summary: 'Update own post with optional image' })
  async updatePost(
    @Param('id') id: number,
    @Body() body: UpdatePostDto,
    @Req() req: any,
    @UploadedFile() file?: MulterFile,
  ): Promise<ApiResponse<Posts>> {
    const fileName = file ? file.filename : undefined;
    return this.postService.updatePost(id, body, req.user.id, fileName);
  }

  @Get('/')
  @ApiOperation({ summary: 'Get all posts with pagination & search' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'pagination', required: false, type: String })
  async getPosts(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('pagination') pagination = 'true',
  ): Promise<ApiResponse<PaginatedResult<Posts[]>>> {
    return this.postService.getPosts(page, limit, search, pagination !== 'false');
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single post by ID' })
  async getPostById(@Param('id') id: number): Promise<ApiResponse<Posts>> {
    return this.postService.getPostById(id);
  }

  @Delete(':id')
  @UseGuards(Jwtguard, RolesGuard)
  @Roles('Author', 'Admin')
  @ApiOperation({ summary: 'Soft delete a post (Author/Admin)' })
  async deletePost(@Param('id') id: number, @Req() req: any) {
    return this.postService.deletePost(id, req.user.id);
  }
}
