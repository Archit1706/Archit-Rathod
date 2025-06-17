"use client";
import React, { useEffect, useRef } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);
    const animationId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Reduced star configuration for better performance
        const stars = [];
        const numStars = 150; // Reduced from 400
        const numShootingStars = 2; // Reduced from 3
        const shootingStars = [];

        // Create stars with optimized properties
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5, // Smaller sizes
                speed: Math.random() * 0.3 + 0.1, // Slower movement
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.01 + 0.005, // Slower twinkling
                color: Math.random() > 0.5 ?
                    `rgba(139, 92, 246, ${Math.random() * 0.8 + 0.2})` :
                    `rgba(100, 149, 237, ${Math.random() * 0.8 + 0.2})`
            });
        }

        // Create shooting stars
        const createShootingStar = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.3,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 6 + 3,
            angle: Math.random() * 0.5 + 0.2,
            opacity: 1,
            life: 1
        });

        for (let i = 0; i < numShootingStars; i++) {
            shootingStars.push(createShootingStar());
        }

        // Reduced nebula particles for better performance
        const nebulaParticles = [];
        for (let i = 0; i < 20; i++) { // Reduced from 50
            nebulaParticles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 80 + 40, // Smaller sizes
                opacity: Math.random() * 0.08 + 0.03, // Lower opacity
                speed: Math.random() * 0.15 + 0.03, // Slower movement
            });
        }

        let lastTime = 0;
        const targetFPS = 60;
        const frameInterval = 1000 / targetFPS;

        // Optimized animation loop
        const animate = (currentTime) => {
            // Throttle to target FPS
            if (currentTime - lastTime < frameInterval) {
                animationId.current = requestAnimationFrame(animate);
                return;
            }
            lastTime = currentTime;

            // Create gradient background (cached)
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#1a0f2e');
            gradient.addColorStop(1, '#000510');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw nebula with reduced frequency
            if (Math.random() > 0.7) { // Only draw 30% of the time
                nebulaParticles.forEach((particle) => {
                    const gradient = ctx.createRadialGradient(
                        particle.x, particle.y, 0,
                        particle.x, particle.y, particle.size
                    );
                    gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity})`);
                    gradient.addColorStop(0.5, `rgba(139, 92, 246, ${particle.opacity * 0.5})`);
                    gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

                    ctx.save();
                    ctx.globalCompositeOperation = 'screen';
                    ctx.fillStyle = gradient;
                    ctx.fillRect(
                        particle.x - particle.size,
                        particle.y - particle.size,
                        particle.size * 2,
                        particle.size * 2
                    );
                    ctx.restore();

                    // Update nebula
                    particle.x += particle.speed;
                    if (particle.x > canvas.width + particle.size) {
                        particle.x = -particle.size;
                    }
                });
            }

            // Draw stars with optimized rendering
            ctx.save();
            stars.forEach((star) => {
                // Simplified twinkling
                star.opacity += Math.sin(currentTime * star.twinkleSpeed) * 0.01;
                star.opacity = Math.max(0.2, Math.min(0.9, star.opacity));

                ctx.globalAlpha = star.opacity;
                ctx.fillStyle = star.color;
                ctx.shadowBlur = star.size * 2; // Reduced shadow blur
                ctx.shadowColor = star.color;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
                ctx.fill();

                // Update star position
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = -5;
                    star.x = Math.random() * canvas.width;
                }
            });
            ctx.restore();

            // Draw shooting stars with reduced frequency
            shootingStars.forEach((shootingStar, index) => {
                if (shootingStar.life <= 0) {
                    // Only create new shooting star occasionally
                    if (Math.random() > 0.95) {
                        shootingStars[index] = createShootingStar();
                    }
                    return;
                }

                ctx.save();
                ctx.globalAlpha = shootingStar.opacity * 0.8; // Slightly dimmer

                const gradient = ctx.createLinearGradient(
                    shootingStar.x, shootingStar.y,
                    shootingStar.x - shootingStar.length * Math.cos(shootingStar.angle),
                    shootingStar.y - shootingStar.length * Math.sin(shootingStar.angle)
                );
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(0.5, '#a8d5ff');
                gradient.addColorStop(1, 'transparent');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5; // Thinner lines
                ctx.lineCap = 'round';

                ctx.beginPath();
                ctx.moveTo(shootingStar.x, shootingStar.y);
                ctx.lineTo(
                    shootingStar.x - shootingStar.length * Math.cos(shootingStar.angle),
                    shootingStar.y - shootingStar.length * Math.sin(shootingStar.angle)
                );
                ctx.stroke();

                ctx.restore();

                // Update shooting star
                shootingStar.x += shootingStar.speed * Math.cos(shootingStar.angle);
                shootingStar.y += shootingStar.speed * Math.sin(shootingStar.angle);
                shootingStar.life -= 0.006; // Slower decay
                shootingStar.opacity = shootingStar.life;
            });

            animationId.current = requestAnimationFrame(animate);
        };

        animationId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{
                background: 'transparent',
                willChange: 'auto' // Let browser optimize
            }}
        />
    );
};

export default StarField;