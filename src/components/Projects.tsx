import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import chatAppPreview from "@/assets/chat-app-preview.jpg";
import diseasePredictionPreview from "@/assets/disease-prediction-preview.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat App",
      subtitle: "PingLoom Chat Application",
      description: "A modern real-time chat application with instant messaging, media sharing, and user authentication. Built with cutting-edge technologies for low-latency communication.",
      image: chatAppPreview,
      technologies: ["Firebase", "Socket.io", "Cloudinary", "React", "Real-time"],
      features: [
        "Real-time authentication and user management",
        "Instant messaging with low-latency",
        "Media sharing and file upload",
        "Smooth and responsive UI/UX"
      ],
      liveUrl: "https://pingloom-chat-app.vercel.app",
      githubUrl: "https://github.com/Khushi280605/pingloom-chat-app",
      color: "from-primary to-secondary",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Multi-Disease Prediction",
      subtitle: "ML-Powered Healthcare App",
      description: "An intelligent web application that predicts multiple diseases including Diabetes, Heart Disease, and Parkinson's using advanced machine learning algorithms.",
      image: diseasePredictionPreview,
      technologies: ["Python", "Streamlit", "Machine Learning", "Healthcare", "Deployment"],
      features: [
        "Predicts Diabetes, Heart Disease, Parkinson's",
        "Machine learning-based predictions",
        "User-friendly Streamlit interface",
        "Deployed for public accessibility"
      ],
      liveUrl: "https://disease-prediction-app-khushi280605.streamlit.app/",
      githubUrl: "https://github.com/Khushi280605/disease-prediction-app",
      color: "from-secondary to-primary",
      icon: <Heart className="h-6 w-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my latest work and innovations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Project Icon */}
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${project.color}/20 backdrop-blur-sm border border-white/10`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-primary/80 text-sm mb-3">{project.subtitle}</p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="btn-primary flex-1"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="btn-outline"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 hover-lift">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Stay tuned for more exciting developments!
            </p>
            <Button
              asChild
              className="btn-primary"
            >
              <a
                href="https://github.com/Khushi280605"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;