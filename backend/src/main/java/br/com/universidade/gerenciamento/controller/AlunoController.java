package br.com.universidade.gerenciamento.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.universidade.gerenciamento.model.Aluno;
import br.com.universidade.gerenciamento.repository.AlunoRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/alunos")
@Tag(name = "Alunos", description = "Grupo de endpoints para criar, listar, atualizar e deletar alunos")
public class AlunoController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Operation(
		summary = "Listar todos os alunos",
		description = "Retorna uma lista com todas os alunos cadastrados"
	)
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Aluno> findAll() {
		return alunoRepository.findAll();
	}
	
	@Operation(summary = "Buscar aluno", description = "Buscar um aluno")
	@GetMapping(value = "/{id}")
	public ResponseEntity<Aluno> findById(@PathVariable(value = "id") Long id) {
		Optional<Aluno> aluno = alunoRepository.findById(id);
		if (aluno.isPresent())
			return new ResponseEntity<>(aluno.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@Operation(
		summary = "Adicionar um aluno",
		description = "Essa operacao salva um novo registro com as informacoes do aluno"
	)
	@PostMapping(
		consumes = MediaType.APPLICATION_JSON_VALUE
	)
	public Aluno save(@Valid @RequestBody Aluno aluno) {
		return alunoRepository.save(aluno);
	}
	
	@Operation(
		summary = "Atualizar aluno",
		description = "Essa operacao atualiza os dados de um aluno"
	)
	@PutMapping(value = "/{id}")
	public ResponseEntity<Aluno> update(@PathVariable(value = "id") Long id, @Valid @RequestBody Aluno newAluno) {
		Optional<Aluno> oldAluno = alunoRepository.findById(id);
		if (oldAluno.isPresent()) {
			Aluno aluno = oldAluno.get();
			aluno.setNome(newAluno.getNome());
			aluno.setCep(newAluno.getCep());
			aluno.setCpf(newAluno.getCpf());
			aluno.setEmail(newAluno.getEmail());
			aluno.setTelefone(newAluno.getTelefone());
			aluno.setEndereco(newAluno.getEndereco());
			aluno.setIdCurso(newAluno.getIdCurso());
			aluno.setMatricula(newAluno.getMatricula());
			alunoRepository.save(aluno);
			return new ResponseEntity<>(aluno, HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@Operation(
		summary = "Excluir aluno",
		description = "Exclui o registro do aluno cadastrado"
	)
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Object> delete(@PathVariable(value = "id") Long id) {
		Optional<Aluno> aluno = alunoRepository.findById(id);
		if (aluno.isPresent()) {
			alunoRepository.delete(aluno.get());
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
