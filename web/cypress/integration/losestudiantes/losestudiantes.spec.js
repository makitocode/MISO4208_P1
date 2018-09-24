describe('Los estudiantes commment teacher', function () {

    beforeEach(function () {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("pruebasautomaticas@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("123456789")
        cy.get('.cajaLogIn').contains('Ingresar').click()

        cy.get('.buscador').find('input[role="combobox"]').type("Mario Linares", { force: true })
        cy.contains("Mario Linares Vasquez - Ingeniería de Sistemas").click()
        cy.get('.nombreProfesor').contains("Mario Linares Vasquez")
        cy.get('.resena').find('#escribir-resena').click()
    })


    it('Search teacher an leave comment without move sliders', function () {
        cy.get('.resenaEscribir').find('textarea[name="contenido"]').type('test comment please erease')
        cy.get('.resenaEscribir').find('textarea[name="pros"]').type('test comment please erease')
        cy.get('.resenaEscribir').find('textarea[name="cons"]').type('test comment please erease')
        cy.get('.resenaEscribir').find('select[name="idMateria"]').select('MISO4208')
        cy.get('.botonPublicar').click()

        cy.contains('El mínimo es 1.5')
        cy.contains('La dificultad mínima es 1.5')
        cy.contains('La nota mínima es 1.5')
    })

    it('Search teacher an leave comment select subject', function () {
        cy.get('.resenaEscribir').find('textarea[name="contenido"]').type('test comment please erease')
        cy.get('.resenaEscribir').find('textarea[name="pros"]').type('test comment please erease')
        cy.get('.resenaEscribir').find('textarea[name="cons"]').type('test comment please erease')
        cy.get('.botonPublicar').click()

        cy.contains('Selecciona la materia que viste con este profesor')
    })
})