
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('faqSearch');
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
            if (questionText.includes(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
