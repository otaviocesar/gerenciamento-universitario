package br.com.universidade.gerenciamento.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.universidade.gerenciamento.model.Aluno;

public class AlunoCreateDto {

	private Long idCurso;
	
	private String matricula;

	private String nome;

	private String cpf;

	private String endereco;

	private String cep;

	private String email;

	private String telefone;

	public AlunoCreateDto(Aluno aluno) {
		this.idCurso = aluno.getIdCurso();
		this.matricula = aluno.getMatricula();
		this.nome = aluno.getNome();
		this.cpf = aluno.getCpf();
		this.endereco = aluno.getEndereco();
		this.cep = aluno.getCep();
		this.email = aluno.getEmail();
		this.telefone = aluno.getTelefone();
	}

	public Long getIdCurso() {
		return idCurso;
	}
	
	public void setIdCurso(Long idCurso) {
		this.idCurso = idCurso;
	}
	
	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public static List<AlunoCreateDto> converter(List<Aluno> alunos) {
		return alunos.stream().map(AlunoCreateDto::new).collect(Collectors.toList());
	}
}
