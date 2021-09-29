export const RadioButton = props => {
	const { name, value, onclick } = props;
	return (
		<div>
			<input type="radio" id={value} name={name} value={value} onClick={onclick}/>
			<label htmlFor={value}>{value}</label>
		</div>
	);
};
