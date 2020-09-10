package br.edu.les.module.client.facade;

import java.util.List;
import java.util.Map;

import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.domain.Resultado;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Service;

import br.edu.les.module.client.dao.IDAO;

@Service
public class Fachada extends AbstractFachada implements IFachada {

    private StringBuilder mensagensDeErro = new StringBuilder();
    private Resultado resultado;

	private void executarRegras(EntidadeDominio entidade, List<IStrategy> rnsEntidade) {
        for (IStrategy rn : rnsEntidade) {
            String msg = rn.processar(entidade);
            if (msg != null) {
                mensagensDeErro.append(msg);
            }
        }
    }

	@Override
	public Resultado salvar(EntidadeDominio entidade) {
		super.inicializeMaps();
		resultado = new Resultado();
		mensagensDeErro.setLength(0);
		String nmClasse = entidade.getClass().getName();
		Map<String, List<IStrategy>> mapaEntidade = regrasNegocio.get(nmClasse);
		List<IStrategy> rnsEntidade = mapaEntidade.get("SALVAR");
		
		executarRegras(entidade, rnsEntidade);
		
		if(mensagensDeErro.length() == 0) {
			IDAO dao = daos.get(nmClasse);
			dao.salvar(entidade);
			resultado.addEntidade(entidade);
		}else {
			resultado.addEntidade(entidade);
			resultado.setMsg(mensagensDeErro.toString());
		}
		
		return resultado;
	}

	@Override
	public Resultado alterar(EntidadeDominio entidade) {
		super.inicializeMaps();
    	resultado = new Resultado();
        mensagensDeErro.setLength(0);
        String nmClasse = entidade.getClass().getName();

        Map<String, List<IStrategy>> mapaEntidade = regrasNegocio.get(nmClasse);
        List<IStrategy> rnsEntidade = mapaEntidade.get("ALTERAR");

        executarRegras(entidade, rnsEntidade);

        if (mensagensDeErro.length() == 0) {
        	IDAO dao = daos.get(nmClasse);
            dao.alterar(entidade);
            resultado.addEntidade(entidade);
        } else {
            resultado.addEntidade(entidade);
            resultado.setMsg(mensagensDeErro.toString());
        }

        return resultado;
	}

	@Override
	public Resultado excluir(EntidadeDominio entidade) {
		super.inicializeMaps();
		resultado = new Resultado();
        String nmClasse = entidade.getClass().getName();
		Map<String, List<IStrategy>> mapaEntidade = regrasNegocio.get(nmClasse);

		if(mapaEntidade != null){
			List<IStrategy> rnsEntidade = mapaEntidade.get("EXCLUIR");
			if(rnsEntidade != null){
				executarRegras(entidade, rnsEntidade);
			}
		}

		resultado.addEntidade(entidade);

		if (mensagensDeErro.length() == 0) {
			IDAO dao = daos.get(nmClasse);
			dao.excluir(entidade);
		} else {
			resultado.setMsg(mensagensDeErro.toString());
		}


        return resultado;
	}

	@Override
	public Resultado consultar(EntidadeDominio entidade) {
		super.inicializeMaps();
    	resultado = new Resultado();
		mensagensDeErro.setLength(0);
        String nmClasse = entidade.getClass().getName();
		Map<String, List<IStrategy>> mapaEntidade = regrasNegocio.get(nmClasse);

		if(mapaEntidade != null){
			List<IStrategy> rnsEntidade = mapaEntidade.get("CONSULTAR");
			if(rnsEntidade != null){
				executarRegras(entidade, rnsEntidade);
			}
		}


		if (mensagensDeErro.length() == 0) {
			IDAO dao = daos.get(nmClasse);
			resultado.setEntidades(dao.consultar(entidade));
		} else {
			resultado.addEntidade(entidade);
			resultado.setMsg(mensagensDeErro.toString());
		}

		return resultado;
	}

}