

export const metadata = {
    title: 'Lazy loading',
}

export default function LazyLoadingLayout({ children }) {
    return (
        <main>
            <div>{children}</div>
        </main>
    )
}
