import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      // Here you would typically verify the OTP with your backend
      toast.success("Account verified successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Please enter a valid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="w-10 h-10 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-semibold mb-1">Verify Your Account</h2>
          <p className="text-muted-foreground">
            We've sent a verification code to your email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
                className="w-12 h-12 text-center text-lg font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Verify Account
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>

        <p className="text-center text-muted-foreground">
          Didn't receive the code?{" "}
          <button className="text-primary hover:text-opacity-80 transition-colors">
            Resend
          </button>
        </p>
      </motion.div>
    </div>
  );
};