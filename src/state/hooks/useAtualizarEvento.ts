import { useSetRecoilState } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {

    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    //eu poderia ao inves de usar o const atualiza aqui, usar somente o return direto
    //dessa forma não seria necessário o return atualiza na linha 18
    const atualiza = (evento: IEvento) => {
        return  setListaDeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(evt => evt.id === evento.id)
            return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice +1)]  
          })
    }

    //eu posso também retornar no formato de obj { atualiza }. Se retornar como obj onde vou usar eu tenho que fazer a 
    // desestruturação dele, ex: const { atualiza } = useAtualizarEvento()
    return atualiza;

}

export default useAtualizarEvento