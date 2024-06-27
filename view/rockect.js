document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("load").style.display = "none";
        document.getElementById("description__container").style.display = "block";
    }, 2000);
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel__item');
    
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.item__progress__bar::before').style.background = `conic-gradient(var(--color--three) ${item.style.getPropertyValue('--percentage')}, transparent 0%)`;
        });
        
        item.addEventListener('mouseout', () => {
            item.querySelector('.item__progress__bar::before').style.background = 'conic-gradient(var(--color--three) 0%, transparent 0%)';
        });
    });
});
