const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions()
{
    //Button click active class
    for(let i=0; i <sectBtn.length; i++){
    sectBtn[i].addEventListener('click',  function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn',' ');
        this.className += ' active-btn';
    });
}
    //Section Active
    allSections.addEventListener('click',(e)=>{
        const idt = e.target.dataset.id;
        if (idt){
            //remove the selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            
            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const elements = document.getElementById(idt);
            elements.classList.add('active');
        }
    });

}
    


PageTransitions();
