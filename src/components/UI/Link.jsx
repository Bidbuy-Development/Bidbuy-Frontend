"use client";

import { Link as AriaLink } from "react-aria-components";

const Link = ({
	variant = "primary",
	radius = "full",
	hasIcon,
	className,
	children,
	...props
}) => {
	const btnType = {
		primary: "bg-primary-purple text-white",
		secondary: "bg-[#F2F2F2] text-primary-purple",
	};

	const radiusMap = {
		none: "rounded-none",
		sm: "rounded-sm",
		md: "rounded-md",
		lg: "rounded-lg",
		xl: "rounded-xl",
		full: "rounded-full",
	};
	const radiusClass = radiusMap[radius] || "rounded-full";
	return (
		<AriaLink
			className={`${btnType[variant]}  flex items-center gap-2 justify-center ${radiusClass} ${className}`}
			{...props}>
			<span>{children}</span>
			{hasIcon && <span> {hasIcon}</span>}
		</AriaLink>
	);
};

export default Link;
