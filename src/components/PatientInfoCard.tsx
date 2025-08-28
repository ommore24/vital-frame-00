import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, Droplet, CreditCard, MapPin } from "lucide-react";

export const PatientInfoCard = () => {
  return (
    <Card className="shadow-card border-border bg-gradient-card">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <Avatar className="w-24 h-24 border-4 border-medical-accent">
              <AvatarImage src="/placeholder.svg" alt="Patient" />
              <AvatarFallback className="bg-medical-secondary text-medical-primary text-lg font-semibold">
                <User className="w-10 h-10" />
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Patient Details */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  Sarah Johnson
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Badge variant="secondary" className="bg-medical-secondary text-medical-primary">
                    29 Years
                  </Badge>
                  <Badge variant="secondary" className="bg-medical-secondary text-medical-primary">
                    Female
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-medical-primary" />
                <span className="text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-medical-primary" />
                <span className="text-foreground">sarah.johnson@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplet className="w-4 h-4 text-medical-emergency" />
                <span className="text-foreground font-semibold">A+ Blood Group</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CreditCard className="w-4 h-4 text-medical-primary" />
                <span className="text-foreground">ID: 1234-5678-9012</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-medical-primary mt-0.5" />
                <span className="text-foreground">
                  123 Medical Street<br />
                  Healthcare City, HC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};