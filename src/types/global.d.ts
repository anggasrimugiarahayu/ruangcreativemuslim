export {};

declare global {
  interface Window {
    updateSlider?: () => void;
    nextSlide?: () => void;
    prevSlide?: () => void;
    toggleFeature?: (index: number) => void;
    toggleFaq?: (index: number) => void;
  }
}
