type Props = {
    children: React.ReactNode;
    index: number;
}

export function TabsPanel({ children, index }: Props) {
    return (
        <div role="tabpanel" aria-labelledby={`tab-${index}`}>
            {children}
        </div>
    );
}