import React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                /* primary: 'bg-primary text-text-default hover:bg-primary/90', */
                primary: 'neu-surface neu-pressable text-text-default',
                secondary: 'bg-secondary text-text-default',
                outline: 'border border-border text-text-default hover:bg-base/50',
                ghost: 'hover:bg-base/50',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-4',
                lg: 'h-11 rounded-md px-8',
            },
            defaultVariants: {
                variant: 'primary',
                size: 'default',
            },
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}, ref) => {
        if (asChild) {
            return (
                <div>
                    <a
                        className={twMerge(buttonVariants({variant, size, className}))}
                        ref={ref as any}
                        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    />
                </div>
            );
        }
        return (
            <button
                className={twMerge(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export {Button, buttonVariants};
