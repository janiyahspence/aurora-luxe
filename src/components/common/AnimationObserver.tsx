import React, { useEffect, useRef } from 'react';

interface AnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  threshold?: number;
  rootMargin?: string;
}

const AnimationObserver: React.FC<AnimationObserverProps> = ({
  children,
  className = '',
  animationType = 'fade-in',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  const animationClass = `${animationType}-section`;

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimationObserver;