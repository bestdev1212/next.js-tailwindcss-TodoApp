
// const checkItemsCount = (targetCount: number):boolean => {
//   cy.get('[data-test-id="test-todo-items"]').then(res => res.length == targetCount)
//   return false
// }


describe('example todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays three todo items by default', () => {   
    cy.get('[data-test-id="test-todo-items"]').should('have.length', 3)
    cy.get('[data-test-id="test-todo-items"]').first().then(res => {expect(res.text()).to.contain('first')})
    cy.get('[data-test-id="test-todo-items"]').last().then(res => {expect(res.text()).to.contain('third')})
    cy.get('[data-test-id="test-todo-counts"]').first().then(res => {expect(res.text()).to.contain('2')})
  })

  it('add new todo items', () => {    
    const newItem = '4th item'
    cy.get('[data-test-id="test-input"]').type(`${newItem}{enter}`)
    cy.get('[data-test-id="test-todo-items"]')
      .should('have.length', 4)
      .last()
      .then(res => {expect(res.text()).to.contain('4th')})
    cy.get('[data-test-id="test-todo-counts"]').first().then(res => {expect(res.text()).to.contain('3')})    
  })

  it('delete "third task" item', () => {
    cy.contains('third task').next().invoke('show').click()
    cy.get('[data-test-id="test-todo-items"]')
      .should('have.length', 3)
      cy.get('[data-test-id="test-todo-counts"]').first().then(res => {expect(res.text()).to.contain('2')})   
  })

  it('filter todo items with clear completed', () => {
    cy.contains('Active').click()
    cy.get('[data-test-id="test-todo-items"]')
      .should('have.length', 2)
      cy.get('[data-test-id="test-todo-counts"]').first().then(res => {expect(res.text()).to.contain('2')})   
      cy.contains('Completed').click()
  cy.get('[data-test-id="test-todo-items"]')
      .should('have.length', 1)
      cy.contains('All').click()
      cy.contains('Clear Completed').click()
      cy.get('[data-test-id="test-todo-items"]')
      .should('have.length', 2)
  })

  
  
})