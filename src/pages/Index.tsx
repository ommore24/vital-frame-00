import { PatientInfoCard } from "@/components/PatientInfoCard";
import { OngoingTreatment } from "@/components/OngoingTreatment";
import { PastTreatments } from "@/components/PastTreatments";
import { MedicalHistory } from "@/components/MedicalHistory";
import { DocumentsSection } from "@/components/DocumentsSection";
import { EmergencyInfo } from "@/components/EmergencyInfo";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Digital Health Record
          </h1>
          <p className="text-muted-foreground">
            Unified patient profile and medical history
          </p>
        </header>

        <div className="space-y-6">
          {/* Patient Basic Information */}
          <PatientInfoCard />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <OngoingTreatment />
              <MedicalHistory />
              <EmergencyInfo />
            </div>
            
            <div className="space-y-6">
              <PastTreatments />
              <DocumentsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;