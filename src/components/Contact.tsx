import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "yadavkhushi7448@gmail.com",
      link: "mailto:yadavkhushi7448@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8700002805",
      link: "tel:+918700002805"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Gurugram, Haryana",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/Khushi280605"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/khushi2806"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      link: "mailto:yadavkhushi7448@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Let's Connect</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out to me through any of these channels. I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 hover-lift">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-lift"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-muted/30 focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-muted/20 border-muted/30 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-muted/20 border-muted/30 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full glow-effect"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently looking for new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="btn-primary"
              >
                <a href="mailto:yadavkhushi7448@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-outline"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;