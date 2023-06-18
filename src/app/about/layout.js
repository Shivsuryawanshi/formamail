import Navbar from './Navbar'

export default function AboutLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <Navbar />


            {children}
        </section>
    )
}