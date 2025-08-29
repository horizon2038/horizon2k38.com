import React from 'react';
import {twMerge} from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

interface CardHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function CardHeader({title, subtitle, className}: CardHeaderProps) {
    return (
        <div className={twMerge('border-b px-6 py-4', className)}>
            <h3 className="font-semibold text-text-default">{title}</h3>
            {subtitle && <p className="text-sm text-text-default/90 pb-2">{subtitle}</p>}
        </div>
    );
}

export function CardContent({children, className}: CardProps) {
    return <div className={twMerge('p-6', className)}>{children}</div>;
}

export function Card({children, className, ...props}: CardProps) {
    return (
        <div
            className={twMerge(
                'rounded-md border-border neu-surface neu-pressable',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
