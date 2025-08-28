import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { History, Download, User } from "lucide-react";

export const PastTreatments = () => {
  const treatments = [
    {
      date: "Dec 2023",
      diagnosis: "Acute Bronchitis",
      doctor: "Dr. Emily Rodriguez",
      hospital: "Mercy Medical Center",
      status: "Completed"
    },
    {
      date: "Aug 2023",
      diagnosis: "Annual Physical",
      doctor: "Dr. James Wilson",
      hospital: "City General Hospital",
      status: "Completed"
    }
  ];

  return (
    <Card className="shadow-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-medical-primary">
          <History className="w-5 h-5" />
          Past Treatments
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {treatments.map((treatment, index) => (
          <div key={index}>
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{treatment.diagnosis}</h4>
                    <Badge className="bg-medical-success/20 text-medical-success border-medical-success/30">
                      {treatment.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{treatment.date}</p>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="w-3 h-3" />
                  Download
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-medical-primary" />
                <span className="text-foreground">{treatment.doctor}</span>
                <span className="text-muted-foreground">• {treatment.hospital}</span>
              </div>
            </div>
            {index < treatments.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}

        <Separator />

        <div className="pt-2">
          <h4 className="font-semibold text-foreground mb-2">Recent Prescriptions</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span>Antibiotics Course (Dec 2023)</span>
              <Button variant="ghost" size="sm" className="text-medical-primary">
                View Details
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <span>Vitamin D Supplement</span>
              <Button variant="ghost" size="sm" className="text-medical-primary">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};