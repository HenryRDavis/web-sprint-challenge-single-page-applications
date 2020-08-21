describe('Add text, selecting toppings, submit form', () => {
    it('navigate to http://localhost:3000 ', () => {
      cy.visit('http://localhost:3000 ')
      cy.url().should('include', 'localhost')
    })

    it('navigate to pizza page', () => {
        cy.get('').click()
    })

    it('add text to box', () => {
      cy.get('input[name="name"]')
        .type('Enrique')
        .should('have.value', 'Enrique')
        })

    it('choose a pizza size', () => {
        cy.get('select')
          .select('medium')
      })

    it('select toppings', () => {
        cy.get('[type="checkbox"]').check()
     })

    it('submit order', () => {
        cy.get('button').click()
      })
    })