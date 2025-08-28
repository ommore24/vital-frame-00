import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Activity, Stethoscope, Pill, TestTube, Calendar, FileText } from "lucide-react";

export const OngoingTreatment = () => {
  return (
    <Card className="shadow-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-medical-primary">
          <Activity className="w-5 h-5" />
          Ongoing Treatment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Diagnosis */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Current Diagnosis</h4>
          <Badge className="bg-medical-warning/20 text-medical-warning border-medical-warning/30">
            Hypertension Stage 1
          </Badge>
        </div>

        <Separator />

        {/* Assigned Doctor */}
        <div className="flex items-start gap-3">
          <Stethoscope className="w-4 h-4 text-medical-primary mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Dr. Michael Chen</h4>
            <p className="text-sm text-muted-foreground">Cardiologist, City General Hospital</p>
          </div>
        </div>

        {/* Prescribed Medicines */}
        <div className="flex items-start gap-3">
          <Pill className="w-4 h-4 text-medical-primary mt-1" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">Current Medications</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Lisinopril 10mg</span>
                <span className="text-muted-foreground">Once daily</span>
              </div>
              <div className="flex justify-between">
                <span>Amlodipine 5mg</span>
                <span className="text-muted-foreground">Once daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Lab Tests */}
        <div className="flex items-start gap-3">
          <TestTube className="w-4 h-4 text-medical-primary mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Active Lab Tests</h4>
            <p className="text-sm text-muted-foreground">Lipid Panel - Results pending</p>
          </div>
        </div>

        {/* Next Appointment */}
        <div className="flex items-start gap-3">
          <Calendar className="w-4 h-4 text-medical-primary mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Next Appointment</h4>
            <p className="text-sm text-foreground">March 15, 2024 at 2:00 PM</p>
            <p className="text-sm text-muted-foreground">Follow-up consultation</p>
          </div>
        </div>

        {/* Progress Notes */}
        <div className="flex items-start gap-3">
          <FileText className="w-4 h-4 text-medical-primary mt-1" />
          <div>
            <h4 className="font-semibold text-foreground">Recent Progress Note</h4>
            <p className="text-sm text-muted-foreground">
              Blood pressure showing improvement. Continue current medication regimen.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};