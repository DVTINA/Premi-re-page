document.addEventListener('DOMContentLoaded', () => {
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche le rechargement de la page

            const commentInput = this.querySelector('input[type="text"]');
            const commentText = commentInput.value.trim();

            if (commentText) {
                const commentList = this.previousElementSibling; // Cible la div .comment-list
                
                // Crée le nouvel élément de commentaire
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `<p><strong>Utilisateur:</strong> ${escapeHTML(commentText)}</p>`;
                
                // Ajoute le nouveau commentaire à la liste
                commentList.appendChild(newComment);
                
                // Réinitialise le champ de saisie
                commentInput.value = '';
            }
        });
    });
});

/**
 * Fonction simple pour échapper les caractères HTML et prévenir les injections XSS.
 * @param {string} str La chaîne de caractères à échapper.
 * @returns {string} La chaîne de caractères sécurisée.
 */
function escapeHTML(str) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}
