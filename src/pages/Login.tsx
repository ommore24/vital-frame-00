import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, UserCheck, Building2, FlaskConical, Hospital } from "lucide-react";

export const Login = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const navigate = useNavigate();

  const roles = [
    {
      id: "patient",
      name: "Patient",
      description: "Access your personal health records",
      icon: User,
      color: "bg-medical-primary",
      route: "/"
    },
    {
      id: "doctor",
      name: "Doctor",
      description: "Manage patient care and medical records",
      icon: UserCheck,
      color: "bg-medical-success",
      route: "/facility-profile/doctor"
    },
    {
      id: "laboratory",
      name: "Laboratory",
      description: "Handle lab tests and results",
      icon: FlaskConical,
      color: "bg-medical-accent",
      route: "/facility-profile/laboratory"
    },
    {
      id: "hospital",
      name: "Hospital",
      description: "Comprehensive healthcare management",
      icon: Hospital,
      color: "bg-medical-emergency",
      route: "/facility-profile/hospital"
    }
  ];

  const handleRoleSelect = (role: any) => {
    setSelectedRole(role.id);
    setTimeout(() => {
      navigate(role.route);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Digital Health Platform
          </h1>
          <p className="text-muted-foreground">
            Select your role to access the platform
          </p>
        </div>

        <Card className="shadow-elevated border-border">
          <CardHeader>
            <CardTitle className="text-center text-medical-primary">
              Choose Your Role
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <Button
                    key={role.id}
                    variant="outline"
                    className={`h-auto p-6 flex flex-col items-center gap-3 transition-all hover:shadow-card ${
                      selectedRole === role.id 
                        ? "border-medical-primary bg-medical-secondary/20" 
                        : "hover:border-medical-accent"
                    }`}
                    onClick={() => handleRoleSelect(role)}
                  >
                    <div className={`w-12 h-12 rounded-lg ${role.color} text-white flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground">{role.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {role.description}
                      </p>
                    </div>
                    {selectedRole === role.id && (
                      <Badge className="bg-medical-success text-white">
                        Selected
                      </Badge>
                    )}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;