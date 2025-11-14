export interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  status: 'Active' | 'Inactive';
  createdAt: Date;
  updatedAt: Date;
}