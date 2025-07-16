import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "ML Virtual Internship",
      company: "Edunet Foundation",
      duration: "Dec 2024 – Jan 2025",
      location: "Remote",
      type: "Human Pose Estimation Project",
      description: [
        "Developed a real-world pose estimation project using Python, OpenCV, and ML algorithms",
        "Built real-time pose detection model with data preprocessing and tuning",
        "Engineered a scalable data pipeline for input processing"
      ],
      technologies: ["Python", "OpenCV", "Machine Learning", "Data Processing"],
      color: "from-primary to-secondary"
    },
    {
      title: "Python Full Stack Virtual Internship",
      company: "Eduskills Academy",
      duration: "Oct 2024 – Dec 2024",
      location: "Remote",
      type: "Full Stack Development",
      description: [
        "Gained comprehensive backend knowledge in Python, Flask, and Django",
        "Built robust APIs and connected them to SQL databases",
        "Learned Git version control and full-stack development workflow"
      ],
      technologies: ["Python", "Flask", "Django", "SQL", "Git", "API Development"],
      color: "from-secondary to-primary"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and internships
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary glow-effect flex-shrink-0">
                  <Award className="h-8 w-8 text-white" />
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center space-x-2">
                          <ExternalLink className="h-4 w-4" />
                          <span className="font-medium text-primary">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {exp.type}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Internships Completed</div>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-secondary mb-2">6+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;