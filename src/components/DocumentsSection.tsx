import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Share2, QrCode } from "lucide-react";

export const DocumentsSection = () => {
  const documents = [
    { name: "Blood Test Results", date: "Mar 1, 2024", type: "Lab Report" },
    { name: "Chest X-Ray", date: "Feb 15, 2024", type: "Imaging" },
    { name: "Prescription - Dr. Chen", date: "Feb 10, 2024", type: "Prescription" },
    { name: "Discharge Summary", date: "Dec 28, 2023", type: "Summary" }
  ];

  return (
    <Card className="shadow-card border-border">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-medical-primary">
          <FileText className="w-5 h-5" />
          Documents & Reports
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Documents List */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">My Documents</h4>
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-medical-secondary rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-medical-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">{doc.type} • {doc.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <Download className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Share Section */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Share Records</h4>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Generate Share Link
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              QR Code
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Securely share your medical records with healthcare providers
          </p>
        </div>
      </CardContent>
    </Card>
  );
};