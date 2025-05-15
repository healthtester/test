import type { Provider } from '@/lib/types';

export const mockProviders: Provider[] = [
  {
    id: '1',
    name: 'Dr. Alice Smith',
    specialty: 'Cardiology',
    location: '123 Heart Lane, Cardio City, CA 90210',
    city: 'Cardio City',
    state: 'CA',
    zipCode: '90210',
    phoneNumber: '(555) 123-4567',
    website: 'https://dralicesmith.example.com',
    profilePictureUrl: 'https://placehold.co/300x300.png',
    bio: 'Dr. Alice Smith is a board-certified cardiologist with over 15 years of experience in treating complex heart conditions. She is dedicated to providing compassionate and comprehensive care to her patients.',
    education: ['Stanford University School of Medicine (MD)', 'Residency in Internal Medicine at Johns Hopkins Hospital', 'Fellowship in Cardiology at Mayo Clinic'],
    certifications: ['Board Certified in Cardiology', 'Board Certified in Internal Medicine'],
    languagesSpoken: ['English', 'Spanish'],
    acceptedInsurancePlans: ['Blue Shield', 'Aetna', 'Cigna', 'Medicare'],
    officeHours: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 1:00 PM' },
    ],
    overallRating: 4.8,
    reviews: [
      { id: 'r1', reviewerName: 'John Doe', rating: 5, comment: 'Dr. Smith is an excellent cardiologist. Highly recommend!', date: '2023-10-15T10:00:00Z' },
      { id: 'r2', reviewerName: 'Jane Roe', rating: 4, comment: 'Good experience, very knowledgeable.', date: '2023-09-20T14:30:00Z' },
    ],
    costInformation: [
      { procedure: 'Initial Consultation', costEstimate: '$150 - $250' },
      { procedure: 'Echocardiogram', costEstimate: '$300 - $500' },
    ],
    qualityMetrics: [
      { metric: 'Patient Satisfaction Score', value: '95%' },
      { metric: 'Successful Angioplasty Rate', value: '98%', benchmark: '95%' },
    ],
  },
  {
    id: '2',
    name: 'Dr. Bob Johnson',
    specialty: 'Dermatology',
    location: '456 Skin Ave, Dermaville, TX 75001',
    city: 'Dermaville',
    state: 'TX',
    zipCode: '75001',
    phoneNumber: '(555) 987-6543',
    website: 'https://drbobjohnson.example.com',
    profilePictureUrl: 'https://placehold.co/300x300.png',
    bio: 'Dr. Bob Johnson is a leading dermatologist specializing in cosmetic and medical dermatology. He is passionate about skin health and helping patients achieve their best skin.',
    education: ['Harvard Medical School (MD)', 'Dermatology Residency at University of Texas Southwestern'],
    certifications: ['Board Certified in Dermatology'],
    languagesSpoken: ['English'],
    acceptedInsurancePlans: ['UnitedHealthcare', 'Kaiser Permanente', 'Aetna'],
    officeHours: [
      { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
      { day: 'Thursday', hours: '8:00 AM - 4:00 PM' },
    ],
    overallRating: 4.5,
    reviews: [
      { id: 'r3', reviewerName: 'Peter Pan', rating: 5, comment: 'Great dermatologist, very friendly and effective treatments.', date: '2023-11-01T11:00:00Z' },
    ],
    costInformation: [
      { procedure: 'Skin Check', costEstimate: '$100 - $200' },
      { procedure: 'Acne Treatment Plan', costEstimate: 'Varies' },
    ],
    qualityMetrics: [
      { metric: 'Average Wait Time', value: '15 minutes' },
      { metric: 'Melanoma Detection Rate', value: 'Above National Average' },
    ],
  },
  {
    id: '3',
    name: 'Dr. Carol Williams',
    specialty: 'Pediatrics',
    location: '789 Child St, Kidstown, FL 33000',
    city: 'Kidstown',
    state: 'FL',
    zipCode: '33000',
    phoneNumber: '(555) 111-2222',
    profilePictureUrl: 'https://placehold.co/300x300.png',
    bio: 'Dr. Carol Williams is a dedicated pediatrician with a focus on child wellness and development. She provides a warm and welcoming environment for children and their families.',
    education: ['Yale School of Medicine (MD)', 'Pediatrics Residency at Boston Children\'s Hospital'],
    certifications: ['Board Certified in Pediatrics'],
    languagesSpoken: ['English', 'French'],
    acceptedInsurancePlans: ['Cigna', 'Medicaid', 'Blue Shield'],
    officeHours: [
      { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Friday', hours: '9:00 AM - 3:00 PM' },
    ],
    overallRating: 4.9,
    reviews: [
      { id: 'r4', reviewerName: 'Wendy Darling', rating: 5, comment: 'Dr. Williams is amazing with kids! So patient and kind.', date: '2023-10-25T09:15:00Z' },
      { id: 'r5', reviewerName: 'Michael Banks', rating: 5, comment: 'Best pediatrician in town.', date: '2023-08-10T16:00:00Z' },
    ],
    costInformation: [
      { procedure: 'Well-child Visit', costEstimate: '$120 - $180' },
      { procedure: 'Vaccinations (per shot)', costEstimate: '$25 - $75' },
    ],
    qualityMetrics: [
      { metric: 'Vaccination Rate Compliance', value: '99%' },
      { metric: 'Parental Recommendation Score', value: '4.9/5' },
    ],
  },
   {
    id: '4',
    name: 'Dr. David Brown',
    specialty: 'Neurology',
    location: '101 Brainy Way, Neuroburg, NY 10001',
    city: 'Neuroburg',
    state: 'NY',
    zipCode: '10001',
    phoneNumber: '(555) 222-3333',
    website: 'https://drdavidbrown.example.com',
    profilePictureUrl: 'https://placehold.co/300x300.png',
    bio: 'Dr. David Brown is a neurologist specializing in stroke recovery and neurodegenerative diseases. He employs cutting-edge research and treatments to improve patient outcomes.',
    education: ['Columbia University Vagelos College of Physicians and Surgeons (MD)', 'Neurology Residency at NewYork-Presbyterian Hospital'],
    certifications: ['Board Certified in Neurology', 'Specialty Certification in Vascular Neurology'],
    languagesSpoken: ['English', 'Mandarin'],
    acceptedInsurancePlans: ['Medicare', 'Aetna', 'UnitedHealthcare'],
    officeHours: [
      { day: 'Monday', hours: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
    ],
    overallRating: 4.7,
    reviews: [
      { id: 'r6', reviewerName: 'Sarah Connor', rating: 5, comment: 'Dr. Brown was thorough and compassionate.', date: '2023-07-12T13:00:00Z' },
    ],
    costInformation: [
      { procedure: 'Neurological Exam', costEstimate: '$200 - $350' },
      { procedure: 'EEG', costEstimate: '$400 - $700' },
    ],
    qualityMetrics: [
      { metric: 'Post-Stroke Rehabilitation Success Rate', value: '85%' },
      { metric: 'Time to Diagnosis for MS', value: 'Reduced by 20% vs. average' },
    ],
  },
];

export const getProviderById = (id: string): Provider | undefined => {
  return mockProviders.find(provider => provider.id === id);
};
