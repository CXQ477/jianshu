document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('articleForm');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const articleList = document.getElementById('articleList');

    // ??????
    function loadArticles() {
        articleList.innerHTML = '';
        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        articles.reverse().forEach(article => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${article.title}</strong><br>${article.content}`;
            articleList.appendChild(li);
        });
    }

    // ????
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        if (!title || !content) return;

        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        articles.push({ title, content });
        localStorage.setItem('articles', JSON.stringify(articles));

        titleInput.value = '';
        contentInput.value = '';
        loadArticles();
    });

    loadArticles();
});