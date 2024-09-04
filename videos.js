document.addEventListener("scroll", function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;

        if (boxTop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
});
