import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from './ui/Button';

//interface Particle {
//  x: number;
//  y: number;
//  size: number;
//  speedX: number;
//  speedY: number;
//  opacity: number;
//}

const Hero: React.FC = () => {
//  const titleRef = useRef<HTMLHeadingElement>(null);
//  const canvasRef = useRef<HTMLCanvasElement>(null);
//  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//  const particles = useRef<Particle[]>([]);
//  const animationFrameId = useRef<number>();
//  
//  const handleScroll = (elementId: string) => {
//    const element = document.getElementById(elementId);
//    if (element) {
//      element.scrollIntoView({ behavior: 'smooth' });
//    }
//  };
//
//  useEffect(() => {
//    const title = titleRef.current;
//    if (title) {
//      title.classList.add('animate-fade-in');
//    }
//    
//    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//      entries.forEach(entry => {
//        if (entry.isIntersecting) {
//          entry.target.classList.add('animate-slide-up');
//        }
//      });
//    };
//    
//    const observer = new IntersectionObserver(handleIntersection, {
//      threshold: 0.1
//    });
//    
//    const elements = document.querySelectorAll('.animate-on-scroll');
//    elements.forEach(el => observer.observe(el));
//
//    // Initialize canvas and particles
//    const canvas = canvasRef.current;
//    if (!canvas) return;
//
//    const ctx = canvas.getContext('2d');
//    if (!ctx) return;
//
//    const resizeCanvas = () => {
//      canvas.width = window.innerWidth;
//      canvas.height = window.innerHeight;
//    };
//
//    resizeCanvas();
//    window.addEventListener('resize', resizeCanvas);
//
//    // Create initial particles
//    const createParticles = () => {
//      for (let i = 0; i < 50; i++) {
//        particles.current.push({
//          x: Math.random() * canvas.width,
//          y: Math.random() * canvas.height,
//          size: Math.random() * 2 + 1,
//          speedX: (Math.random() - 0.5) * 0.5,
//          speedY: (Math.random() - 0.5) * 0.5,
//          opacity: Math.random() * 0.5 + 0.2
//        });
//      }
//    };
//
//    createParticles();
//
//    // Animation loop
//    const animate = () => {
//      if (!ctx || !canvas) return;
//
//      ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//      // Create gradient background
//      const gradient = ctx.createRadialGradient(
//        mousePosition.x,
//        mousePosition.y,
//        0,
//        mousePosition.x,
//        mousePosition.y,
//        300
//      );
//      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
//      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
//      ctx.fillStyle = gradient;
//      ctx.fillRect(0, 0, canvas.width, canvas.height);
//
//      // Update and draw particles
//      particles.current.forEach((particle, index) => {
//        particle.x += particle.speedX;
//        particle.y += particle.speedY;
//
//        // Bounce off edges
//        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
//        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
//
//        // Draw particle
//        ctx.beginPath();
//        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
//        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
//        ctx.fill();
//
//        // Interactive effect with mouse
//        const dx = mousePosition.x - particle.x;
//        const dy = mousePosition.y - particle.y;
//        const distance = Math.sqrt(dx * dx + dy * dy);
//        if (distance < 100) {
//          particle.x += (dx / distance) * 0.5;
//          particle.y += (dy / distance) * 0.5;
//        }
//      });
//
//      animationFrameId.current = requestAnimationFrame(animate);
//    };
//
//    animate();
//
//    const handleMouseMove = (e: MouseEvent) => {
//      setMousePosition({ x: e.clientX, y: e.clientY });
//    };
//
//    window.addEventListener('mousemove', handleMouseMove);
//    
//    return () => {
//      elements.forEach(el => observer.unobserve(el));
//      window.removeEventListener('resize', resizeCanvas);
//      window.removeEventListener('mousemove', handleMouseMove);
//      if (animationFrameId.current) {
//        cancelAnimationFrame(animationFrameId.current);
//      }
//    };
//  }, []);
//  
//  return (
//    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
//      <canvas
//        ref={canvasRef}
//        className="absolute inset-0 z-0"
//        style={{ background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)' }}
//      />
  const titleRef = useRef<HTMLHeadingElement>(null);
    
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add('animate-fade-in');
    }
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1920)', 
        }}
      >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="flex flex-col space-y-6">
            <p className="text-xl text-primary-600 dark:text-primary-400 font-medium animate-on-scroll opacity-0">Hello, I'm</p>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white opacity-0">
              Fahimul Arefin
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 animate-on-scroll opacity-0">
            Fullstack Developer
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl animate-on-scroll opacity-0">
              I build exceptional digital experiences with a focus on user-centered design and performance optimization.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-on-scroll opacity-0">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => handleScroll('projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleScroll('contact')}
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex space-x-6 pt-6 animate-on-scroll opacity-0">
              <a href="https://github.com/Fahimul-06" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="www.linkedin.com/in/fahimul-arefin2000
               " className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => handleScroll('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;