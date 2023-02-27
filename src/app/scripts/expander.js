document.addEventListener('DOMContentLoaded', 
setTimeout(function() {
    let titleText = document.getElementById('title-text');
    titleText.textContent = 'Balance Service Administrator Manual';

    document.title = 'Balance Service Administrator Manual';

    let expandContents = document.getElementsByClassName('expand-content');
    for (let i = 0; i < expandContents.length; i++) {
        expandContents[i].classList.add('hidden');
    }

    let expandControlImages = document.getElementsByClassName('expand-control-image');
    for (let i = 0; i < expandControlImages.length; i++) {
        expandControlImages[i].classList.add('right-facing');
    }

    let arrowImages = document.getElementsByClassName('expand-control-icon');
    for (let index = 0; index < arrowImages.length; index++) {
        arrowImages[index].innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' role='presentation'><path d='M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z' fill='currentColor' fill-rule='evenodd'/></svg>";
        
    }

    let expandContainers = document.getElementsByClassName('expand-container');
    for (let i = 0; i < expandContainers.length; i++) {
        expandContainers[i].addEventListener('click', function(event) {
            let target = event.currentTarget;
            let content = target.children[1];

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    }}, 50)
    );
