(() => {
  const articles = [];
  let ids = new Array(2).fill().map((_, i) => i + 1);

  const getArticles = async () => {
    try {
      const res1 = await fetch(
        `https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles/${1}`
      );
      const res2 = await fetch(
        `https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles/${2}`
      );
      const articles1 = await res1.json();
      const articles2 = await res2.json();
      const articles = articles1.concat(articles2);
      return articles;
    } catch (error) {
      console.log(`error:${error}`);
    }
    /* endpoint: https://raw.githubusercontent.com/miquelmasrieramrf/webTest/main/data/articles/{ __PAGE_NUMBER__ } */
  };

  const showArticles = (articles) => {
    const list = document.getElementById('newsList');

    articles.forEach((article) => {
      const li = document.createElement('li');

      li.classList.add('article');
      li.innerHTML = `
				<a href="" style="text-decoration: none; color: #FFF;">
					<p style="font-size: 1.25rem; font-weight: bold; margin: 1rem 0 0.5rem;">
						${article.title}
					</p>
					<p style="margin: 0.5rem 0; border-top: 1px solid #FFF;">${article.subtitle}</p>
					<p style="text-align: right; margin-bottom: 0; font-style: italic; font-size: 0.8rem;">
						${article['author']}
					</p>
				</a>
			`;

      list.appendChild(li);
    });
  };

  document
    .getElementById('importNews_btn')
    .addEventListener('click', async (e) => {
      e.preventDefault();

      const result = await getArticles();
      showArticles(result);
    });
})();
