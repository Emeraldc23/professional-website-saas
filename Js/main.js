document.addEventListener('DOMContentLoaded', ()=>{
    const faqContent = document.querySelector('.faq-content')

    faqContent.addEventListener('click', (e)=>{
        const faqGroup = e.target.closest('.faq-group-header')
        
        if(!faqGroup) return;
        const group = faqGroup.parentElement;
        const faqBody = group.querySelector('.faq-group-text')
        const icon = faqGroup.querySelector('i')

        // TOGGLE CLASS FOR ICON 
        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')
        
        // TOGGLE FOR THE BODY 
        faqBody.classList.toggle('open')

        // Function to close and change the icon when another tab is open
        const faqGroups = faqContent.querySelectorAll('.faq-group');
        faqGroups.forEach( (otherFaq) => {
            if(otherFaq !== group){
                const groupItem = otherFaq.querySelector('.faq-group-text') 
                const iconItem = otherFaq.querySelector('.faq-group-header i');

                groupItem.classList.remove('open');
                iconItem.classList.remove('fa-minus')
                iconItem.classList.add('fa-plus')
            }
           

        });
    }
    )
})

document.addEventListener('DOMContentLoaded', ()=>{
    const hamburgerButton = document.getElementById('hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu')

    hamburgerButton.addEventListener('click', ()=> mobileMenu.classList.toggle('active'))
})