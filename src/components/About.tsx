import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get to know more about my journey and background
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profilePicture}
                alt="Khushi - Profile Picture"
                className="relative w-80 h-80 rounded-full object-cover glass-card hover-lift"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-2">Khushi</h3>
              <p className="text-xl text-primary mb-4">Computer Science Engineering Student</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate Computer Science Engineering student with strong problem-solving skills, 
              eager to apply programming and full stack development expertise in a dynamic software 
              development environment. I love creating innovative solutions and exploring the latest 
              technologies in web development and machine learning.
            </p>

            {/* Academic Highlight */}
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">Academic Background</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Bachelor of Technology in CSE</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Expected Graduation: 2027</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        CGPA: 8.78
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;