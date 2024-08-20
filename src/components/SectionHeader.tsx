export default function SectionHeader() {
	return (
		<div className="flex items-center mt-4">
			<h1>
				<slot />
			</h1>
			<div className="grow m-8">
				<hr className="border-blue" />
			</div>
		</div>
	);
}
