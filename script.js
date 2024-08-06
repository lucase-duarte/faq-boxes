const faqBoxes = document.querySelectorAll('.faq-box')

faqBoxes.forEach(box => {
    const textContent = box.children[0]
    
    box.style.height = textContent.children[0].offsetHeight + 32 + 'px'

    box.addEventListener('click', () => {
        if(box.classList.contains('active')) {
            box.style.height = textContent.children[0].offsetHeight + 32 + 'px'
            box.classList.remove('active')
        }

        else {
            box.style.height = textContent.offsetHeight + 32 + 'px'
            box.classList.add('active')
        }
    })
})



