export default function ComponentC() {
    console.log('Component C')
    return (
        <div>
            <h1>Component C</h1>
            <p>
                When using React.lazy() and Suspense, Client Components will be pre-rendered (SSR) by default.
                If you want to disable pre-rendering for a Client Component, you can use the ssr option set to false:\
            </p>
        </div>
    )
}