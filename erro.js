function trataErroELancar(erro) {
   // throw new Error("Ocorreu um erro aguarde") -feito isso no catch
   // throw 10 - feito isso no catch
   // throw true - feito isso no catch
   // throw "mensagem" - feito isso no catch
   throw {
       nome: erro.name,
       msg: erro.menssage,
       date: new Date
   }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        trataErroELancar(e)
    } finally {
        console.log("final")
    }
}

const obj = { nome: "Roberto" }
imprimirNomeGritando(obj)

// try é um bloco que potencialmente pode gerrar um tipo de erro e trata apartir do catch
// finaly sempre sera executado sendo que tudo de certo ou errado (cai no catch)
// usar mensagem generica de erro ou rash (idetinfica o log onde erro ocorreu) 