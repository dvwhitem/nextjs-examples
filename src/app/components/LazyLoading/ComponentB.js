export default function ComponentB() {
    return (
        <div>
            <h1>Component B</h1>
            <p>
                Lazy loading
                in Next.js helps improve the initial loading performance of an application by decreasing the amount of JavaScript needed to render a route.
                It allows you to defer loading of Client Components and imported libraries, and only include them in the client bundle when they're needed. For example, you might want to defer loading a modal until a user clicks to open it.
                There are two ways you can implement lazy loading in Next.js
            </p>
        </div>
    )
}