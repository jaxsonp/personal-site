import { useNavigate, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const navigate = useNavigate();
	const error = useRouteError() as Error;

	if (!isRouteErrorResponse(error)) {
		return null;
	}

	console.log(error);

	return (
		<div className="h-screen flex flex-col justify-center text-center">
			<h1>Error 😭</h1>
			<h2 className="my-2">
				{error.status}: {error.statusText}
			</h2>
			<p className="text-light-gray text-xl">{error.data}</p>
		</div>
	);
}
