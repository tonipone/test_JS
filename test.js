describe('not.stringContaining', () => {
    const fraseG = require('./str_test');
    const conferma = fraseG();

it('Contiene un Testo', () => {
    expect(typeof conferma).toEqual('string');
    });
it('Contiene una Data', () => {
    const conferma = /^[0-9]{2}.[0-9]{2}.[0-9]{4} - [\w ]+$/.test(fraseG());
    expect(conferma).toBeTruthy();
    });
it('Contiene una Frase dopo la data', () => {
        const conferma = /- [\w ]+$/.test(fraseG());
        expect(conferma).toBeTruthy();
    });
});