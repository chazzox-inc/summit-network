import type { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<{ className?: string }>> = ({
    children,
    className
}) => {
    return <div className={className}>{children}</div>;
};

export default Section;
