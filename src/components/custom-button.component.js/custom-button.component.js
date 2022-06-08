import React from "react";

import './custom-button.styles.scss';

const CustomButton = ({children, disabled}) => (
	<button disabled={disabled} className="custom-button">
		{children}
	</button>
);

export default CustomButton;