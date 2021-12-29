import Rodape from '../../components/Rodape';
import Topo from '../../components/Topo';

const QuemSomos = () => {
  return (
    <>
      <Topo />
      <div className="bg-white border-top pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8">
              <h1 className="fst-italic text-center mb-5">Quem Somos</h1>

              <p>
                O Instituto Yofi surgiu da união de dois profissionais altamente capacitados e com
                uma visão empreendedora de entregar ao seu paciente o melhor do atendimento em
                odontologia.
              </p>
              <p>
                Dra. Luciane, especialista em ortodontia, e Dr. Rogério, especialista em prótese,
                são formados em Odontologia e com suas especializações pela UNESP e possuem diversos
                outros cursos de atualização, inclusive fora do país, como o exemplo de seu curso na
                Carolina do Norte - EUA.
              </p>
              <p>
                No mercado desde 1991, apresenta hoje significativa expansão contando com duas
                unidades, Itápolis e Ibitinga, e totalizando, aproximadamente, 30 mil atendimentos.
              </p>
              <p>
                Yofi significa beleza, transliterado do hebraico, e este nome foi escolhido
                justamente por refletir a visão dos seus gestores para o trabalho realizado:
                garantir a beleza de um sorriso saudável.
              </p>
              <p>
                Com o objetivo de crescer sempre e oferecer o que há de maior valor agregado para
                você, o Instituto Yofi trabalha incansavelmente para te oferecer um tratamento com
                maior tecnologia e qualidade.
              </p>
              <p>Instituto Yofi, a arte de fazer sorrisos!</p>
              <strong className="fst-italic">Nossa missão é:</strong>
              <p className="px-3">
                Oferecer soluções em odontologia, de forma ética, garantindo sempre a melhor
                qualidade no atendimento.
              </p>
              <strong className="fst-italic">Temos como Visão de futuro:</strong>
              <p className="px-3">
                Trabalhar sempre de forma eficaz, agregando valor ao atendimento prestado aos nossos
                clientes, buscando tornar-se referência na Odontologia de Itápolis, Ibitinga e
                região.
              </p>
              <strong className="fst-italic">Nossos Valores:</strong>
              <p className="px-3">
                Instituto Yofi possui valores que norteiam o seu trabalho e os serviços prestados
                aos nossos clientes:
              </p>
              <div className="px-5">
                <i>Ética;</i>
                <br />
                <i>Comprometimento;</i>
                <br />
                <i>Eficácia;</i>
                <br />
                <i>Tecnologia;</i>
                <br />
                <i>Sustentabilidade.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default QuemSomos;
