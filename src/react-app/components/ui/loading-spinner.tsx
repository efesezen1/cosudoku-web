import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className }: { className?: string }) {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<LoaderCircle className={cn("size-8 animate-spin text-muted-foreground", className)} />
		</div>
	);
}
