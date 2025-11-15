export default function DefulttText({ title, dan = true, ...props }) {
    return (
        <>
            {dan ? (
                <div
                    className="title"
                    {...props}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            ) : (
                <div className="title" {...props}>
                    {title}
                </div>
            )}
        </>
    );
}
