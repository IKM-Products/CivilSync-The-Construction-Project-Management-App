"use client";

import type { Material } from "@/types/material";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { MaterialActions } from "@/components/materials/material-actions";

interface MaterialTableProps {
  materials: Material[];

  onView?: (material: Material) => void;
  onEdit?: (material: Material) => void;
  onDelete?: (material: Material) => void;
}

export function MaterialTable({
  materials,
  onView,
  onEdit,
  onDelete,
}: MaterialTableProps) {
  if (materials.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">
          No Materials Found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Add materials to start managing your project inventory.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Material</TableHead>

            <TableHead>Unit</TableHead>

            <TableHead className="text-right">
              Quantity
            </TableHead>

            <TableHead className="text-right">
              Unit Price
            </TableHead>

            <TableHead className="text-right">
              Total Value
            </TableHead>

            <TableHead>Supplier</TableHead>

            <TableHead className="w-80px text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {materials.map((material) => (
            <TableRow key={material.id}>
              <TableCell className="font-medium">
                {material.name}
              </TableCell>

              <TableCell>
                <Badge variant="outline">
                  {material.unit}
                </Badge>
              </TableCell>

              <TableCell className="text-right">
                {material.quantity.toLocaleString()}
              </TableCell>

              <TableCell className="text-right">
                NPR {material.unitPrice.toLocaleString()}
              </TableCell>

              <TableCell className="text-right font-medium">
                NPR{" "}
                {(
                  material.quantity * material.unitPrice
                ).toLocaleString()}
              </TableCell>

              <TableCell>
                {material.supplier || "-"}
              </TableCell>

              <TableCell className="text-center">
                <MaterialActions
                  material={material}
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