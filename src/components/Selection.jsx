import { useState } from "react";
import { RadioButton } from "./RadioButton";

export const Selection = () => {
	const [state, setState] = useState({ name: "personaje", value: "yoda" });

	const handleSelected = e => {
		setState({ name: "personaje", value: e.target.value });
	};

	return (
		<>
			<RadioButton name={state.name} value="yoda" onclick={handleSelected} />
			<RadioButton name={state.name} value="obi" onclick={handleSelected} />
		</>
	);
};
