export function SectionDivider() {
  return (
    <div className="relative h-24 sm:h-32 overflow-hidden -mt-12 sm:-mt-16">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 Q360 120 720 60 Q1080 0 1440 60 V120 H0 V60Z"
            className="fill-background"
          />
        </svg>
      </div>
    </div>
  );
}
