export const convertPoolName = (pools : string ) => {
    let split = pools.split(':').map(s => s.toUpperCase());
    if (split.length > 2) split = split.slice(1);
    split = split.filter(s => s != null && s != '');
    return split.map((s, i) => (i > 0 ? '-' : '') + s)
}