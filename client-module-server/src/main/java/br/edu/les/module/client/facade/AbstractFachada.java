package br.edu.les.module.client.facade;

import br.edu.les.module.client.dao.*;
import br.edu.les.module.client.domain.*;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.strategy.documento.ValidaDadosDocumento;
import br.edu.les.module.client.strategy.endereco.ValidaExistenciaCidade;
import br.edu.les.module.client.strategy.cliente.ValidaDadosCliente;
import br.edu.les.module.client.strategy.cliente.ValidaExistenciaPessoa;
import br.edu.les.module.client.strategy.usuario.*;
import br.edu.les.module.client.strategy.endereco.ValidaDadosEndereco;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AbstractFachada {

    protected Map<String, IDAO> daos = new HashMap<>();

    protected Map<String, Map<String, List<IStrategy>>> regrasNegocio = new HashMap<>();

    /*
        Todas Persistence
     */

    @Autowired
    private ClienteDAO clienteDAO;

    @Autowired
    private UsuarioDAO usuarioDAO;

    @Autowired
    private EnderecoDAO enderecoDAO;

    @Autowired
    private EstadoDAO estadoDAO;

    @Autowired
    private CidadeDAO cidadeDAO;

    @Autowired
    private TipoEnderecoDAO tipoEnderecoDAO;

    /*
        Todas Strategy
     */

    @Autowired
    private ValidaDadosCliente validaDadosCliente;

    @Autowired
    private ValidaExistenciaPessoa validaExistenciaPessoa;

    @Autowired
    private ValidaDadosUsuario validaDadosUsuario;

    @Autowired
    private ValidaSenhasIguais validaSenhasIguais;

    @Autowired
    private ValidaExistenciaUsuario validaExistenciaUsuario;

    @Autowired
    private ValidaUsuarioAtivo validaUsuarioAtivo;

    @Autowired
    private GeraCodigoUsuario geraCodigoUsuario;

    @Autowired
    private CriptografaSenha criptografarSenha;

    @Autowired
    private ValidaSenhaUsuario validaSenhaUsuario;

    @Autowired
    private ValidaDadosEndereco validaDadosEndereco;

    @Autowired
    private ValidaExistenciaCidade validaExistenciaCidade;

    @Autowired
    private ValidaDadosDocumento validaDadosDocumento;


    public AbstractFachada(){
    }

    protected void inicializeMaps(){

        //------------------ Hash Classe e DAO -------------------------//

        daos.put(Cliente.class.getName(), clienteDAO);
        daos.put(Usuario.class.getName(), usuarioDAO);
        daos.put(Endereco.class.getName(), enderecoDAO);
        daos.put(Estado.class.getName(), estadoDAO);
        daos.put(Cidade.class.getName(), cidadeDAO);
        daos.put(TipoEndereco.class.getName(), tipoEnderecoDAO);

        //------------------------ Hash Cliente ----------------------------//

        List<IStrategy> rnsClienteSalvar = new ArrayList<>();

        rnsClienteSalvar.add(validaDadosCliente);
        rnsClienteSalvar.add(validaExistenciaPessoa);
        rnsClienteSalvar.add(validaDadosUsuario);
        rnsClienteSalvar.add(validaSenhasIguais);
        rnsClienteSalvar.add(validaExistenciaUsuario);
        rnsClienteSalvar.add(geraCodigoUsuario);
        rnsClienteSalvar.add(criptografarSenha);
        rnsClienteSalvar.add(validaDadosDocumento);

        List<IStrategy> rnsPessoaAlterar = new ArrayList<>();

        rnsPessoaAlterar.add(validaDadosCliente);
        rnsPessoaAlterar.add(validaDadosUsuario);
        rnsPessoaAlterar.add(validaExistenciaUsuario);

        Map<String,List<IStrategy>> mapaLeitor = new HashMap<>();

        mapaLeitor.put("SALVAR",rnsClienteSalvar);
        mapaLeitor.put("ALTERAR",rnsPessoaAlterar);

        this.regrasNegocio.put(Cliente.class.getName(), mapaLeitor);

        //------------------------ Hash Usuario ----------------------------//


        List<IStrategy> rnsUsuarioConsultar = new ArrayList<>();

        rnsUsuarioConsultar.add(validaDadosUsuario);
        rnsUsuarioConsultar.add(validaSenhaUsuario);
        rnsUsuarioConsultar.add(validaUsuarioAtivo);

        List<IStrategy> rnsUsuarioAlterar = new ArrayList<>();

        rnsUsuarioAlterar.add(validaSenhasIguais);
        rnsUsuarioAlterar.add(validaDadosUsuario);
        rnsUsuarioAlterar.add(criptografarSenha);

        Map<String, List<IStrategy>> mapaUsuario = new HashMap<>();

        mapaUsuario.put("CONSULTAR",rnsUsuarioConsultar);
        mapaUsuario.put("ALTERAR",rnsUsuarioAlterar);

        this.regrasNegocio.put(Usuario.class.getName(), mapaUsuario);

        //----------------------- Hash Endereco --------------------------//

        List<IStrategy> rnsEnderecoSalvar = new ArrayList<>();

        rnsEnderecoSalvar.add(validaDadosEndereco);
        rnsEnderecoSalvar.add(validaExistenciaCidade);

        List<IStrategy> rnsEnderecoAlterar = new ArrayList<>();

        rnsEnderecoAlterar.add(validaDadosEndereco);

        Map<String, List<IStrategy>> mapaEndereco = new HashMap<>();

        mapaEndereco.put("SALVAR",rnsEnderecoSalvar);
        mapaEndereco.put("ALTERAR",rnsEnderecoAlterar);

        this.regrasNegocio.put(Endereco.class.getName(), mapaEndereco);
    }
}
