import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

export const ParargraphVariants = cva(
  "max-w-prose text-slate-700 dark:slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm, sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParargraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParargraphVariants> {}
// eslint-disable-next-line react/display-name
const Paragraph = React.forwardRef<HTMLParagraphElement, ParargraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(ParargraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);
Paragraph.displayName = "paragraph";

export default Paragraph;
