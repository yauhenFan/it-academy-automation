class Base {
    open(url) {
        cy.visit(url);
    }
}

module.exports = Base;
