// cypress/e2e/usuarios.cy.js
describe('API Usuários', () => {
    let userId;

    it('Deve criar um novo usuário', () => {
        cy.request('POST', 'http://localhost:3000/usuario/cadastrar', {
            name: 'João Teste',
            age: 30,
            email: `joao${Date.now()}@teste.com` // evita conflito por unique
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('name', 'João Teste');
            expect(response.body).to.have.property('age', 30);
            userId = response.body.id;
        });
    });

    it('Deve listar todos os usuários', () => {
        cy.request('GET', 'http://localhost:3000/usuario/registro/todos')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
            });
    });

    it('Deve buscar um usuário individual', () => {
        cy.request('GET', `http://localhost:3000/usuario/registro/individual/${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', userId);
                expect(response.body).to.have.property('name', 'João Teste');
            });
    });

    it('Deve atualizar um usuário', () => {
        cy.request('POST', 'http://localhost:3000/usuario/atualizar', {
            id: userId,
            name: 'João Atualizado',
            age: 35
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'João Atualizado');
            expect(response.body).to.have.property('age', 35);
        });
    });

    it('Deve deletar um usuário', () => {
        cy.request('DELETE', `http://localhost:3000/usuario/deletar/${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('message', 'Usuário deletado com sucesso');
            });
    });

    it('Deve retornar 404 ao buscar usuário inexistente', () => {
        const fakeId = crypto.randomUUID();

        cy.request({
            method: 'GET',
            url: `http://localhost:3000/usuario/registro/individual/${fakeId}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
