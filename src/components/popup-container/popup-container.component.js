import React from "react";

import './popup-container.styles.scss';

const PopupContainer = (prop) => {
	return (
		<div className="popup">
			{prop.children}
		</div>
	)
};

export default PopupContainer;