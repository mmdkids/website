import Link from 'next/link'

const links = [
   
    {
        title: 'About',
        href: '#',
    },
    {
        title: 'Programs',
        href: '#',
    },
    {
        title: 'Parent Login',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent text-2xl font-fredoka">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center  md:order-first">© {new Date().getFullYear()} Mastermind Daycare, All rights reserved</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
