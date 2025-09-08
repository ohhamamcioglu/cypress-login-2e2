/// <reference types="cypress" />
describe('Login Form E2E', () => {
  const appUrl = 'http://localhost:5173' // vite default

  it('a) Başarılı form doldurulduğunda submit -> success sayfası açılır', () => {
    cy.visit(`${appUrl}/login`)
    cy.get('[data-cy="form-email"]').type('emre@example.com')
    cy.get('[data-cy="form-password"]').type('StrongPass1')
    cy.get('[data-cy="form-accept"]').check()
    cy.get('[data-cy="form-submit"]').should('be.enabled').click()
    cy.location('pathname').should('eq', '/success')
    cy.contains('Form başarıyla gönderildi').should('be.visible')
  })

  it('b1) Email yanlış: 1 hata mesajı, doğru hata mesajı, buton disabled', () => {
    cy.visit(`${appUrl}/login`)
    cy.get('[data-cy="form-email"]').type('yanlis-email').blur()
    cy.get('[data-cy="form-password"]').type('StrongPass1').blur()
    cy.get('[data-cy="form-accept"]').check()

    cy.get('[data-cy="error-email"]')
      .should('be.visible')
      .and('contain', 'Lütfen geçerli bir email giriniz')
    cy.get('.error').should('have.length', 1)
    cy.get('[data-cy="form-submit"]').should('be.disabled')
  })

  it('b2) Email ve password yanlış: 2 hata mesajı, password hata metni, buton disabled', () => {
    cy.visit(`${appUrl}/login`)
    cy.get('[data-cy="form-email"]').type('yanlis-email').blur()
    cy.get('[data-cy="form-password"]').type('kisa').blur()
    cy.get('[data-cy="form-accept"]').check()

    cy.get('.error').should('have.length', 2)
    cy.get('[data-cy="error-password"]')
      .should('contain', 'Şifre en az 8 karakter, 1 büyük harf ve 1 sayı içermelidir')
    cy.get('[data-cy="form-submit"]').should('be.disabled')
  })

  it('b3) Email & password doğru ama şartlar kabul değil -> buton disabled', () => {
    cy.visit(`${appUrl}/login`)
    cy.get('[data-cy="form-email"]').type('emre@example.com').blur()
    cy.get('[data-cy="form-password"]').type('StrongPass1').blur()
    cy.get('[data-cy="form-submit"]').should('be.disabled')
  })
})

