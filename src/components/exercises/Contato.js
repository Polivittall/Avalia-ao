import { useState } from "react"
import { FormControl } from "react-bootstrap";

function Contato (){

    let [nome, setNome] = useState();
    let [telefone, setTelefone] = useState();
    let [assunto, setAssunto] = useState();
    let [mensagem, setMensagem] = useState();
    let [class_btn, setClassBtn] = useState("btn btn-primary mt-4");
    let [enviar, setEnviar] = useState();
   let[status, setStatus] = useState({
    "variant": "",
    "message": ""
   })

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
        setStatus({
            "variant": "success",
            "message": "Resposta enviada! (:"
        })
    }

    function chanceEnviar (value){
        setEnviar(value.target.value)
    }


    return (

        <>
       <div className="container pt-2">
            
            <div className="card">

                <div className="card-title pt-2 card-header">
                    <h1>Informações de Contato</h1>

                    <div className="row"> </div>

                    <div className="col-sm-12 col-md-6 col-lg-6"> 
                    <label className="label-control"><b>Nome</b></label>
                    <input className="form-control" type="text"placeholder="Insira seu nome"onChange={nome}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <label className="label-control"><b>Telefone/Celular</b></label>
                    <input className="form-control" type="text" placeholder="Insira seu telefone" onChange={telefone}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <label className="label-control"><b>Assunto</b></label>
                    <input className="form-control" type="text" placeholder="Insira o assunto" onChange={assunto}></input>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <label className="label-control"><b>Mensagem</b></label>
                    <input className="form-control" type="text" placeholder="Insira uma mensagem" onChange={mensagem} as = "textarea" linhas = {4}></input>
                    </div>

                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <button className={class_btn} onClick={setEnviar}>Enviar</button>

                    </div>
                </div>
            </div>
        </div>            

        </>
    )
}

export default Contato;
