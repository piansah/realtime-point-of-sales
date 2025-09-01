"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import createClient from "@/lib/supabase/client";
import { toast } from "sonner";
import DataTable from "@/components/common/data-table";
import { HEADER_TABLE_USER } from "@/constants/user-constants";

export default function UserManagement() {
  const supabase = createClient();
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' })
        .order('created_at');

      if (error)
        toast.error('Get User data failed', {
          description: error.message,
        });

      return data;
    },
  });

  const filteredData = useMemo(() => {
    return (users || []).map((user, index) => {
      return [index + 1, user.id, user.name, user.role, ''];
    });
  }, [users]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex gap-2">
          <Input placeholder="Search by name" />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Create</Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <DataTable
        header={HEADER_TABLE_USER}
        data={filteredData}
        isLoading={isLoading}
      />
    </div>
  );
}
