import Style from './index.module.css'

export default function PortfolioComp() {
  return (
    <div className={Style.containerBox}>
      <div className={Style.containerContent}>
        <h1 className={Style.title}>Cadastro de Produtos</h1>
        <form action="#" className={Style.formulario} method='post'>

          <label htmlFor="nomeProduto" className={Style.fieldLabel} >Nome do Produto</label>
          <input type="text" name="nomeProduto" id="nomeProduto" placeholder='Informe o Nome do Produto' className={Style.field} />
          
          <div className={Style.fieldContainer}>
          
            <div className={Style.structContainer}>
              
              <label htmlFor="precoVenda" className={Style.fieldLabel}>Preço de Venda</label>
              <input type="text" name="precoVenda" id="precoVenda" placeholder='Informe o preço de Venda do Produto' className={Style.field} />
                
             <label htmlFor="fornecedor" className={Style.fieldLabel}>Fornecedor</label>
              <select name="fornecedor" id="fornecedor" className={Style.field}>
                  <option value="0" disabled selected>Selecione um fornecedor</option>
                  <option value="Fornecedor 1">Fornecedor 1</option>
                  <option value="Fornecedor 2">Fornecedor 2</option>
                  <option value="Fornecedor 3">Fornecedor 3</option>
                  <option value="Fornecedor 4">Fornecedor 4</option>
                  <option value="Fornecedor 5">Fornecedor 5</option>
              </select>

            </div>
            
            <div className={Style.structContainer}> 

               <label htmlFor="precoCusto" className={Style.fieldLabel}>Fornecedor</label>
              <input type="text" name="precoCusto" id="fornecedor" placeholder='Informe o preço de Custo do Produto' className={Style.field}/>
            
              
              <label htmlFor="categoria" className={Style.fieldLabel}>Categoria</label>
              <select name="categoria" id="categoria" className={Style.field}>
                    <option value='0' disabled selected>Selecione uma categoria</option>
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                    <option value="5">option 5</option>
              </select>

        </div> 
            
          </div>
          <label htmlFor="textArea"> Descrição do Produto</label>
          <input type='textarea' className={Style.textArea} name="textArea" id="textArea" placeholder='Informe a descrição do Produto' />
        <div className={Style.containerButton}>
          
          <button type="button" className={ Style.button}>Enviar</button>
        
        </div>       
        
        </form>
      </div>
    </div>
  );
 }