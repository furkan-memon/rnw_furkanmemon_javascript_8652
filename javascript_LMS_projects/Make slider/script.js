  let index = 0;
    let slides = document.getElementsByClassName("slide")
    let dots = document.getElementsByClassName("dot")

    function showSlide(i) {
      for (let s = 0; s < slides.length; s++) {
        slides[s].classList.remove("active")
        dots[s].classList.remove("active")
      }
      slides[i].classList.add("active")
      dots[i].classList.add("active")
    }

    function nextSlide() {
      index = (index + 1) % slides.length
      showSlide(index)
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length
      showSlide(index)
    }

    function goToSlide(i) {
      index = i
      showSlide(index)
    }
    setInterval(nextSlide, 5000)