document.addEventListener('DOMContentLoaded', function () {
    const detailsBtns = document.querySelectorAll('.details-btn');

    detailsBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const projectDescription = this.parentElement.nextElementSibling;
            projectDescription.hidden = !projectDescription.hidden;
        });

        btn.addEventListener('mouseenter', function () {
            const projectDescription = this.parentElement.nextElementSibling;
            projectDescription.style.opacity = '1';
        });

        btn.addEventListener('mouseleave', function () {
            const projectDescription = this.parentElement.nextElementSibling;
            if (projectDescription.hidden) {
                projectDescription.style.opacity = '0';
            }
        });
    });
});

//function updateHeading(option) {
//    const heading = document.querySelector('h1');
//    heading.textContent = option.textContent;
//}