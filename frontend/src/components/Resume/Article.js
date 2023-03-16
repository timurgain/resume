function Article({ article, ...props }) {
  return (
    <main
      className="content"
      dangerouslySetInnerHTML={{ __html: article }}
    ></main>
  );
}

export default Article;
