import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Shield, Bell, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Dumela, Welcome to Crowlink",
    subtitle: "Your Community Voice in Botswana",
    icon: Shield,
    description: "Stay connected and informed with your local community",
    bgImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    title: "Report & Connect",
    subtitle: "Share Important Updates with Your Community",
    icon: Bell,
    description: "Easily report incidents and share updates in real-time",
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Stay Informed",
    subtitle: "Real-time Traffic and Community Updates",
    icon: Users,
    description: "Get instant notifications about what matters in your area",
    bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
];

export const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const skipToSignup = () => {
    navigate("/signup");
  };

  const IconComponent = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="relative h-[70vh] mb-8 rounded-2xl overflow-hidden">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center"
          >
            <IconComponent className="w-20 h-20 text-white" />
          </motion.div>
          <motion.img
            key={slides[currentSlide].bgImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={slides[currentSlide].bgImage}
            alt="Community"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-2">{slides[currentSlide].title}</h2>
          <p className="text-muted-foreground mb-4">{slides[currentSlide].subtitle}</p>
          <p className="text-sm text-muted-foreground">{slides[currentSlide].description}</p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-md">
        {currentSlide < slides.length - 1 ? (
          <div className="flex justify-between gap-4">
            <button
              onClick={skipToSignup}
              className="px-6 py-3 text-accent hover:text-primary transition-colors"
            >
              Skip
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={skipToSignup}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
