const paragraphs = document.querySelectorAll('.change-color');

function handleScroll() {
  paragraphs.forEach(paragraph => {
    const rect = paragraph.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the center of the paragraph is in the center of the viewport
    if (rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2) {
      paragraph.style.color = 'red';
    } else {
      paragraph.style.color = 'black';
    }
  });
}

window.addEventListener('scroll', handleScroll);
