import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { 
  UserCheck, 
  FlaskConical, 
  Hospital,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Clock,
  Users,
  Building
} from "lucide-react";

export const FacilityProfile = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      facilityName: "",
      licenseNumber: "",
      contactPerson: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      establishedYear: "",
      specializations: "",
      description: "",
      operatingHours: "",
      capacity: ""
    }
  });

  const getFacilityConfig = () => {
    switch (type) {
      case "doctor":
        return {
          title: "Doctor Profile Setup",
          icon: UserCheck,
          color: "medical-success",
          fields: {
            name: "Practice Name",
            license: "Medical License Number",
            specializations: "Medical Specializations",
            capacity: "Patients per Day"
          }
        };
      case "laboratory":
        return {
          title: "Laboratory Profile Setup", 
          icon: FlaskConical,
          color: "medical-accent",
          fields: {
            name: "Laboratory Name",
            license: "Lab License Number",
            specializations: "Test Categories",
            capacity: "Daily Test Capacity"
          }
        };
      case "hospital":
        return {
          title: "Hospital Profile Setup",
          icon: Hospital,
          color: "medical-emergency",
          fields: {
            name: "Hospital Name",
            license: "Hospital License Number", 
            specializations: "Medical Departments",
            capacity: "Bed Capacity"
          }
        };
      default:
        return {
          title: "Facility Profile Setup",
          icon: Building,
          color: "medical-primary",
          fields: {
            name: "Facility Name",
            license: "License Number",
            specializations: "Specializations",
            capacity: "Capacity"
          }
        };
    }
  };

  const config = getFacilityConfig();
  const Icon = config.icon;

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Profile data:", data);
    setIsSubmitting(false);
    navigate("/dashboard"); // Would navigate to facility dashboard
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/login")}
            className="mb-4"
          >
            ← Back to Login
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg bg-${config.color} text-white flex items-center justify-center`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                {config.title}
              </h1>
              <p className="text-muted-foreground">
                Complete your profile to get started
              </p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className={`text-${config.color} flex items-center gap-2`}>
                  <Building className="w-5 h-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="facilityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{config.fields.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={`Enter ${config.fields.name.toLowerCase()}`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{config.fields.license}</FormLabel>
                        <FormControl>
                          <Input placeholder="License number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input placeholder="Primary contact person name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-medical-primary flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="contact@facility.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-medical-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Address Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main Street" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Facility Details */}
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-medical-primary flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Facility Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="establishedYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Established Year</FormLabel>
                        <FormControl>
                          <Input placeholder="2020" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{config.fields.capacity}</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter capacity" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="operatingHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operating Hours</FormLabel>
                        <FormControl>
                          <Input placeholder="9 AM - 5 PM" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specializations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{config.fields.specializations}</FormLabel>
                      <FormControl>
                        <Input placeholder="List specializations separated by commas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Brief description of your facility and services"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-${config.color} hover:bg-${config.color}/90 text-white px-8 py-2`}
              >
                {isSubmitting ? "Creating Profile..." : "Create Profile"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FacilityProfile;