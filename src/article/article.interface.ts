import { ArticleDTO } from './article.entity';
import { CommentDTO } from './comment.entity';

interface IComment extends CommentDTO {}

export interface ICommentsRO {
  comments: IComment[];
}

export interface IArticleRO {
  article: ArticleDTO;
}

export interface IArticlesRO {
  articles: ArticleDTO[];
  articlesCount: number;
}
