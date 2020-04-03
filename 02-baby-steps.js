const [nodePath, filePath, ...args] = process.argv;
if (Array.isArray(args)) {
    const sum = args.reduce((acc, currVal) => {
        return acc + parseInt(currVal);
    }, 0);
    console.log(sum);
}
