declare module "embla-carousel-autoplay" {
  type AutoplayOptions = {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
    root?: Element | null;
  };

  type Autoplay = (options?: AutoplayOptions) => any;

  const autoplay: Autoplay;
  export default autoplay;
}
