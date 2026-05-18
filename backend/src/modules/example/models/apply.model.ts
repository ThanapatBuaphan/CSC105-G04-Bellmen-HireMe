export interface ApplyModel {
  id: number;

  message: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;

  userId: number;
  companyId: number;
  postId: number;

  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    avatar?: string | null;
    resume?: string | null;
    bio?: string | null;
  };

  company?: {
    id: number;
    companyName: string;
    logo?: string | null;
    email: string;
  };

  post?: {
    id: number;
    jobtitle: string;
    location: string;
    requirements: string;
    Salary: number;
    description?: string | null;
    createdAt: string;
  };
}