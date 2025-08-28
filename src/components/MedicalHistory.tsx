import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Heart, Scissors, Shield } from "lucide-react";

export const MedicalHistory = () => {
  return (
    <Card className="shadow-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-medical-primary">
          <Heart className="w-5 h-5" />
          Medical History
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Allergies */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-medical-emergency" />
            <h4 className="font-semibold text-foreground">Allergies</h4>
          </div>
          <div className="flex gap-2">
            <Badge className="bg-medical-emergency/20 text-medical-emergency border-medical-emergency/30">
              Penicillin
            </Badge>
            <Badge className="bg-medical-warning/20 text-medical-warning border-medical-warning/30">
              Shellfish
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Chronic Conditions */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-medical-primary" />
            <h4 className="font-semibold text-foreground">Chronic Conditions</h4>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Hypertension</span>
              <span className="text-muted-foreground">Since 2022</span>
            </div>
            <div className="flex justify-between">
              <span>Type 2 Diabetes</span>
              <span className="text-muted-foreground">Since 2020</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Past Surgeries */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Scissors className="w-4 h-4 text-medical-primary" />
            <h4 className="font-semibold text-foreground">Past Surgeries</h4>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Appendectomy</span>
              <span className="text-muted-foreground">2018</span>
            </div>
            <div className="flex justify-between">
              <span>Cholecystectomy</span>
              <span className="text-muted-foreground">2019</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Vaccinations */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-medical-success" />
            <h4 className="font-semibold text-foreground">Recent Vaccinations</h4>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>COVID-19 Booster</span>
              <span className="text-muted-foreground">Oct 2023</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Flu Shot</span>
              <span className="text-muted-foreground">Sep 2023</span>
            </div>
            <div className="flex justify-between">
              <span>Tetanus</span>
              <span className="text-muted-foreground">2021</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};