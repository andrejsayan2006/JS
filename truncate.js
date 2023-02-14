const truncate = (text, length) => {
    return (text.length>length)?
        text.slice(0, length - 1) + "…" :text;
};
console.log(truncate("привет как дела?", 5))
