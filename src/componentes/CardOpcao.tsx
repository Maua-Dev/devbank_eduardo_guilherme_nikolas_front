type Props = {
    texto: string;
  };
  
  function CardOpcao({ texto }: Props) {
    return <div className="card-opcao">{texto}</div>;
  }
  
  export default CardOpcao;
  