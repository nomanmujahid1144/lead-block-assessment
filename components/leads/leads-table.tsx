"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/types";
import { EditLeadDialog } from "./edit-lead-dialog";
import { DeleteLeadButton } from "./delete-lead-button";

interface LeadsTableProps {
    leads: Lead[];
    onLeadUpdated: () => void;
}

export function LeadsTable({ leads, onLeadUpdated }: LeadsTableProps) {
    return (
        <div className="rounded-lg border bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="bg-slate-50">
                        <TableHead className="font-semibold">Name</TableHead>
                        <TableHead className="font-semibold">Company</TableHead>
                        <TableHead className="font-semibold">Email</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leads.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                No leads found
                            </TableCell>
                        </TableRow>
                    ) : (
                        leads.map((lead) => (
                            <TableRow key={lead.id}>
                                <TableCell className="font-medium">{lead.name}</TableCell>
                                <TableCell>{lead.company}</TableCell>
                                <TableCell className="text-muted-foreground">{lead.email}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={lead.status === "Active" ? "default" : "secondary"}
                                        className={
                                            lead.status === "Active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-slate-200 text-slate-700"
                                        }
                                    >
                                        {lead.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <EditLeadDialog lead={lead} onLeadUpdated={onLeadUpdated} />
                                        <DeleteLeadButton leadId={lead.id} onLeadDeleted={onLeadUpdated} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}