type Props = {
    children: React.ReactNode;
}

export function TabsList({ children }: Props) {
    return (
        <div role="tablist">
            {children}
        </div>
    );
}