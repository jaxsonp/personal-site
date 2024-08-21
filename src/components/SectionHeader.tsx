import React from "react";

export default function SectionHeader({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center mt-4">
			<h1>{children}</h1>
			<div className="grow m-8">
				<hr className="border-blue" />
			</div>
		</div>
	);
}
