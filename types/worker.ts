export interface Worker {
  id: string;
  projectId: string;

  firstName: string;
  lastName: string;

  role: string;

  phoneNumber: string;
  email?: string;

  dailyWage: number;

  joiningDate: Date;

  address?: string;
  emergencyContact?: string;
  notes?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateWorkerData {
  firstName: string;
  lastName: string;

  role: string;

  phoneNumber: string;
  email?: string;

  dailyWage: number;

  joiningDate: Date;

  address?: string;
  emergencyContact?: string;
  notes?: string;
}

export interface UpdateWorkerData
  extends Partial<CreateWorkerData> {}

export interface WorkerAttendance {
  workerId: string;
  date: Date;
  status: "Present" | "Absent" | "Half Day" | "Leave";
}

export interface WorkerSummary {
  totalWorkers: number;
  presentWorkers: number;
  absentWorkers: number;
  totalDailyWages: number;
}