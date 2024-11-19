
// Simulação de posts do blog
const posts = [
    { id: 1, title: 'Primeiro Post', content: 'Conteúdo do primeiro post', category: 'Geral', date: '2023-05-01' },
    { id: 2, title: 'Segundo Post', content: 'Conteúdo do segundo post', category: 'Amor', date: '2023-05-05' },
    { id: 3, title: 'Terceiro Post', content: 'Conteúdo do terceiro post', category: 'Viagem', date: '2023-05-10' }
];

// Função para exibir posts
function displayPosts(postsToShow) {
    const postsContainer = document.getElementById('postagens');
    postsContainer.innerHTML = '<h2>Postagens</h2>';
    postsToShow.forEach(post => {
        postsContainer.innerHTML += `
            <article>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <small>Categoria: ${post.category} | Data: ${post.date}</small>
            </article>
        `;
    });
}

// Função para ordenar posts
function sortPosts(criteria) {
    const sortedPosts = [...posts];
    if (criteria === 'date') {
        sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (criteria === 'category') {
        sortedPosts.sort((a, b) => a.category.localeCompare(b.category));
    }
    displayPosts(sortedPosts);
}

// Função para filtrar posts por categoria
function filterPostsByCategory(category) {
    const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
    displayPosts(filteredPosts);
}

// Manipulador do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());
    console.log('Dados do formulário:', formObject);
    // Aqui você pode adicionar código para enviar os dados do formulário para um servidor
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    displayPosts(posts);
    // Aqui você pode adicionar código para criar botões de ordenação e filtro
});
