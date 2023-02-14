const truncate = (text, length) => {
    return (text.length>length)?
        text.slice(0, length - 1) + "…" :text;
};
console.log(truncate("Я укорачиваю текст и ставлю ...", 5));
