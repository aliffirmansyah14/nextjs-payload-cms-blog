import Link from 'next/link'

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <Link
                href={'/blog'}
                aria-label="Back to blog"
                className="relative inline-flex justify-center items-center gap-2 after:absolute after:content-[''] after:left-1 after:-bottom-1 after:w-0 hover:after:animate-slide-right after:bg-gray-500 after:h-0.5"
            >
                <ArrowLeftIcon size={20} />
                All artilces
            </Link>

            {children}
        </div>
    )
}

function ArrowLeftIcon({ size = 20, color = 'currentColor' }: { size: number; color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    )
}
