// describe('kumpulan test case', function () {
    
    
//     // beforeEach(()=>{
//     //     cy.BukaURL()
//     // })
    
//     it('tc-1', function(){
//        cy.visit('https://www.bukalapak.com/') 
//        cy.wait(1000)
//        cy.contains('Daftar').click()
//        cy.go('back')
//        cy.go('forward')
      
//     }),
//     it('tc-2', function(){
//         cy.visit('https://www.bukalapak.com/')
//         cy.contains('Daftar').click()
      
//     })
    
//     Cypress.on('uncaught:exception', (err, runnable)=>{
//         return false
//     })
// })


describe('pembelian test case', function () {
    
    
    before(()=>{
        cy.BukaURL()
    })
    it('registrasi', function(){
        
        cy.get('#login2').click()
        cy.get('#loginusername').type('roy9090').should('have.value','roy9090')
        cy.get('#loginpassword').type('9090').should('have.value','9090')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type('roy').should('have.value','roy')
        cy.get('#country').type('indonesia').should('have.value','indonesia')
        cy.get('#city').type('bandung').should('have.value','bandung')
        cy.get('#card').type('1111').should('have.value','1111')
        cy.get('#month').type('agustus').should('have.value','agustus')
        cy.get('#year').type('2021').should('have.value','2021')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.go('back')
        cy.go('back')
    }),
    
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})