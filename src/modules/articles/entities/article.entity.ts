import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@app/modules/users/entities/user.entity';

export class ArticleEntity implements Article {
  constructor({ author, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty({description: '文章标题'}) // 在 Parameters - Responses - Schema 中展示
  title: string;

  @ApiProperty({description: '文章描述'})
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  authorId: number | null;

  @ApiProperty({ required: false, type: UserEntity })
  author: UserEntity;
}
