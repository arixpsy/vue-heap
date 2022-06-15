import ArticleCard from '../ArticleCard.vue'

describe ('Article card component test', () => {
    it ('renders card', () => {
        cy.mount(ArticleCard, { props: { title: 'test' } })
            .get('h1')
            .should('contain.text', 'test')
    })
})
