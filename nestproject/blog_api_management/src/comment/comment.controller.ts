import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse as SwaggerApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { ApiResponse } from 'src/user/utills/Apiresponse';
import { Jwtguard } from 'src/guards/auth/auth.guard';
import { RolesGuard } from 'src/guards/role/role.guard';
import { Roles } from 'src/guards/role/roles.metadata';

@ApiTags('Comments')
@ApiBearerAuth()
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  //! : Create Comment
  @Post(':id')
  @UseGuards(Jwtguard, RolesGuard)
  @Roles('reader', 'Author')
  @ApiOperation({ summary: 'Create a comment on a post (reader/Author)' })
  @ApiBody({
    type: CommentDto,
    description: 'Comment payload',
    examples: {
      example1: {
        summary: 'Basic Comment',
        value: {
          content: 'This is a great post!',
        },
      },
    },
  })
  @SwaggerApiResponse({
    status: 201,
    description: 'Comment created successfully.',
    schema: {
      example: {
        success: true,
        message: 'Comment created successfully',
        data: {
          id: 1,
          content: 'This is a great post!',
          postId: 5,
          userId: 10,
          createdAt: '2025-09-01T10:30:00.000Z',
        },
      },
    },
  })
  async createComment(
    @Param('id') id: number,
    @Body() data: Partial<CommentDto>,
  ): Promise<ApiResponse<CommentDto>> {
    return await this.commentService.createComment(id, data);
  }

  //! : Delete Comment
  @Delete(':id')
  @UseGuards(Jwtguard, RolesGuard)
  @Roles('Author', 'Admin')
  @ApiOperation({ summary: 'Soft delete a comment (Author/Admin)' })
  @SwaggerApiResponse({
    status: 200,
    description: 'Comment soft deleted.',
    schema: {
      example: {
        success: true,
        message: 'Comment soft deleted',
        data: {
          deleted: true,
          message: 'Comment with id 1 has been deleted',
        },
      },
    },
  })
  async deleteComment(@Param('id') id: number): Promise<ApiResponse<{}>> {
    return this.commentService.deleteComment(id);
  }
}