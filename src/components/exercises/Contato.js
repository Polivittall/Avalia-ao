import { useState } from "react"

function Contato (){

    let [nome, setNome] = useState();
    let [telefone, setTelefone] = useState();
    let [assunto, setAssunto] = useState();
    let [mensagem, setMensagem] = useState();
    let [class_btn, setClassBtn] = useState("btn btn-primary mt-4");

    function chanceNome (value){
        setNome(value.target.value)
    }

    function chanceTelefone (value){
        setTelefone(value.target.value)
    }

    function chanceAssunto (value){
        setAssunto(value.target.value)
    }

    function chanceMensagem (value){
        setMensagem(value.target.value)
    }


    return (

        <>
       <div className="container pt-2">
            
            <div className="card">

                <div className="card-title pt-2 card-header">
                    <h1>Informações de Contato</h1>

                    <div className="row"> </div>

                    <div className="col-sm-12 col-md-6 col-lg-6"> 
                    <input className="form-control" type="text"placeholder="Insira seu nome"onChange={nome}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input className="form-control" type="text" placeholder="Insira seu telefone" onChange={telefone}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input className="form-control" type="text" placeholder="Insira o assunto" onChange={assunto}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <input className="form-control" type="text" placeholder="Insira uma mensagem" onChange={mensagem} as = "textarea" linhas = {4}></input>
                    </div>

                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <button className={class_btn}>Enviar</button>

                    </div>
                </div>
            </div>
        </div>            

        </>
    )
}

export default Contato;
