
export interface Review {
  id: string;
  reviewerName: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO date string
}

export interface CostInformation {
  procedure: string;
  costEstimate: string; // e.g., "$50 - $150" or "Varies"
}

export interface QualityMetric {
  metric: string;
  value: string;
  benchmark?: string;
}

export interface Provider {
  id: string;
  name: string;
  specialty: string;
  location: string; // Full address
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  website?: string;
  profilePictureUrl: string;
  bio: string;
  education: string[];
  certifications: string[];
  languagesSpoken: string[];
  acceptedInsurancePlans: string[];
  officeHours: { day: string; hours: string }[];
  overallRating: number; // Calculated average or directly set
  reviews: Review[];
  costInformation: CostInformation[];
  qualityMetrics: QualityMetric[];
}

export const specialties: string[] = ["Cardiology", "Dermatology", "Pediatrics", "Neurology", "General Practice", "Orthopedics", "Oncology"];
export const insurancePlans: string[] = ["Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Kaiser Permanente", "Medicare", "Medicaid"];
