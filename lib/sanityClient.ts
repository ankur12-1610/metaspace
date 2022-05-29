import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'g0213pv2',
    dataset: 'production',
    apiVersion: '2022-05-29',
    token: 'sk2hNvh4YGy5svTd5G2rnFVSEPacOqxQiCep4z0ZCafqDh86GToYc2q8k2x8hBBthooWHW3jHAvNELG3gH2TEtnGEjcE5Fi8fsJSTOmwc4vC1OYXtRtZ4Q16YFxaILvJmRX6evLHuKQCkiRBtCD0w2KqCINxglddR3cnpFlKZzmOJ2JryrLw',
    useCdn: false
});
