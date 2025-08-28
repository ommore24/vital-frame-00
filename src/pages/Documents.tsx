import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Share2, 
  QrCode, 
  Search, 
  Filter,
  Calendar,
  Image,
  FileSpreadsheet,
  File,
  FileImage,
  Activity
} from "lucide-react";

export const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const documents = [
    { 
      name: "Blood Test Results", 
      date: "Mar 1, 2024", 
      type: "Lab Report",
      size: "1.2 MB",
      format: "PDF",
      icon: Activity
    },
    { 
      name: "Chest X-Ray", 
      date: "Feb 15, 2024", 
      type: "Imaging",
      size: "5.8 MB",
      format: "DICOM",
      icon: FileImage
    },
    { 
      name: "Prescription - Dr. Chen", 
      date: "Feb 10, 2024", 
      type: "Prescription",
      size: "0.8 MB",
      format: "PDF",
      icon: FileText
    },
    { 
      name: "Discharge Summary", 
      date: "Dec 28, 2023", 
      type: "Summary",
      size: "1.1 MB",
      format: "PDF",
      icon: FileText
    },
    { 
      name: "MRI Scan Report", 
      date: "Jan 18, 2024", 
      type: "Imaging",
      size: "12.3 MB",
      format: "DICOM",
      icon: FileImage
    },
    { 
      name: "Lab Results Comparison", 
      date: "Feb 28, 2024", 
      type: "Analysis",
      size: "2.1 MB",
      format: "XLSX",
      icon: FileSpreadsheet
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lab Report":
        return "bg-medical-success/20 text-medical-success border-medical-success/30";
      case "Imaging":
        return "bg-medical-primary/20 text-medical-primary border-medical-primary/30";
      case "Prescription":
        return "bg-medical-warning/20 text-medical-warning border-medical-warning/30";
      case "Summary":
        return "bg-medical-accent/20 text-medical-primary border-medical-accent/30";
      case "Analysis":
        return "bg-medical-emergency/20 text-medical-emergency border-medical-emergency/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Documents & Reports
          </h1>
          <p className="text-muted-foreground">
            Access and manage your medical documents
          </p>
        </header>

        <div className="space-y-6">
          {/* Search and Filter */}
          <Card className="shadow-card border-border">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Date Range
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documents Grid */}
          <div className="grid gap-4">
            {filteredDocuments.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card key={index} className="shadow-card border-border hover:shadow-elevated transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-medical-secondary rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-medical-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{doc.date}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                            <span>•</span>
                            <span>{doc.format}</span>
                          </div>
                          <Badge className={`mt-2 ${getTypeColor(doc.type)}`}>
                            {doc.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Share Options */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle className="text-medical-primary">Share Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2 bg-medical-primary hover:bg-medical-primary/90">
                  <Share2 className="w-4 h-4" />
                  Generate Share Link
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <QrCode className="w-4 h-4" />
                  Create QR Code
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Securely share selected documents with healthcare providers. Links expire after 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documents;