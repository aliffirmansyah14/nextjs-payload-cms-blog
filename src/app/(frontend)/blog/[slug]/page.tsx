import ArticleMetadata from '@/components/blog/artilce-metadata'
import Image from 'next/image'

export default function BlogPostPage() {
    return (
        <div className="prose lg:prose-lg dark:prose-invert min-w-full">
            {/* title */}
            <h1>How to Create a Blog Tutolrial Lorem, ipsum dolor.</h1>
            {/* metaData */}
            <ArticleMetadata
                intent="post"
                data={{
                    publishedAt: new Date('2025-11-13T20:45:00'),
                    readTimeMins: 2,
                    author: {
                        avatar: 'https://placehold.co/40x40/png',
                        name: 'Joe Mama',
                        role: 'Staff Writer',
                    },
                }}
            />
            {/* cover image */}
            <Image
                alt={`Cover image`}
                src={'https://placehold.co/600x300/png'}
                width={600}
                height={300}
                className="aspect-video w-full object-cover object-center"
                loading="eager"
            />
            {/* contant */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum tempora sunt autem ea
                cum, architecto laborum rerum, modi veritatis animi fugit incidunt ab provident iste
                odit delectus ducimus facilis nisi at itaque. Corporis ullam natus nobis, maiores
                labore necessitatibus magni quia magnam. Quaerat facere sint atque eveniet iure vel
                nulla facilis incidunt iste quo repudiandae quibusdam consequatur suscipit, commodi
                fuga officia nisi quos debitis vitae molestias. Et quas, eveniet corporis at modi
                praesentium iusto beatae magni sed similique libero quod quisquam provident
                voluptatibus incidunt ex eum, quis ducimus earum nisi voluptatum quam sit expedita
                adipisci. Suscipit atque rem nemo sit.
            </p>
        </div>
    )
}
