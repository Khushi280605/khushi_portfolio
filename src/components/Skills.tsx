import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Zap, 
  Users, 
  MessageSquare, 
  Target,
  Clock,
  Lightbulb,
  Shuffle
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C", "Python", "Java"],
      color: "from-primary to-primary-hover"
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-secondary to-secondary-hover"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Flask", "Django", "OpenCV", "TensorFlow"],
      color: "from-primary to-secondary"
    },
    {
      title: "Databases & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["Git", "SQL", "Firebase"],
      color: "from-secondary to-primary"
    },
    {
      title: "Technical Concepts",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Data Structures", "OOP", "OS", "Computer Architecture", "DBMS", "Full Stack Development", "API Development", "Version Control"],
      color: "from-primary to-primary-hover"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem Solving", "Communication", "Leadership", "Teamwork", "Time Management", "Quick Learner", "Adaptability"],
      color: "from-secondary to-secondary-hover"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}/20`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="glass-card p-6 text-center hover-lift">
            <Target className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Problem Solving</h4>
            <p className="text-sm text-muted-foreground">Analytical thinking and creative solutions</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <Lightbulb className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p className="text-sm text-muted-foreground">Always exploring new technologies</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Communication</h4>
            <p className="text-sm text-muted-foreground">Clear and effective collaboration</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <Shuffle className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Adaptability</h4>
            <p className="text-sm text-muted-foreground">Quick learner and flexible approach</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;