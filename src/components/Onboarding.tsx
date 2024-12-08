import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Dumela, Welcome to Crowlink",
    subtitle: "Your Community Voice in Botswana",
    image: "/lovable-uploads/747752fc-851f-4e1c-91eb-00ad2cc10d51.png",
  },
  {
    title: "Report & Connect",
    subtitle: "Share Important Updates with Your Community",
    image: "/lovable-uploads/747752fc-851f-4e1c-91eb-00ad2cc10d51.png",
  },
  {
    title: "Stay Informed",
    subtitle: "Real-time Traffic and Community Updates",
    image: "/lovable-uploads/747752fc-851f-4e1c-91eb-00ad2cc10d51.png",
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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={slides[currentSlide].image}
            alt="Onboarding"
            className="w-full h-full object-cover"
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
          <p className="text-muted-foreground">{slides[currentSlide].subtitle}</p>
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