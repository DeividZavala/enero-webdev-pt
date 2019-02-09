describe("Func", function(){

    it("Decir hola morros", function(){
        expect(ironhackers()).toEqual("Hola morros");
    })

})


describe("mi calcu", () => {

    it("Regresame el 0 cuando no haya nada en el array", function(){
        expect(sumArray([])).toEqual(0)
    })

    it("regresar la suma del arreglo", ()=> {
        expect(sumArray([1,2,3])).toEqual(6)
    })

})