export default function Book({numColor, number, title, description, numBottom, numRight}) {
    const base = import.meta.env.BASE_URL;
    const numVerticalPos = numBottom ? 'self-end' : 'self-start'
    const numHorizontalPos = numRight ? 'order-1' : '';

    return (
        <div className="flex gap-4 w-95">
            <h1 style={{color: numColor}} className={`text-8xl/20 ${numVerticalPos} ${numHorizontalPos}`}>{number}</h1>
            <div className="flex flex-col gap-3">
                <h2 className="text-4xl">{title}</h2>
                <p className="font-serif text-dark-100">{description}</p>
            </div>
        </div>
    )
}