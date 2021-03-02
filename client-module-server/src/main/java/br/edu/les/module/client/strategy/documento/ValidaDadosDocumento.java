package br.edu.les.module.client.strategy.documento;

import br.edu.les.module.client.domain.Cliente;
import br.edu.les.module.client.domain.Documento;
import br.edu.les.module.client.domain.EntidadeDominio;
import br.edu.les.module.client.strategy.IStrategy;
import org.springframework.stereotype.Component;

import javax.print.Doc;
import java.util.List;

@Component
public class ValidaDadosDocumento implements IStrategy {
    @Override
    public String processar(EntidadeDominio entidade) {
        StringBuilder msg = new StringBuilder();
        if(entidade instanceof Cliente || entidade instanceof Documento) {
            if(entidade instanceof Cliente) {
                List<Documento> documentos = ((Cliente) entidade).getDocumentos();
                documentos.forEach(documento -> msg.append(validaDados(documento)));
            } else {
                Documento documento = (Documento) entidade;
                msg.append(validaDados(documento));
            }
        }
        return msg.toString();
    }

    private String validaDados(Documento documento){
        StringBuilder msg = new StringBuilder();
        if(documento.getCodigo() == null || documento.getCodigo().trim().equals("")){
            msg.append("Valor do documento está incorreto");
        }
        return msg.toString();
    }

}
