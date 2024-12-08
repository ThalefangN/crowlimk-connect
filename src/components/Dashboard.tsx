import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Flame, 
  Shield, 
  Car, 
  Bell, 
  History, 
  Gift, 
  Star 
} from "lucide-react";
import { Card } from "@/components/ui/card";

export const Dashboard = () => {
  const reportTypes = [
    { 
      title: "Emergency Report", 
      icon: AlertTriangle, 
      color: "bg-red-500",
      description: "Report immediate emergencies requiring urgent attention"
    },
    { 
      title: "Fire Report", 
      icon: Flame, 
      color: "bg-orange-500",
      description: "Report fire incidents or potential fire hazards"
    },
    { 
      title: "Police Report", 
      icon: Shield, 
      color: "bg-blue-500",
      description: "Report criminal activities or suspicious behavior"
    },
    { 
      title: "Road Accident", 
      icon: Car, 
      color: "bg-yellow-500",
      description: "Report traffic accidents and road incidents"
    },
    { 
      title: "Panic Button", 
      icon: Bell, 
      color: "bg-purple-500",
      description: "Quick emergency alert for immediate assistance"
    }
  ];

  const pastReports = [
    {
      type: "Emergency",
      date: "2024-03-10",
      status: "Resolved",
      credits: 50
    },
    {
      type: "Fire",
      date: "2024-03-09",
      status: "In Progress",
      credits: 30
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">Community Reports</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="text-primary w-5 h-5" />
              <span className="font-medium">Credits: 120</span>
            </div>
          </div>
        </div>

        {/* Report Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTypes.map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className={`${report.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                    <report.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{report.title}</h3>
                    <p className="text-muted-foreground text-sm">{report.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Past Reports Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Past Reports</h2>
          </div>
          <div className="grid gap-4">
            {pastReports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{report.type} Report</h3>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        report.status === "Resolved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {report.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <Gift className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{report.credits} credits</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credits Information */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              Credit System
            </h2>
            <p className="text-muted-foreground">
              Earn credits by submitting verified reports and helping your community. 
              Redeem credits for rewards once you reach certain milestones:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-medium">500 Credits</h3>
                <p className="text-sm text-muted-foreground">Community Badge</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-medium">1000 Credits</h3>
                <p className="text-sm text-muted-foreground">Premium Features</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h3 className="font-medium">2000 Credits</h3>
                <p className="text-sm text-muted-foreground">Special Rewards</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};