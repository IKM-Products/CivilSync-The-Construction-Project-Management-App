"use client";

import type { Report } from "@/types/report";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { ReportActions } from "@/components/reports/report-actions";

interface ReportTableProps {
  reports: Report[];

  onView?: (report: Report) => void;
  onEdit?: (report: Report) => void;
  onDelete?: (report: Report) => void;
}

export function ReportTable({
  reports,
  onView,
  onEdit,
  onDelete,
}: ReportTableProps) {
  if (reports.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">
          No Reports Found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Create your first project report.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>

            <TableHead>Date</TableHead>

            <TableHead>Weather</TableHead>

            <TableHead className="text-right">
              Progress
            </TableHead>

            <TableHead className="text-right">
              Workers
            </TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="w-20 text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">
                {report.title}
              </TableCell>

              <TableCell>
                {report.reportDate.toLocaleDateString()}
              </TableCell>

              <TableCell>
                {report.weather}
              </TableCell>

              <TableCell className="text-right">
                {report.progress}%
              </TableCell>

              <TableCell className="text-right">
                {report.workersPresent}
              </TableCell>

              <TableCell>
                <Badge variant="outline">
                  {report.progress === 100
                    ? "Completed"
                    : "In Progress"}
                </Badge>
              </TableCell>

              <TableCell className="text-center">
                <ReportActions
                  report={report}
                  onView={onView}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}