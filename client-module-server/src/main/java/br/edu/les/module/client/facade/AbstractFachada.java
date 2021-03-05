package br.edu.les.module.client.facade;

import br.edu.les.module.client.dao.*;
import br.edu.les.module.client.domain.*;
import br.edu.les.module.client.strategy.IStrategy;
import br.edu.les.module.client.strategy.documento.InsereClienteNoDocumento;
import br.edu.les.module.client.strategy.endereco.InsereClienteNoEndereco;
import br.edu.les.module.client.strategy.endereco.ValidaExistenciaCidade;
import br.edu.les.module.client.strategy.cliente.ValidaDadosCliente;
import br.edu.les.module.client.strategy.cliente.ValidaExistenciaPessoa;
import br.edu.les.module.client.strategy.status.InsereStatus;
import br.edu.les.module.client.strategy.tipo.cliente.InsereTipoCliente;
import br.edu.les.module.client.strategy.tipo.usuario.InsereTipoUsuario;
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

    public static final String SALVAR = "SALVAR";
    public static final String ALTERAR = "ALTERAR";
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

    @Autowired
    private DocumentoDAO documentoDAO;

    @Autowired
    private TipoDocumentoDAO tipoDocumentoDAO;

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
    private InsereTipoCliente insereTipoCliente;

    @Autowired
    private InsereTipoUsuario insereTipoUsuario;

    @Autowired
    private InsereClienteNoDocumento insereClienteNoDocumento;

    @Autowired
    private InsereClienteNoEndereco insereClienteNoEndereco;

    @Autowired
    private InsereStatus insereStatus;

    @Autowired
    private ValidaDadosEndereco validaDadosEndereco;

    @Autowired
    private ValidaExistenciaCidade validaExistenciaCidade;


    public AbstractFachada(){}

    protected void inicializeMaps(){

        //------------------ Hash Classe e DAO -------------------------//

        daos.put(Cliente.class.getName(), clienteDAO);
        daos.put(Usuario.class.getName(), usuarioDAO);
        daos.put(Endereco.class.getName(), enderecoDAO);
        daos.put(Estado.class.getName(), estadoDAO);
        daos.put(Cidade.class.getName(), cidadeDAO);
        daos.put(TipoEndereco.class.getName(), tipoEnderecoDAO);
        daos.put(Documento.class.getName(), documentoDAO);
        daos.put(TipoDocumento.class.getName(), tipoDocumentoDAO);

        //------------------------ Hash Cliente ----------------------------//

        List<IStrategy> rnsClienteSalvar = new ArrayList<>();

        rnsClienteSalvar.add(validaDadosCliente);
        rnsClienteSalvar.add(validaExistenciaPessoa);
        rnsClienteSalvar.add(validaDadosUsuario);
        rnsClienteSalvar.add(validaSenhasIguais);
        rnsClienteSalvar.add(validaExistenciaUsuario);
        rnsClienteSalvar.add(geraCodigoUsuario);
        rnsClienteSalvar.add(criptografarSenha);
        rnsClienteSalvar.add(insereClienteNoDocumento);
        rnsClienteSalvar.add(insereClienteNoEndereco);
        rnsClienteSalvar.add(insereTipoCliente);
        rnsClienteSalvar.add(insereTipoUsuario);
        rnsClienteSalvar.add(insereStatus);

        List<IStrategy> rnsClienteAlterar = new ArrayList<>();

        rnsClienteAlterar.add(validaDadosCliente);
        rnsClienteAlterar.add(validaDadosUsuario);
        rnsClienteAlterar.add(validaExistenciaUsuario);

        Map<String,List<IStrategy>> mapaCliente = new HashMap<>();

        mapaCliente.put(SALVAR,rnsClienteSalvar);
        mapaCliente.put(ALTERAR,rnsClienteAlterar);

        this.regrasNegocio.put(Cliente.class.getName(), mapaCliente);

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
