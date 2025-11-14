"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Pencil } from "lucide-react";
import { Lead } from "@/types";
import api from "@/lib/api";

interface EditLeadDialogProps {
    lead: Lead;
    onLeadUpdated: () => void;
}

export function EditLeadDialog({ lead, onLeadUpdated }: EditLeadDialogProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<{
        name: string;
        company: string;
        email: string;
        status: "Active" | "Inactive";
    }>({
        name: lead.name,
        company: lead.company,
        email: lead.email,
        status: lead.status,
    });

    useEffect(() => {
        setFormData({
            name: lead.name,
            company: lead.company,
            email: lead.email,
            status: lead.status,
        });
    }, [lead]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.put(`/leads/${lead.id}`, formData);
            setOpen(false);
            onLeadUpdated();
        } catch (error) {
            console.error("Error updating lead:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpen(true)}
                className="h-8 w-8 p-0"
            >
                <Pencil className="h-4 w-4" />
            </Button>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Edit Lead</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="edit-name">Name</Label>
                        <Input
                            id="edit-name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="edit-company">Company</Label>
                        <Input
                            id="edit-company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="edit-email">Email</Label>
                        <Input
                            id="edit-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="edit-status">Status</Label>
                        <Select
                            value={formData.status}
                            onValueChange={(value) => setFormData({ ...formData, status: value as "Active" | "Inactive" })}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-leadblocks-red hover:bg-leadblocks-red-hover text-white">
                        {loading ? "Updating..." : "Update Lead"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}