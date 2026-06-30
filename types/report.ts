export interface Report {
  id: string;
  projectId: string;

  title: string;
  reportDate: Date;

  weather: string;
  workCompleted: string;
  issues?: string;

  workersPresent: number;
  materialsUsed?: string;

  progress: number;
  remarks?: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface CreateReportData {
  title: string;
  reportDate: Date;

  weather: string;
  workCompleted: string;
  issues?: string;

  workersPresent: number;
  materialsUsed?: string;

  progress: number;
  remarks?: string;
}

export interface UpdateReportData
  extends Partial<CreateReportData> {}

export interface ReportSummary {
  totalReports: number;
  averageProgress: number;
  latestReportDate: Date | null;
}