import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://news-api-uzma.onrender.com/api"
});

export const getArticles = (topic = null) => {
    const params = topic ? { topic } : {};
return ncNews
  .get("/articles", { params })
  .then(({ data }) => data.articles);
}

export const getArticleByID = (id) => {
  return ncNews.get(`/articles/${id}`).then(({ data }) => data.article);
}

export default ncNews;