export enum UserRole {
  FREELANCE = "FREELANCE",
  COMPANY = "COMPANY",
}

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
}

export interface SkillCreate {
  name: string;
  aliases: string[];
  type: "TECHNICAL" | "SOFT";
}

export interface Skill {
  id: string;
  name: string;
  normalizedName: string;
  aliases: string[];
  type: "TECHNICAL" | "SOFT";
}

export interface Freelance {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  jobTitle: string;
  skills: Skill[];
  averageDailyRate: number;
  seniority: number;
  description: string;
  user: User;
  userId: string;
  stripeAccountId?: string;
}

export interface FreelanceSearchResult {
  data: Freelance[];
  total: number;
}

// Job Posting Related Types

export enum JobPostingLocation {
  ONSITE = "ONSITE",
  REMOTE = "REMOTE",
  HYBRID = "HYBRID",
}

export enum JobPostingStatus {
  PENDING_PAYMENT = "PENDING_PAYMENT",
  PAID = "PAID",
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT",
  EXPIRED = "EXPIRED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
}

export enum CheckpointStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_COMPANY_APPROVAL = "PENDING_COMPANY_APPROVAL",
  DONE = "DONE",
  DELAYED = "DELAYED",
  CANCELED = "CANCELED",
}

export enum ProjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export enum CandidateStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface Company {
  id: string;
  name: string;
  description?: string;
  address: string;
  siren: string;
  user?: User;
}

export interface JobPostingsCreate {
  title: string;
  description: string;
  location: string;
  isPromoted: boolean;
  averageDailyRate: number;
  seniority: number;
  companyId: string;
  skillIds: string[];
  checkpointIds?: string[];
  totalAmount?: number;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  location: JobPostingLocation;
  isPromoted: boolean;
  recommended?: boolean;
  averageDailyRate: number;
  seniority: number;
  status: JobPostingStatus;
  company?: Company;
  skills?: Skill[];
  totalAmount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface JobPostingSearchResult {
  data: JobPosting[];
  total: number;
}

export interface CreateCandidate {
  freelanceId: string;
  jobPostingId: string;
  status: CandidateStatus;
}

export interface Candidate {
  id: string;
  freelanceId: string;
  jobPostingId: string;
  status: CandidateStatus;
  createdAt: string;
  updatedAt: string;
  freelance?: Freelance;
  jobPosting?: JobPosting;
  projectId?: string; // ID du projet créé quand le candidat est accepté
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ProjectStatus;
  freelanceId: string;
  companyId: string;
  conversationId: string;
  jobPostingId: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  freelance?: Freelance;
  company?: Company;
  jobPosting?: JobPosting;
  conversation?: Conversation;
}

export interface CheckpointCreate {
  name: string;
  description?: string;
  date: string | Date;
  status: CheckpointStatus;
  jobPostingId: string;
  quoteId?: string;
  freelanceId?: string;
  amount: number;
}

export interface Checkpoint {
  id: string;
  name: string;
  description?: string;
  date: string | Date;
  status: CheckpointStatus;
  submittedAt?: string | Date;
  validatedAt?: string | Date;
  submittedBy?: string;
  validatedBy?: string;
  jobPostingId: string;
  quoteId?: string;
  freelanceId?: string;
  amount: number;
}

export interface Conversation {
  id: string;
  receiverId: string;
  senderId: string;
  projectId: string;
  messages: Message[];
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  conversationId: string;
  documentId?: string;
  projectId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobPosting {
  id: string;
  name: string;
}

export interface Quote {
  id: string;
}

export interface Document {
  id: string;
  name: string;
  url: string;
  type: string;
  userId: string;
  messageId: string;
  quoteId: string;
  invoiceId: string;
}
