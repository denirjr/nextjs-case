module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/perguntas',
                destination: '/',
                permanent: true,
            },
        ]
    },
}