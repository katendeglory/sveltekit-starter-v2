import axios from 'axios';

export async function load({ params }) {
  const link = `https://jsonplaceholder.typicode.com/posts/${params.article}`;
  const res = await axios.get(link).catch((err) => console.log(err));
  let article = res.data;
  return article;
}