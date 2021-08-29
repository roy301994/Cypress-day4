describe('login test case', function () {
    
    
    beforeEach(()=>{
        cy.BukaURL()
    })
    
    it('tc-1', function(){
        cy.get('#login2').click()
        cy.get('#loginusername').type('roy9090').should('have.value','roy9090')
        cy.get('#loginpassword').type('9090').should('have.value','9090')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      
    })
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})