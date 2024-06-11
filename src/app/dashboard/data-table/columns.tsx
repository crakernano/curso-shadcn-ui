"use client";
import { Payment } from "@/app/data/payments.data"
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {ColumnDef, SortDirection } from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

import {
    ChevronDownIcon,
    ChevronUpIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// export type Payment = {
//     id:string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
    if (isSorted === "asc") {
      return <ChevronUpIcon className="h-4 w-4" />;
    }
  
    if (isSorted === "desc") {
      return <ChevronDownIcon className="h-4 w-4" />;
    }
  
    return null;
  };

export const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            const variant =
              {
                pending: "secondary",
                processing: "info",
                success: "success",
                failed: "destructive",
              }[status] ?? ("default" as any);
      
            return (
              <Badge variant={variant} capitalize>
                {status}
              </Badge>
            );
          },
    }, 
    {
        accessorKey: "clientName",
        header: "Client Name"
    },
    {
        accessorKey:"email",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Email
                <SortedIcon isSorted={column.getIsSorted()} />
              </Button>
            );
          },
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount")); //Busca el amount y lo formatea
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount);
      
            return <div className="text-right font-medium">{formatted}</div>;
          },
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const payment = row.original;
    
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(payment.id);
                    toast("Payment ID copied to clipboard", {
                      position: "top-right",
                      duration: 3000,
                    });
                    // toast({
                    //   description: "Payment ID copied to clipboard",
                    // });
                  }}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
]