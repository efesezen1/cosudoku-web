import { createFileRoute, Navigate } from "@tanstack/react-router";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { UserButton } from "@clerk/clerk-react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export const Route = createFileRoute("/sudoku")({
	component: Sudoku,
});

function Sudoku() {
	return (
		<>
			<AuthLoading>
				<LoadingSpinner />
			</AuthLoading>
			<Unauthenticated>
				<Navigate to="/" />
			</Unauthenticated>
			<Authenticated>
				<div className="min-h-screen">
					<header className="flex items-center justify-between border-b px-6 py-4">
						<h1 className="text-2xl font-bold tracking-tight">CoSudoku</h1>
						<UserButton />
					</header>
					<main className="flex items-center justify-center p-6">
						<p className="text-muted-foreground">Sudoku game goes here.</p>
					</main>
				</div>
			</Authenticated>
		</>
	);
}
