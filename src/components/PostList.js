import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
//
import Theme from "utils/Theme";
import ReadTime from "utils/ReadTime";

import Smackdown from "./Smackdown";

import Link from "./Link";
import { Button } from "./Html";

const PostListStyled = styled("div")`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

const Post = styled("div")`
  width: 100%;
  max-width: 50rem;
  padding: 3rem;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }

  .info {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  .tags {
    font-size: 0.8rem;
    margin-bottom: 1rem;

    .tag {
      display: inline-block;
      padding: 0.4rem 0.6rem;
      border-radius: 0.5rem;
      background: ${Theme.colors.primaryDark};
      color: white;
      margin: 0 0.3rem 0.3rem 0;
    }
  }

  .summary {
    position: relative;

    .content {
      text-align: left;
      margin-bottom: 1rem;
    }

    .more {
      text-align: center;
    }
  }

  .image {
    text-align: center;
    img {
      max-height: 6rem;
      max-width: 100%;
      width: auto;
    }
  }
`;

export default function PostList({ blog, posts }) {
  return (
    <PostListStyled>
      {posts.map(post => {
        const wordCount = post.fields.body.split(" ").length;
        return (
          <Post key={post.fields.slug}>
            <article>
              <header>
                <h2 className="title">
                  <Link to={`/${blog}/${post.fields.slug}/`}>
                    {post.fields.title}
                  </Link>
                </h2>
                <div className="info">
                  {post.fields.author.map(author => (
                    <span key={author.fields.name}>{author.fields.name}</span>
                  ))}{" "}
                  on {format(new Date(post.sys.createdAt), "MMM DD, YYYY")}{" "}
                  &bull; {ReadTime(wordCount)} min read
                </div>
                <div className="tags">
                  {post.fields.tags.map(tag => (
                    <Link
                      to={`/devblog/tags/${tag}`}
                      className="tag"
                      key={tag}
                      style={{
                        background: Theme.colors.tags[tag]
                      }}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </header>
              <div className="summary">
                <div className="content">
                  <Smackdown micro source={post.fields.shortDescription} />
                </div>
                <div className="more">
                  <Button size="sm" burst>
                    <Link to={`/${blog}/${post.fields.slug}/`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </article>
          </Post>
        );
      })}
    </PostListStyled>
  );
}
