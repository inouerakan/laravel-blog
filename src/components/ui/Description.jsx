export default function Book({numColor, number, title, description, numBottom, numRight}) {
    const base = import.meta.env.BASE_URL;
    const numVerticalPos = numBottom ? 'self-end' : 'self-start'
    const numHorizontalPos = numRight ? 'order-1' : '';

    return (
        <div className="flex md:gap-4 gap-2 lg:w-95 md:w-75 w-50">
            <h1 style={{color: numColor}} className={`lg:text-8xl/20 md:text-6xl text-4xl ${numVerticalPos} ${numHorizontalPos}`}>{number}</h1>
            <div className="flex flex-col md:gap-3 gap-1">
                <h2 className="lg:text-4xl md:text-3xl text-2xl">{title}</h2>
                <p className="font-serif text-dark-100">{description}</p>
            </div>
        </div>
    )
}