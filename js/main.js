const slider = tns({
  container: '.header-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false
});

const sliderPrev = document.querySelector('#sliderPrev');
const sliderNext = document.querySelector('#sliderNext');

sliderPrev.onclick = () => slider.goTo('prev');
sliderNext.onclick = () => slider.goTo('next');

// Блоки фракций
const currentSliderIndexEL = document.querySelector('#sliderCurrent');
const sliderTotalEL = document.querySelector('#sliderTotal');

function updateSlideFraction() {
  const sliderInfo = slider.getInfo();
  currentSliderIndexEL.innerText = '0' + (sliderInfo.navCurrentIndex + 1);
  sliderTotalEL.innerText = '0' + sliderInfo.pages;
}

// На старте
updateSlideFraction();

// При перемещении
slider.events.on('indexChanged', () => updateSlideFraction());