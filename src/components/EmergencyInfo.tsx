import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Phone, Shield, Users } from "lucide-react";

export const EmergencyInfo = () => {
  return (
    <Card className="shadow-card border-border border-medical-emergency/20">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-medical-emergency">
          <AlertCircle className="w-5 h-5" />
          Emergency Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Emergency Contact */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-4 h-4 text-medical-emergency" />
            <h4 className="font-semibold text-foreground">Emergency Contact</h4>
          </div>
          <div className="space-y-1 text-sm">
            <p className="font-medium text-foreground">John Johnson (Spouse)</p>
            <p className="text-foreground">+1 (555) 987-6543</p>
            <p className="text-muted-foreground">Primary Emergency Contact</p>
          </div>
        </div>

        <Separator />

        {/* Insurance Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-medical-primary" />
            <h4 className="font-semibold text-foreground">Health Insurance</h4>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Provider:</span>
              <span className="font-medium">BlueCross BlueShield</span>
            </div>
            <div className="flex justify-between">
              <span>Policy Number:</span>
              <span className="font-medium">BC123456789</span>
            </div>
            <div className="flex justify-between">
              <span>Group:</span>
              <span className="font-medium">ABC Corp</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Blood Donor Compatibility */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-medical-success" />
            <h4 className="font-semibold text-foreground">Blood Compatibility</h4>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Can receive from:</p>
              <div className="flex gap-1">
                <Badge className="bg-medical-success/20 text-medical-success border-medical-success/30">
                  A+
                </Badge>
                <Badge className="bg-medical-success/20 text-medical-success border-medical-success/30">
                  A-
                </Badge>
                <Badge className="bg-medical-success/20 text-medical-success border-medical-success/30">
                  O+
                </Badge>
                <Badge className="bg-medical-success/20 text-medical-success border-medical-success/30">
                  O-
                </Badge>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Can donate to:</p>
              <div className="flex gap-1">
                <Badge className="bg-medical-accent/20 text-medical-primary border-medical-accent/30">
                  A+
                </Badge>
                <Badge className="bg-medical-accent/20 text-medical-primary border-medical-accent/30">
                  AB+
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};