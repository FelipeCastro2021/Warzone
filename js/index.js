function initTabMenu() {
  const images = document.querySelectorAll('.section-list li');
  const sectionsCharacters = document.querySelectorAll(
    '#characters .section-item'
  );
  const sectionWeapons = document.querySelectorAll('#weapons .section-item');

  if (images.length && sectionsCharacters.length && sectionWeapons.length) {
    sectionWeapons[0].classList.add('active');
    sectionsCharacters[0].classList.add('active');

    function handleContent(index) {
      if (index < sectionWeapons.length) {
        sectionWeapons.forEach(section => {
          section.classList.remove('active');
        });
        sectionWeapons[index].classList.add('active');
      } else {
        sectionsCharacters.forEach(section => {
          section.classList.remove('active');
        });
        sectionsCharacters[index - sectionWeapons.length].classList.add(
          'active'
        );
      }
    }

    images.forEach((image, index) => {
      image.addEventListener('click', () => {
        handleContent(index);
      });
    });
  }
}

initTabMenu();

function initAccordion() {
  const dts = document.querySelectorAll('.faq-list dt');

  function handleAccordion() {
    const accordion = this;

    accordion.classList.toggle('active');
    accordion.nextElementSibling.classList.toggle('active');
  }

  dts.forEach(dt => {
    dt.addEventListener('click', handleAccordion);
  });
}

initAccordion();
