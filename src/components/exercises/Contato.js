import { useState } from "react"

function Contato (){

    let [nome, setNomeNome] = useState ();
    let [class_btn, setClassBtn] = useState();

    function chanceNome(value){
        setNome (value.target.value)
    }

    return (

        <>
        <div className="card"></div>
            <div className="container pt-2">
                <div className="card-title p-2 border-bottom card-hearder ">
                </div>
                <div className="card-body"> </div>
                <div className="row"> </div>

                <div className="col sm-12 col-md-6 col-lg-6"> </div>
                <label className="label-control"><b>Nome</b></label>
                <input
                className="form-control"
                type="text"
                placeholder="Insira o nome"
                onChange={chanceNome}>
                </input>

                
                <div className="col sm-12 col-md-6 col-lg-6"> </div>
                <label className="label-control"><b>Telefone</b></label>
                <input
                className="form-control"
                type="text"
                placeholder="Insira o telefone"
                onChange={chanceNome}>
                </input>

                
                <div className="col sm-12 col-md-6 col-lg-6"> </div>
                <label className="label-control"><b>Assunto</b></label>
                <input
                className="form-control"
                type="text"
                placeholder="Insira o assunto"
                onChange={chanceNome}>
                </input>

                
                <div className="col sm-12 col-md-6 col-lg-6"> </div>
                <label className="label-control"><b>Mensagem</b></label>
                <input
                className="form-control"
                type="text"
                placeholder="Insira uma mensagem"
                onChange={chanceNome}>
                </input>

                <div className="col-sm-12 col-md-2 col-lg-2"> 
                <button class= {class_btn}>Enviar</button>
                </div>


             </div>     

        </>
    )
}

export default Contato;
