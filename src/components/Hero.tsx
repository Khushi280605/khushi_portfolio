import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {particles.map((particle) => (
          <div
            key={particle}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Khushi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            <span className="typing-text">Computer Science Engineering Student</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Passionate Computer Science Engineering student with strong problem-solving skills, 
            eager to apply programming and full stack development expertise in a dynamic software development environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary glow-effect group">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  View Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">

                <img 
                  src="/lovable-uploads/75f56a1f-3fd3-4343-a341-67a06b6f6cdb.png" 
                  alt="Khushi's Resume" 
                  className="w-full h-auto object-contain"
                />
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="btn-outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Khushi280605"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/khushi2806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:yadavkhushi7448@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;