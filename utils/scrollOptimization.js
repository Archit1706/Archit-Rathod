// Scroll optimization utilities
export const throttle = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Optimized scroll handler
export const optimizeScroll = () => {
    // Enable hardware acceleration
    document.documentElement.style.transform = 'translateZ(0)';

    // Improve scroll performance
    const style = document.createElement('style');
    style.textContent = `
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .scroll-optimized {
      transform: translateZ(0);
      will-change: scroll-position;
    }
    
    .animation-optimized {
      transform: translateZ(0);
      will-change: transform, opacity;
    }
  `;
    document.head.appendChild(style);

    // Add optimized class to body
    document.body.classList.add('scroll-optimized');
};

// Performance monitoring
export const performanceMonitor = {
    init() {
        if (typeof window !== 'undefined' && 'performance' in window) {
            // Monitor FPS
            let lastTime = performance.now();
            let fps = 0;
            let frameCount = 0;

            const measureFPS = (currentTime) => {
                frameCount++;
                if (currentTime >= lastTime + 1000) {
                    fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                    frameCount = 0;
                    lastTime = currentTime;

                    // Reduce animations if FPS is low
                    if (fps < 30) {
                        document.body.classList.add('low-performance');
                    } else {
                        document.body.classList.remove('low-performance');
                    }
                }
                requestAnimationFrame(measureFPS);
            };

            requestAnimationFrame(measureFPS);
        }
    }
};