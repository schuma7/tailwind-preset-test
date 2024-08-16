module.exports = {
    ...require('gts/.prettierrc.json'),
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
    options: {
        editorconfig: true,
    },
    printWidth: 100,
    quoteProps: 'as-needed',
    jsxBracketSameLine: false,
};
