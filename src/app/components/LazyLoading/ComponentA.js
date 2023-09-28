export default function ComponentA() {
    console.log('Component A')
    return (
        <div>
            <h1>Component A</h1>
            By default, Server Components are automatically code split
            and you can use streaming to progressively send pieces of UI from the server to the client. Lazy loading applies to Client Components.
        </div>
    )
}