import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {twMerge} from 'tailwind-merge';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                // primary: 'bg-primary text-text-default hover:bg-primary/90',
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
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);

type ButtonAsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        asChild?: false;
    };

type ButtonAsChildProps = {
    asChild: true;
    /** className は Button 側でも上書き可 */
    className?: string;
    /** className を受け取れる単一要素（<a> や <Link> など） */
    children: React.ReactElement<{className?: string}>;
} & VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsChildProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        if (props.asChild) {
            const {asChild: _a, variant, size, className, children} = props;
            return React.cloneElement(children, {
                className: twMerge(buttonVariants({variant, size}), children.props.className, className),
            });
        }

        const {className, variant, size, ...rest} = props;
        return (
            <button
                ref={ref}
                className={twMerge(buttonVariants({variant, size}), className)}
                {...rest}
            />
        );
    }
);
Button.displayName = 'Button';

export {buttonVariants};

