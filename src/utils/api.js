import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-api-uzma.onrender.com/api"
});

export const getArticles = (sort_by, order, topic) => {
    const params = { sort_by, order, topic };
return ncNews
  .get("/articles", { params })
  .then(({ data }) => data.articles);
}

export const getArticleByID = (id) => {
  return ncNews.get(`/articles/${id}`).then(({ data }) => data.article);
}

export const getCommentsbyArtID = (id) => {
  return ncNews.get(`/articles/${id}/comments`).then(({ data }) => data.comments);
}

export const updateArticleVotes = ({ inc_votes }, id) => {
  return ncNews.patch(`/articles/${id}`, { inc_votes }).then(({ data }) => data.article.votes);
}

export const addCommentToArticle = (newComment, id) => {
  return ncNews.post(`/articles/${id}/comments`, newComment).then(({ data }) => data.comment);
}

export const deleteArticleComment = (comment_id) => {
  return ncNews.delete(`/comments/${comment_id}`).then(() => {});
}

export const getTopics = () => {
  return ncNews.get('/topics').then(({ data }) => data.topics);
}

export const getUserByUsername = (username) => {
  return ncNews.get(`/users/${username}`).then(({ data }) => data.user);
}

export default ncNews;