describe('registrasi', function () {
    
    
    beforeEach(()=>{
        cy.BukaURL()
    })
    
    it('tc-1', function(){
        cy.get('#signin2').click
        cy.wait(1000)
        cy.get('#sign-username').type('roy9090').should('have.value','roy9090')
        cy.get('#sign-password').type('9090').should('have.value','9090')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})