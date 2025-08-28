import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertCircle, 
  Phone, 
  Shield, 
  Users, 
  MapPin,
  Clock,
  Heart,
  Edit,
  Share2,
  Download
} from "lucide-react";

export const EmergencyInfo = () => {
  const emergencyContacts = [
    {
      name: "John Johnson",
      relationship: "Spouse",
      phone: "+1 (555) 987-6543",
      type: "Primary"
    },
    {
      name: "Mary Johnson",
      relationship: "Mother",
      phone: "+1 (555) 123-4567",
      type: "Secondary"
    }
  ];

  const medicalAlerts = [
    "Allergic to Penicillin",
    "Diabetic - Type 2",
    "Blood Pressure Medication",
    "No known food allergies"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Emergency Information
              </h1>
              <p className="text-muted-foreground">
                Critical information for emergency situations
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          {/* Critical Medical Information */}
          <Card className="shadow-card border-medical-emergency/20 border-2">
            <CardHeader className="bg-medical-emergency/5">
              <CardTitle className="flex items-center gap-2 text-medical-emergency">
                <AlertCircle className="w-5 h-5" />
                Critical Medical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-medical-emergency" />
                    Blood Type
                  </h4>
                  <Badge className="bg-medical-emergency text-white text-lg px-3 py-1">
                    A+
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Medical Alerts</h4>
                  <div className="space-y-2">
                    {medicalAlerts.map((alert, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="block w-fit text-medical-emergency border-medical-emergency/30"
                      >
                        {alert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-medical-primary">
                <Phone className="w-5 h-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground">{contact.relationship}</p>
                      <p className="font-medium text-foreground mt-1">{contact.phone}</p>
                    </div>
                    <Badge 
                      className={
                        contact.type === "Primary" 
                          ? "bg-medical-success/20 text-medical-success border-medical-success/30"
                          : "bg-medical-accent/20 text-medical-primary border-medical-accent/30"
                      }
                    >
                      {contact.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Insurance Information */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-medical-primary">
                <Shield className="w-5 h-5" />
                Health Insurance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">Provider</span>
                    <p className="font-semibold text-foreground">BlueCross BlueShield</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Policy Number</span>
                    <p className="font-semibold text-foreground">BC123456789</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-muted-foreground">Group</span>
                    <p className="font-semibold text-foreground">ABC Corp</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Effective Date</span>
                    <p className="font-semibold text-foreground">Jan 1, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blood Compatibility */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-medical-primary">
                <Users className="w-5 h-5" />
                Blood Compatibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Can receive from:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["A+", "A-", "O+", "O-"].map((type) => (
                      <Badge 
                        key={type}
                        className="bg-medical-success/20 text-medical-success border-medical-success/30"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Can donate to:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["A+", "AB+"].map((type) => (
                      <Badge 
                        key={type}
                        className="bg-medical-accent/20 text-medical-primary border-medical-accent/30"
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Instructions */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-medical-primary">
                <Clock className="w-5 h-5" />
                Emergency Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-medical-emergency/5 border border-medical-emergency/20">
                  <h4 className="font-semibold text-medical-emergency mb-2">In case of emergency:</h4>
                  <ul className="text-sm space-y-1 text-foreground">
                    <li>1. Call 911 immediately</li>
                    <li>2. Contact primary emergency contact: John Johnson</li>
                    <li>3. Inform medical staff of diabetes and medication allergies</li>
                    <li>4. Present insurance card and this emergency information</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Preferred Hospital: Central Medical Center, 123 Health St.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmergencyInfo;