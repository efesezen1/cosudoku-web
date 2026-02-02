import { createFileRoute, Navigate } from "@tanstack/react-router";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { SignIn } from "@clerk/clerk-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<AuthLoading>
				<LoadingSpinner />
			</AuthLoading>
			<Unauthenticated>
				<div className="flex min-h-screen items-center justify-center">
					<div className="flex flex-col items-center gap-6">
						<h1 className="text-4xl font-bold tracking-tight">CoSudoku</h1>
						<SignIn routing="hash" />
					</div>
				</div>
			</Unauthenticated>
			<Authenticated>
				<Navigate to="/sudoku" />
			</Authenticated>
		</>
	);
}
