import { Entity, ManyToOne, PrimaryKey, Property, wrap } from '@mikro-orm/mysql';
import { User } from '../user/user.entity';
import { Article } from './article.entity';

@Entity()
export class Comment {

  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  body: string;

  @ManyToOne()
  article: Article;

  @ManyToOne()
  author: User;

  constructor(author: User, article: Article, body: string) {
    this.author = author;
    this.article = article;
    this.body = body;
  }

  toJSON(user?: User) {
    const o = wrap<Comment>(this).toObject();
    o.author = this.author.toJSON(user);
    return o;
  }
}

export interface CommentDTO {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: any;
}
